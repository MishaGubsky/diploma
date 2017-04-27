require 'open-uri'
require 'http'
require 'json'
require_relative './../../page_loader'
require_relative './../../config/constants'
require_relative 'social_network'

class Facebook < SocialNetworkMetrics

  FACEBOOK_API_DOMAIN = "https://graph.facebook.com"
  GRAPH_API_LINK = ->(url) { "/?id=#{URI.encode_www_form_component(url)}&access_token=#{FACEBOOK_ACCESS_TOKEN}"}

  def initialize(revision_id, url)
    super(revision_id)
    @agent = PageLoader.new(FACEBOOK_API_DOMAIN, response: :json)
    begin
      @dom = @agent.load_page GRAPH_API_LINK.call(url)
    rescue Exception => e
      puts "bad url: #{url}"
      puts e.message
    end

    @external_attributes = %w{
      reposts
      comments
    }
  end

  def reposts
    @dom["share"]["share_count"]
  end

  def comments
    @dom["share"]["comment_count"]
  end

end
