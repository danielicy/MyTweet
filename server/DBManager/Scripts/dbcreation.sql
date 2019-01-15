﻿
--
-- Current Database: `c4pssdb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `a2bdb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `a2bdb`;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` longtext,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


-- users Table
CREATE TABLE `users` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` longtext,
  `first_name` longtext,
  `last_name` longtext,
  `email` longtext,
  `hashed_password` longblob,
  `created_date` datetime NOT NULL,
  `modified_date` datetime DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `UserStatus` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `information` varchar(1000) DEFAULT NULL,
  `user_picture` blob,
  PRIMARY KEY (`UserId`),
  KEY `IX_role_id` (`role_id`) USING HASH ,
  CONSTRAINT `FK_user_app_Roles_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;


