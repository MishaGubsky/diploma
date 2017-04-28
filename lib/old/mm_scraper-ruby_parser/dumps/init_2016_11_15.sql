-- MySQL dump 10.13  Distrib 5.6.33, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: ml-scrapper
-- ------------------------------------------------------
-- Server version	5.6.33-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `active_admin_comments`
--

DROP TABLE IF EXISTS `active_admin_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `active_admin_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `namespace` varchar(255) DEFAULT NULL,
  `body` text,
  `resource_id` varchar(255) NOT NULL,
  `resource_type` varchar(255) NOT NULL,
  `author_type` varchar(255) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_active_admin_comments_on_author_type_and_author_id` (`author_type`,`author_id`) USING BTREE,
  KEY `index_active_admin_comments_on_namespace` (`namespace`) USING BTREE,
  KEY `index_active_admin_comments_on_resource_type_and_resource_id` (`resource_type`,`resource_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `active_admin_comments`
--

LOCK TABLES `active_admin_comments` WRITE;
/*!40000 ALTER TABLE `active_admin_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `active_admin_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_users`
--

DROP TABLE IF EXISTS `admin_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `encrypted_password` varchar(255) NOT NULL DEFAULT '',
  `reset_password_token` varchar(255) DEFAULT NULL,
  `reset_password_sent_at` datetime DEFAULT NULL,
  `remember_created_at` datetime DEFAULT NULL,
  `sign_in_count` int(11) NOT NULL DEFAULT '0',
  `current_sign_in_at` datetime DEFAULT NULL,
  `last_sign_in_at` datetime DEFAULT NULL,
  `current_sign_in_ip` varchar(255) DEFAULT NULL,
  `last_sign_in_ip` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_admin_users_on_email` (`email`) USING BTREE,
  UNIQUE KEY `index_admin_users_on_reset_password_token` (`reset_password_token`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_users`
--

LOCK TABLES `admin_users` WRITE;
/*!40000 ALTER TABLE `admin_users` DISABLE KEYS */;
INSERT INTO `admin_users` VALUES (1,'admin@example.com','$2a$11$cbb54wjpFj5.ZBu6l94YuetmLDcDCndIl0TemHGIJLIEKDUyHj2t2',NULL,NULL,'2017-01-03 10:50:07',7,'2017-01-05 08:57:54','2017-01-03 10:50:07','127.0.0.1','127.0.0.1','2016-12-27 14:40:49','2017-01-05 08:57:54');
/*!40000 ALTER TABLE `admin_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `resource_id` int(11) unsigned NOT NULL,
  `last_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `url` varchar(1024) NOT NULL,
  `static_processed` tinyint(1) NOT NULL DEFAULT '0',
  `with_api` tinyint(1) NOT NULL DEFAULT '0',
  `posted_at` datetime DEFAULT NULL,
  `user_url` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `resource_id` (`resource_id`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`resource_id`) REFERENCES `resources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=539 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(1024) CHARACTER SET utf8mb4 NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `facebook` varchar(1024) CHARACTER SET utf8mb4 DEFAULT NULL,
  `twitter` varchar(1024) CHARACTER SET utf8mb4 DEFAULT NULL,
  `resource_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `authors_ibfk_1` (`resource_id`),
  CONSTRAINT `authors_ibfk_1` FOREIGN KEY (`resource_id`) REFERENCES `resources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=270 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authors_publications`
--

DROP TABLE IF EXISTS `authors_publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors_publications` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `publication_id` int(11) unsigned DEFAULT NULL,
  `author_id` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `authors_publications_ibfk_1` (`author_id`),
  KEY `authors_publications_ibfk_2` (`publication_id`),
  CONSTRAINT `authors_publications_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `authors_publications_ibfk_2` FOREIGN KEY (`publication_id`) REFERENCES `publications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=271 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors_publications`
--

LOCK TABLES `authors_publications` WRITE;
/*!40000 ALTER TABLE `authors_publications` DISABLE KEYS */;
/*!40000 ALTER TABLE `authors_publications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) CHARACTER SET utf8mb4 NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configs`
--

DROP TABLE IF EXISTS `configs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `configs` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `resource_id` int(11) unsigned NOT NULL,
  `views` tinyint(1) DEFAULT '0',
  `comments` tinyint(1) DEFAULT '0',
  `reposts` tinyint(1) DEFAULT '0',
  `likes` tinyint(1) DEFAULT '0',
  `dislikes` tinyint(1) DEFAULT '0',
  `lol` tinyint(1) DEFAULT '0',
  `win` tinyint(1) DEFAULT '0',
  `fail` tinyint(1) DEFAULT '0',
  `omg` tinyint(1) DEFAULT '0',
  `cute` tinyint(1) DEFAULT '0',
  `wtf` tinyint(1) DEFAULT '0',
  `yaaass` tinyint(1) DEFAULT '0',
  `ew` tinyint(1) DEFAULT '0',
  `ahhhhh` tinyint(1) DEFAULT '0',
  `facebook_comments` tinyint(1) DEFAULT '0',
  `facebook_reposts` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `resource_id` (`resource_id`),
  CONSTRAINT `configs_ibfk_1` FOREIGN KEY (`resource_id`) REFERENCES `resources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configs`
--

LOCK TABLES `configs` WRITE;
/*!40000 ALTER TABLE `configs` DISABLE KEYS */;
/*!40000 ALTER TABLE `configs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dynamic_metrics`
--

DROP TABLE IF EXISTS `dynamic_metrics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dynamic_metrics` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `revision_id` int(11) unsigned NOT NULL,
  `views` int(11) DEFAULT NULL,
  `comments` int(11) DEFAULT NULL,
  `reposts` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `dislikes` int(11) DEFAULT NULL,
  `lol` int(11) DEFAULT NULL,
  `win` int(11) DEFAULT NULL,
  `fail` int(11) DEFAULT NULL,
  `omg` int(11) DEFAULT NULL,
  `cute` int(11) DEFAULT NULL,
  `wtf` int(11) DEFAULT NULL,
  `yaaass` int(11) DEFAULT NULL,
  `ew` int(11) DEFAULT NULL,
  `ahhhhh` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `revision_id` (`revision_id`),
  CONSTRAINT `dynamic_metrics_ibfk_1` FOREIGN KEY (`revision_id`) REFERENCES `revisions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=368 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dynamic_metrics`
--

LOCK TABLES `dynamic_metrics` WRITE;
/*!40000 ALTER TABLE `dynamic_metrics` DISABLE KEYS */;
/*!40000 ALTER TABLE `dynamic_metrics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `external_metrics`
--

DROP TABLE IF EXISTS `external_metrics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `external_metrics` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `dynamic_metric_id` int(11) unsigned NOT NULL,
  `social_network_id` int(11) unsigned NOT NULL,
  `likes` int(11) DEFAULT NULL,
  `reposts` int(11) DEFAULT NULL,
  `comments` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `is_valid` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `dynamic_metric_id` (`dynamic_metric_id`),
  KEY `social_network_id` (`social_network_id`),
  CONSTRAINT `external_metrics_ibfk_1` FOREIGN KEY (`dynamic_metric_id`) REFERENCES `dynamic_metrics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `external_metrics_ibfk_2` FOREIGN KEY (`social_network_id`) REFERENCES `social_networks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=368 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_metrics`
--

LOCK TABLES `external_metrics` WRITE;
/*!40000 ALTER TABLE `external_metrics` DISABLE KEYS */;
/*!40000 ALTER TABLE `external_metrics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factors`
--

DROP TABLE IF EXISTS `factors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `factors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `n_symbols` int(11) DEFAULT NULL,
  `n_symbols_no_space` int(11) DEFAULT NULL,
  `n_syllables` int(11) DEFAULT NULL,
  `n_sentences` int(11) DEFAULT NULL,
  `n_tokens_content` int(11) DEFAULT NULL,
  `n_unique_tokens` int(11) DEFAULT NULL,
  `n_non_stop_words` int(11) DEFAULT NULL,
  `n_non_stop_unique_tokens` int(11) DEFAULT NULL,
  `average_sentence_length` float DEFAULT NULL,
  `average_token_length` float DEFAULT NULL,
  `average_token_length_syllables` float DEFAULT NULL,
  `most_common_non_stop_words` varchar(255) DEFAULT NULL,
  `global_negative_polarity` float DEFAULT NULL,
  `global_positive_polarity` float DEFAULT NULL,
  `global_neutral_polarity` float DEFAULT NULL,
  `global_sentiment_polarity` float DEFAULT NULL,
  `global_subjectivity` float DEFAULT NULL,
  `global_rate_positive_words` float DEFAULT NULL,
  `global_rate_negative_words` float DEFAULT NULL,
  `rate_positive_words` float DEFAULT NULL,
  `rate_negative_words` float DEFAULT NULL,
  `avg_positive_polarity` float DEFAULT NULL,
  `min_positive_polarity` float DEFAULT NULL,
  `max_positive_polarity` float DEFAULT NULL,
  `avg_negative_polarity` float DEFAULT NULL,
  `min_negative_polarity` float DEFAULT NULL,
  `max_negative_polarity` float DEFAULT NULL,
  `LDA_00` float DEFAULT NULL,
  `LDA_01` float DEFAULT NULL,
  `LDA_02` float DEFAULT NULL,
  `LDA_03` float DEFAULT NULL,
  `LDA_04` float DEFAULT NULL,
  `LDA_05` float DEFAULT NULL,
  `LDA_06` float DEFAULT NULL,
  `LDA_07` float DEFAULT NULL,
  `LDA_08` float DEFAULT NULL,
  `LDA_09` float DEFAULT NULL,
  `LDA_10` float DEFAULT NULL,
  `LDA_11` float DEFAULT NULL,
  `LDA_12` float DEFAULT NULL,
  `LDA_13` float DEFAULT NULL,
  `LDA_14` float DEFAULT NULL,
  `LDA_15` float DEFAULT NULL,
  `LDA_16` float DEFAULT NULL,
  `LDA_17` float DEFAULT NULL,
  `LDA_18` float DEFAULT NULL,
  `LDA_19` float DEFAULT NULL,
  `LDA_20` float DEFAULT NULL,
  `LDA_21` float DEFAULT NULL,
  `LDA_22` float DEFAULT NULL,
  `LDA_23` float DEFAULT NULL,
  `LDA_24` float DEFAULT NULL,
  `LDA_25` float DEFAULT NULL,
  `LDA_26` float DEFAULT NULL,
  `LDA_27` float DEFAULT NULL,
  `LDA_28` float DEFAULT NULL,
  `LDA_29` float DEFAULT NULL,
  `lda_top_topic` varchar(255) DEFAULT NULL,
  `rake_key_phrase` varchar(255) DEFAULT NULL,
  `factor_type` int(11) NOT NULL DEFAULT '0',
  `publication_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `factors_ibfk_1` (`publication_id`),
  CONSTRAINT `factors_ibfk_1` FOREIGN KEY (`publication_id`) REFERENCES `publications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factors`
--

LOCK TABLES `factors` WRITE;
/*!40000 ALTER TABLE `factors` DISABLE KEYS */;
/*!40000 ALTER TABLE `factors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keywords`
--

DROP TABLE IF EXISTS `keywords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keywords` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(80) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1916 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keywords`
--

LOCK TABLES `keywords` WRITE;
/*!40000 ALTER TABLE `keywords` DISABLE KEYS */;
/*!40000 ALTER TABLE `keywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keywords_publications`
--

DROP TABLE IF EXISTS `keywords_publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keywords_publications` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `publication_id` int(11) unsigned DEFAULT NULL,
  `keyword_id` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `keywords_publications_ibfk_1` (`keyword_id`),
  KEY `keywords_publications_ibfk_2` (`publication_id`),
  CONSTRAINT `keywords_publications_ibfk_1` FOREIGN KEY (`keyword_id`) REFERENCES `keywords` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `keywords_publications_ibfk_2` FOREIGN KEY (`publication_id`) REFERENCES `publications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1668 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keywords_publications`
--

LOCK TABLES `keywords_publications` WRITE;
/*!40000 ALTER TABLE `keywords_publications` DISABLE KEYS */;
/*!40000 ALTER TABLE `keywords_publications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keywords_stats`
--

DROP TABLE IF EXISTS `keywords_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keywords_stats` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `frequency` float NOT NULL,
  `keyword_id` int(11) unsigned NOT NULL,
  `resource_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `keyword_id` (`keyword_id`),
  KEY `resource_id` (`resource_id`),
  CONSTRAINT `keywords_stats_ibfk_1` FOREIGN KEY (`keyword_id`) REFERENCES `keywords` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `keywords_stats_ibfk_2` FOREIGN KEY (`resource_id`) REFERENCES `resources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keywords_stats`
--

LOCK TABLES `keywords_stats` WRITE;
/*!40000 ALTER TABLE `keywords_stats` DISABLE KEYS */;
/*!40000 ALTER TABLE `keywords_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publications`
--

DROP TABLE IF EXISTS `publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `publications` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `article_id` int(11) unsigned NOT NULL,
  `posted_at` datetime DEFAULT NULL,
  `title` varchar(1024) CHARACTER SET utf8mb4 DEFAULT NULL,
  `lead` varchar(4096) CHARACTER SET utf8mb4 DEFAULT NULL,
  `authors_text` varchar(1024) CHARACTER SET utf8mb4 DEFAULT NULL,
  `category_text` varchar(1024) CHARACTER SET utf8mb4 DEFAULT NULL,
  `meta_tags` varchar(4096) CHARACTER SET utf8mb4 DEFAULT NULL,
  `keywords_text` varchar(4096) CHARACTER SET utf8mb4 DEFAULT NULL,
  `image_count` int(11) DEFAULT NULL,
  `video_count` int(11) DEFAULT NULL,
  `link_count` int(11) DEFAULT NULL,
  `content` mediumtext CHARACTER SET utf8mb4,
  `top_post` tinyint(1) DEFAULT NULL,
  `is_text` tinyint(1) DEFAULT NULL,
  `is_weekend` tinyint(1) DEFAULT '0',
  `timedelta` int(11) DEFAULT NULL,
  `weekday` tinyint(6) DEFAULT '0',
  `category_id` int(11) unsigned DEFAULT NULL,
  `url` varchar(512) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `article_id` (`article_id`),
  KEY `publications_ibfk_2` (`category_id`),
  CONSTRAINT `publications_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `publications_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=399 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publications`
--

LOCK TABLES `publications` WRITE;
/*!40000 ALTER TABLE `publications` DISABLE KEYS */;
/*!40000 ALTER TABLE `publications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resources`
--

DROP TABLE IF EXISTS `resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resources` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `domain` varchar(1024) NOT NULL,
  `url` varchar(1024) NOT NULL,
  `module` varchar(1024) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resources`
--

LOCK TABLES `resources` WRITE;
/*!40000 ALTER TABLE `resources` DISABLE KEYS */;
/*!40000 ALTER TABLE `resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `revisions`
--

DROP TABLE IF EXISTS `revisions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `revisions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `article_id` int(11) unsigned NOT NULL,
  `loaded_at` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  `dynamic_processed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `article_id` (`article_id`),
  CONSTRAINT `revisions_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=371 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `revisions`
--

LOCK TABLES `revisions` WRITE;
/*!40000 ALTER TABLE `revisions` DISABLE KEYS */;
/*!40000 ALTER TABLE `revisions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_migrations`
--

DROP TABLE IF EXISTS `schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schema_migrations` (
  `version` varchar(255) NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20161121125109'),('20161121125224'),('20161121125424'),('20161121125615'),('20161121125724'),('20161121125758'),('20161121125911'),('20161121151712'),('20161121151714'),('20161216054119'),('20161219111741'),('20161220161400'),('20161220163411'),('20161226145639'),('20161226161110'),('20161226161321'),('20161226162001'),('20161227144258');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_networks`
--

DROP TABLE IF EXISTS `social_networks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `social_networks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(1024) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_networks`
--

LOCK TABLES `social_networks` WRITE;
/*!40000 ALTER TABLE `social_networks` DISABLE KEYS */;
/*!40000 ALTER TABLE `social_networks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `top_keywords`
--

DROP TABLE IF EXISTS `top_keywords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `top_keywords` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `resource_id` int(11) unsigned NOT NULL,
  `keywords` varchar(1024) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`),
  KEY `resource_id` (`resource_id`),
  CONSTRAINT `top_keywords_ibfk_1` FOREIGN KEY (`resource_id`) REFERENCES `resources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `top_keywords`
--

LOCK TABLES `top_keywords` WRITE;
/*!40000 ALTER TABLE `top_keywords` DISABLE KEYS */;
/*!40000 ALTER TABLE `top_keywords` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-03 17:23:03
