-- ACTUAL DATABASE STRUCTURE AT 15.11.16

CREATE DATABASE IF NOT EXISTS `ml-scrapper`;
USE `ml-scrapper`;

DROP TABLE IF EXISTS `external_metrics`;
DROP TABLE IF EXISTS `social_networks`;
DROP TABLE IF EXISTS `dynamic_metrics`;
DROP TABLE IF EXISTS `revisions`;
DROP TABLE IF EXISTS `static_metrics`;
DROP TABLE IF EXISTS `articles`;
DROP TABLE IF EXISTS `resources`;

CREATE TABLE IF NOT EXISTS `resources` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`domain` varchar(1024) NOT NULL,
	`module` varchar(1024) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `articles` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`url` varchar(1024) NOT NULL,
	`static_processed` tinyint(1) NOT NULL DEFAULT '0',
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `static_metrics` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`article_id` int(11) unsigned NOT NULL,
	`posted_at` datetime NOT NULL,
	`title` varchar(1024) CHARACTER SET utf8mb4 NOT NULL,
	`authors` varchar(1024) CHARACTER SET utf8mb4 NOT NULL,
	`category` varchar(1024) CHARACTER SET utf8mb4 NOT NULL,
	`tags` varchar(1024) CHARACTER SET utf8mb4 NOT NULL,
	`keywords` varchar(1024) CHARACTER SET utf8mb4 NOT NULL,
	`image_count` int(11) NOT NULL DEFAULT '0',
	`video_count` int(11) NOT NULL DEFAULT '0',
	`link_count` int(11) NOT NULL DEFAULT '0',
	`content` mediumtext CHARACTER SET utf8mb4 NOT NULL,
	`top_post` tinyint(1) NOT NULL DEFAULT '0',
	PRIMARY KEY (`id`),
	FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `revisions` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`article_id` int(11) unsigned NOT NULL,
	`resource_id` int(11) unsigned NOT NULL,
	`loadet_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`raw_content` mediumtext CHARACTER SET utf8mb4 NOT NULL,
	`dynamic_processed` tinyint(1) NOT NULL DEFAULT '0',
	PRIMARY KEY (`id`),
	FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (`resource_id`) REFERENCES `resources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `dynamic_metrics` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`revision_id` int(11) unsigned NOT NULL,
	`views` int(11) NOT NULL DEFAULT '0',
	`comments` int(11) NOT NULL DEFAULT '0',
	`likes` int(11) NOT NULL DEFAULT '0',
	`reposts` int(11) NOT NULL DEFAULT '0',
	`valid` tinyint(1) NOT NULL DEFAULT '0',
	PRIMARY KEY (`id`),
	FOREIGN KEY (`revision_id`) REFERENCES `revisions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `social_networks` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`name` varchar(1024) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `external_metrics` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`dynamic_metric_id` int(11) unsigned NOT NULL,
	`social_network_id` int(11) unsigned NOT NULL,
	`likes` int(11) NOT NULL DEFAULT '0',
	`reposts` int(11) NOT NULL DEFAULT '0',
	`comments` int(11) NOT NULL DEFAULT '0',
	`views` int(11) NOT NULL DEFAULT '0',
	`valid` tinyint(1) NOT NULL DEFAULT '0',
	PRIMARY KEY (`id`),
	FOREIGN KEY (`dynamic_metric_id`) REFERENCES `dynamic_metrics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (`social_network_id`) REFERENCES `social_networks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
