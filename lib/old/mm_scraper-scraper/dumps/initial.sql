-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.6.32-log - MySQL Community Server (GPL)
-- ОС Сервера:                   Win64
-- HeidiSQL Версия:              9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Дамп структуры для таблица abc123.articles
DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(1024) NOT NULL,
  `lastUpdated` datetime NOT NULL DEFAULT '2016-01-01',
  `resource` varchar(1024) NOT NULL,
  `processed` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `counter` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `creationTime` datetime DEFAULT NULL,
  `topPost` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `title` text CHARACTER SET utf8mb4,
  `authors` varchar(1024) CHARACTER SET utf8mb4 DEFAULT NULL,
  `category` varchar(1024) CHARACTER SET utf8mb4 DEFAULT NULL,
  `keywords` varchar(1024) DEFAULT NULL,
  `tags` varchar(4096) DEFAULT NULL,
  `content` mediumtext CHARACTER SET utf8mb4,
  `imageCount` int(11) DEFAULT NULL,
  `videoCount` int(11) DEFAULT NULL,
  `linkCount` int(11) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Экспортируемые данные не выделены.


-- Дамп структуры для таблица abc123.revisions
DROP TABLE IF EXISTS `revisions`;
CREATE TABLE IF NOT EXISTS `revisions` (
  `_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `articleId` int(11) unsigned NOT NULL,
  `loadedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `rawContent` mediumtext CHARACTER SET utf8mb4 NOT NULL,
  `resource` varchar(1024) NOT NULL,
  `processed` tinyint(1) NOT NULL DEFAULT '0',
  `valid` tinyint(1) NOT NULL DEFAULT '0',
  `likes` int(11) NOT NULL DEFAULT '0',
  `shares` int(11) NOT NULL DEFAULT '0',
  `comments` int(11) NOT NULL DEFAULT '0',
  `views` int(11) NOT NULL DEFAULT '0',
  `shareableWith` varchar(1024) NOT NULL,
  PRIMARY KEY (`_id`),
  KEY `FK_revisions_articles` (`articleId`),
  CONSTRAINT `FK_revisions_articles` FOREIGN KEY (`articleId`) REFERENCES `articles` (`_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Экспортируемые данные не выделены.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
