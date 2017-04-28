ALLOW_DYNAMIC_PARSE = true
ALLOW_DYNAMIC_SCRAPE = false
ALLOW_PROXY = false
PARSE_LIMIT_DAYS = 30
ATTEMPT_LIMIT = 10
THREAD_POOL_SIZE = 64
KEY_PAGINATION = '###'

FACEBOOK_ACCESS_TOKEN = '1234047186608295|5e2c5f05f4d8fa70cc10a95819556e7e'

WORKING_RESOURCES = %w{
  buzzfeed
  nowness
  techcrunch
  vice
  papermag
}

class String
  def classify
    self.split('_').collect(&:capitalize).join
  end

  def constantize
    Object.const_get(self)
  end

  def to_class
    Object.const_get(self.classify)
  end

  def to_boolean
    self == 'true'
  end
end
