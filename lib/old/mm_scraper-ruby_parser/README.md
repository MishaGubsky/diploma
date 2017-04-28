### Mongo or MySQL
* Парсер - Конфиги монги и mysql соединения для парсера в файлах parsers/db.js и parsers/db_myql.js
* Scrapper - Configs for dbs locate in scraper/db_mongo.rb and scraper/db_mysql.rb.

### Установка пакетов
* Парсер - `npm install`
* Scrapper : `gem install bundle`
			 `bundle install`

### Запуск
Нужно иметь Ruby v2.3.1, Node.js v6.
* Запуск js-парсеров: `node app.js`
* Пример запуска скрапера: `rake "app:new_content[mysql]"`
* Пример запуска ruby-парсера: `rake "app:parse_content[mysql]"`
* Запуск скрапера и ruby-парсера последовательно: `rake app:update_content[mysql]`
* Выкачка всей информации с нуля: `rake app:update_content[mysql, true]`
* Запуск скрапера и ruby-парсера, устанавливая лимит выкачанных страниц: `rake app:update_content[mysql, false, 3]`
* Пример обновления нескольких колонок на конкретном ресурсе: `rake app:update_publications[mysql,buzzfeed] COLUMNS=lead,content`

### Обновление расписания
После обновления файла `config/schedule.rb`, необходимо выполнить следующее:
`whenever --update-crontab`

### README
Как соскрапить все ссылки с главной базфида и добавить их в MySQL:
```
'INSERT INTO articles(url, lastSeen, resource, processed, counter, creationTime, title, authors, category, content) VALUES ' + Array.prototype.slice.call($('a.link-gray:not(.col)')).map(x => x.href).filter(x => x.split('/').length === 5).map(x => x.replace(/https\:\/\/www\.buzzfeed\.com/gi, '')).filter((item, idx, self) => self.indexOf(item) === idx).map(x => `"${x}", "${new Date().toISOString().split('T')[0]}", "buzzfeed", 0, 0, NULL, NULL, NULL, NULL, NULL`).map(x => `(${x})`).join(', ')
```
