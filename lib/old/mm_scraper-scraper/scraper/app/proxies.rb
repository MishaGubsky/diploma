require 'net/http'
require 'openssl'
require 'thread/pool'
require 'http'
require_relative './../config/constants'

class Proxy
  def initialize
    path = File.dirname(__FILE__) + "/../config/valid_proxies.txt"
    @proxies = File.readlines(path)
  end

  def get_proxy
    proxy = random_proxy
    parse_proxy(proxy)
  end

  def random_proxy
    length = @proxies.count
    index = (rand * length).floor
    @proxies[index]
  end

  def parse_proxy(proxy)
    host, port = proxy.split(':')
    {
      :host => host,
      :port => port.to_i
    }
  end
end
