require 'nokogiri'
require 'json'
require_relative 'parser'
require_relative './../social_networks/facebook'

class ParserBuzzfeed < Parser

  CONTRIBUTIONS_URL = ->(buzz_id) { "https://www.buzzfeed.com/_comments/#{buzz_id}/contributions" }

  def initialize(article, publication_attributes: nil)
    super(article, publication_attributes: publication_attributes)
    @dom = get_dom
    @impressions = get_impressions
    @buzz_id = @dom.at_css('meta[property="bf:buzzid"]')['content']
    @publication_attributes ||= %w{
      title
      lead
      content
      category_text
      authors_text
      posted_at
      image_count
      video_count
      link_count
      keywords_text
      top_post
      meta_tags
      url
    }

    @publication_attributes |= @static_attributes

    @dynamic_attributes = %w{
      views
      comments
      likes
      dislikes
      lol
      win
      fail
      omg
      cute
      wtf
      yaaass
      ew
      ahhhhh
    }
    @external_attributes = %w{
      Facebook
    }
  rescue
  end

  def comments
    page = @agent.load_page CONTRIBUTIONS_URL.call(@buzz_id)
    dom_contr = Nokogiri::HTML(page)
    count_contributes = dom_contr.css('.contrib.bf_dom').count
  end

  def views
    node = @dom.css("#post-#{@buzz_id}").first
    number = node['rel:ptool_stats'].scan(/"impressions":"(.*?)"/).flatten!
    string_num = number ? number.first : ''
    string_num.gsub(/[,\s+]/, '').to_i
  end

  def title
    @dom.at_css('meta[name="title"]')['content']
  end

  def lead
    @dom.at_css('meta[property="og:description"]')['content']
  end

  def content
    node = @dom.at_css('div#buzz_sub_buzz').clone
    node.css('script').remove
    node.css('iframe').remove
    node.css('.print').remove
    node.css('.sub_buzz_source_via').remove
    node.css('.sub_buzz_grid_source_via').remove
    node.css('.reuseble-id').remove
    node.css('.instagram-media').remove
    node.css('.bf-tweet').remove
    node.css('.buzz-topic-links').remove
    node.text.gsub(/\s+/, ' ')
  end

  def authors_text
    @dom.at_css('meta[property=author]')['content']
  end

  def category_text
    @dom.at_css('meta[property="article:section"]')['content']
  end

  def posted_at
    DateTime.parse(@body.slice(/published: "\d{4}\-\d{2}\-\d{2} \d{2}\:\d{2}\:\d{2}"/))
  end

  def image_count
    node = @dom.at_css('div#buzz_sub_buzz').clone
    node.css('.share-box').remove
    node.css('.twitter-emoji').remove
    node.css('.progload-tweet').remove
    node.css('img').count
  end

  def video_count
    (@dom.css('#buzz_sub_buzz .video-embed-area') + @dom.css('#buzz_sub_buzz .fb-video')).count
  end

  def link_count
    node = @dom.at_css('div#buzz_sub_buzz').clone
    node.css('iframe').remove
    node.css('.print').remove
    node.css('.instagram-media').remove
    node.css('.bf-tweet').remove
    node.css('.buzz-topic-links').remove
    node.css('a').map(&:to_s).delete_if { |x| x !~ /^<a.+?>.+?<\/a>$/ }.count
  end

  def keywords_text
    (@dom.css('.tag.pub') + @dom.css('.tag')).map(&:text).join(', ')
  end

  def top_post
    @dom.css('.trending-badge').count > 0
  end

  def meta_tags
    @dom.at_css('meta[name="news_keywords"]')['content']
  end

  def likes
    @impressions[:love]
  end

  def dislikes
    @impressions[:hate]
  end

  def lol
    @impressions[:lol]
  end

  def win
    @impressions[:win]
  end

  def fail
    @impressions[:fail]
  end

  def omg
    @impressions[:omg]
  end

  def cute
    @impressions[:cute]
  end

  def wtf
    @impressions[:wtf]
  end

  def yaaass
    @impressions[:yaaass]
  end

  def ew
    @impressions[:ew]
  end

  def ahhhhh
    @impressions[:ahhhhh]
  end

  def get_impressions
    impressions = {}
    @dom.css('.reaction').each do |data|
      json = JSON.parse(data['reaction_data'])
      impressions[json['name'].to_sym] = json['count'].to_i if json
    end
    impressions
  end

  def is_text
    return false if category_text == 'Videos'
    return false if keywords_text.include?('quiz')
    content.length > 100
  end

end
