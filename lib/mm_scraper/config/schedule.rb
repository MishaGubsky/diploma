# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
set :output, 'log/cron.log'
# set :output, "/path/to/my/cron_log.log"
#
every 6.hours do
  rake "app:update[mysql,false]"
end

every 1.day, at: '00:10' do
  rake "app:update_categories"
end

# Learn more: http://github.com/javan/whenever
