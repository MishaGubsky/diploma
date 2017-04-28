require 'nokogiri'
require_relative 'parser'

class ParserPapermag < Parser

  def initialize(article, publication_attributes: nil)
    options = { :response => :json }
    super(article, options: options, publication_attributes: publication_attributes)
    @post = @body['post']
    @full_url = url
    @dom = Nokogiri::HTML(@post['body'])
    @dom.css('blockquote').remove

    @publication_attributes ||= %w{
      posted_at
      title
      lead
      authors_text
      category_text
      keywords_text
      meta_tags
      content
      image_count
      video_count
      link_count
      url
    }

    @publication_attributes |= @static_attributes

    @external_attributes = %w{
      Facebook
    }
  rescue
  end

  def url
    @post['post_url']
  end

  def posted_at
    DateTime.strptime(@post['created_ts'].to_s,'%s')
  end

  def title
    @post['headline']
  end

  def lead
    @post['meta_description']
  end

  def authors_text
    @post['roar_authors'].map{|a| a['name']}.join(', ')
  end

  def category_text
    @post['entity_type']
  end

  def keywords_text
    @post['tags'].join(', ')
  end

  def meta_tags
    @post['public_tags'].join(', ')
  end

  def content
    node = @dom.clone
    node.css('.shortcode-media').remove
    node.text.strip
  end

  def image_count
    count = 0
    instagram = @post['shortcodes_by_adapter']['instagram']
    count += instagram.select{|c| c.to_s.include?('Instagram photo')}.count if instagram
    count += @post['shortcodes'].select{|c| c.include?('image')}.count
    count
  end

  def video_count
    count = 0
    instagram = @post['shortcodes_by_adapter']['instagram']
    count += instagram.select{|c| c.to_s.include?('Instagram video')}.count if instagram
    count += @post['shortcodes'].select{|c| c.include?('youtube') || c.include?('vine')}.count
    count
  end

  def link_count
    @dom.css('a').count
  end
end
