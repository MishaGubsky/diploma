class DatabaseService

  def initialize database_name
    if database_name == 'mysql'
      return MysqlDatabaseService
    elsif database_name == 'mongo'
      return MongoDatabaseService
    else
      raise ArgumentError
    end
  end

end