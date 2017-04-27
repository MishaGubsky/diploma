require_relative './config/constants'


class Proxy

  PROXIES_LIST = File.readlines( File.dirname(__FILE__) + "/config/proxies.txt")

  attr_reader :host, :port

  def initialize(options = {})
    @host = options[:host]
    @port = options[:port]
  end

  def self.get_proxy
    proxy = random_proxy
    Proxy.new(parse_proxy(proxy))
  end

private

  def self.random_proxy
    length = PROXIES_LIST.count
    index = (rand * length).floor
    PROXIES_LIST[index]
  end

  def self.parse_proxy(proxy)
    host, port = proxy.split(':')
    {
      :host => host,
      :port => port.to_i
    }
  end
end
