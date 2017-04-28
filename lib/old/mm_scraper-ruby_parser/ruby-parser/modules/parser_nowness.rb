require 'json'
require 'byebug'
require 'nokogiri'
require_relative 'parser'

class ParserNowness < Parser

  def initialize(article, publication_attributes: nil)
    @language = "en-us"
    options = { :response => :json }
    headers = {'X-Nowness-Language' => @language}
    super(article, options: options, headers: headers, publication_attributes: publication_attributes)
    @full_url = url

    @publication_attributes ||= %w{
      posted_at
      title
      lead
      meta_tags
      authors_text
      category_text
      keywords_text
      content
      url
    }

    @publication_attributes |= @static_attributes

    @dynamic_attributes = %w{
      views
      comments
      likes
    }
    @external_attributes = %w{
      Facebook
    }
  rescue
  end

  def url
    slug = get_obj_by_language(@body)['slug']
    category_slug = get_obj_by_language(@body['category'])['slug']
    "https://www.nowness.com/category/#{category_slug}/#{slug}"
  end

  def posted_at
    DateTime.parse(@body['publishedAt'])
  end

  def title
    get_obj_by_language(@body)['title']
  end

  def lead
    get_obj_by_language(@body)['subtitle']
  end

  def meta_tags
    get_obj_by_language(@body)['keywords'].join(', ')
  end

  def authors_text
    @body['contributors'].map { |author| author['displayName'] }.join(', ')
  end

  def category_text
    get_obj_by_language(@body['category'])['name']
  end

  def keywords_text
    @body['tags'].select { |tag| tag['language'] == @language }
                 .select { |tag| tag['translations'].first['language'] == @language }
                 .map { |tag| tag['translations'].first['text'] }
                 .join(', ')
  end

  def content
    Nokogiri::HTML(get_obj_by_language(@body)['content']).text
  end

  def views
    @body['viewsCount_en_us'].to_i + @body['viewsCount_zh_cn'].to_i
  end

  def comments
    @body['commentsCount_en_us'].to_i + @body['commentsCount_zh_cn'].to_i
  end

  def likes
    @body['lovesCount_en_us'].to_i + @body['lovesCount_zh_cn'].to_i
  end

private
  def get_obj_by_language(obj)
    obj['translations'].select {|q| q['language'] == @language }.first
  end
end
