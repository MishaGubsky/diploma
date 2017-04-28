require 'json'
require 'byebug'
require 'nokogiri'
require_relative 'parser'

class ParserVice < Parser

  def initialize(article, publication_attributes: nil)
    options = { :response => :json }
    super(article, options: options, publication_attributes: publication_attributes)
    @full_url = url
    @dom = Nokogiri::HTML(@body['body'])

    @publication_attributes ||= %w{
      posted_at
      title
      lead
      authors_text
      category_text
      keywords_text
      content
      image_count
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
    @body['url']
  end

  def posted_at
    DateTime.strptime(@body['publish_date'].to_s,'%Q')
  end

  def title
    @body['title']
  end

  def lead
    @body['dek'] || @dom.text.split('.').first
  end

  def authors_text
    @body['contributions'].map{|c| c['contributor']['full_name']}.join(', ')
  end

  def category_text
    @body['primary_topic']['slug']
  end

  def keywords_text
    @body['topics'].map{|topic| topic['slug']}.join(', ')
  end

  def content
    @dom.text
  end

  def image_count
    @dom.css('img').count
  end

  def link_count
    @dom.css('a').count
  end
end
