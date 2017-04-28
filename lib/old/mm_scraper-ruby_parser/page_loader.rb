require 'faraday'
require 'faraday_middleware'
require 'capybara'
require 'capybara/poltergeist'
require_relative './config/constants'
require_relative 'proxy'

class PageLoader

  def initialize(domain, response: nil, allow_proxy: ALLOW_PROXY, headers: {})
    @domain = domain
    @allow_proxy = allow_proxy
    @headers = headers
    @connection = Faraday.new(url: domain) do |faraday|
      faraday.adapter Faraday.default_adapter
      faraday.response response if response
    end
  end

  def load_page(relative_url, params = {})
    page = nil
    attempt = 0
    while attempt <= ATTEMPT_LIMIT
      valid = true
      begin
        if @allow_proxy
          ###proxy
        else
          response = @connection.get(relative_url, params) do |request|
            headers.each do |header, value|
              request.headers[header.to_s] = value
            end
          end
        end

        status = response.status
        page = response.body
        page.define_singleton_method(:status) { status }

      rescue Exception => e
        valid = false
        if attempt < 10
          attempt += 1
        else
          puts "crashed_url: #{@domain + relative_url}"
          puts "error_message: #{e}"
          break
        end
      end
      break if valid
    end
    page
  end

  def headers=(hash)
    hash.each { |k, v| @headers[k] = v }
  end

  def headers
    @headers
  end
end

class DynamicPageLoader

  def initialize(allow_proxy = ALLOW_PROXY)
    @allow_proxy = allow_proxy
    @session = Capybara::Session.new(:poltergeist)
    @session.driver.timeout = 60
  end

  def load_page(full_url, params = {})
    page = nil
    attempt = 0
    while attempt <= 10
      valid = true
      begin
        if @allow_proxy
          proxy = Proxy.get_proxy
          @session.driver.set_proxy(proxy.host, proxy.port)
        end
        @session.visit(full_url)

        status = @session.status_code == 200
        page = @session.html.to_s
        page.define_singleton_method(:status) { status }

      rescue Exception => e
        valid = false
        if attempt < 10
          attempt += 1
        else
          puts "crashed_url: #{full_url}"
          puts "error_message: #{e}"
          break
        end
      end
      break if valid
    end
    page
  end

end
