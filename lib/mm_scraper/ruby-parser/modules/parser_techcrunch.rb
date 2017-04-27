require 'nokogiri'
require_relative 'parser'
require_relative './../social_networks/facebook'

class ParserTechcrunch < Parser
  def initialize(article, publication_attributes: nil)
    super(article, publication_attributes: publication_attributes)
    @dom = get_dom

    @publication_attributes ||= %w{
      title
      lead
      content
      category_text
      authors_text
      image_count
      video_count
      posted_at
      link_count
      meta_tags
      keywords_text
      url
    }

    @publication_attributes |= @static_attributes

    @external_attributes = %w{
      Facebook
    }
  rescue
  end

  def title
    @dom.at_css('meta[name="sailthru.title"]')['content']
  end

  def lead
    meta = @dom.at_css('meta[name="sailthru.description"]')
    meta ? meta['content'].strip : @dom.at_css('meta[name="description"]')['content']
  end

  def content
    node = @dom.at_css('div.article-entry.text').clone
    node.css('div').remove
    node.css('small').remove
    node.css('script').remove
    node.text.gsub(/\s+/, ' ')
  end

  def authors_text
    @dom.css('a[rel="author"]').last.text
  end

  def category_text
    @dom.at_css('meta[name="category"]')['content']
  end

  def posted_at
    DateTime.parse(@dom.css('meta[name="sailthru.date"]').first['content'])
  end

  def image_count
    @dom.css('div.article-entry.text img').count
  end

  def video_count
    (@dom.css('div.article-entry.text .embed-youtube') + @dom.css('div.article-entry.text .fb-video') +
      @dom.css('div.article-entry.text .vdb_player')).count
  end

  def link_count
    @dom.css('div.article-entry.text a').map(&:to_s).delete_if { |x| x !~ /^<a.+?>.+?<\/a>$/ }.count
  end

  def meta_tags
    meta = @dom.css('meta[name="sailthru.tags"]').first
    meta ? meta['content'] : ''
  end

  def keywords_text
    result = @dom.css('.accordion.recirc-accordion ul>li').tap{|x| x.pop }.map(&:text).map(&:strip).join(', ')
    result = @dom.css('.tag').map(&:text).map(&:strip).join(', ') if result.empty?
  end

end
