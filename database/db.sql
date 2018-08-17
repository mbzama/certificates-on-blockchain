-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 52.172.13.43    Database: certificates
-- ------------------------------------------------------
-- Server version	5.7.23

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
-- Table structure for table `Docs`
--

USE `certificates`;

DROP TABLE IF EXISTS `Docs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Docs` (
  `ID` varchar(45) NOT NULL,
  `Email` varchar(65) DEFAULT NULL,
  `sname` varchar(45) DEFAULT NULL,
  `Sbranch` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  `Degree` varchar(45) DEFAULT NULL,
  `CollegeID` varchar(45) DEFAULT NULL,
  `Txid` varchar(95) DEFAULT NULL,
  `PDFpath` varchar(95) DEFAULT NULL,
  `UF` varchar(45) DEFAULT NULL,
  `CF` varchar(45) DEFAULT NULL,
  `SF` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Docs`
--

LOCK TABLES `Docs` WRITE;
/*!40000 ALTER TABLE `Docs` DISABLE KEYS */;
INSERT INTO `Docs` VALUES ('VSVTbmohammad@evoketechnologies.com','bmohammad@evoketechnologies.com','Zama','CSE','2007','BTECH','VSVT','0zd322ff','../certificateddocs/bmohammad@evoketechnologies.comdocument.pdf','0','',''),('VSVThgiduturi@evoketechnologies.com','hgiduturi@evoketechnologies.com','Hari','CSE','2016','BTECH','VSVT','0zd322ff','../certificateddocs/hgiduturi@evoketechnologies.comdocument.pdf','0','',''),('VSVTrrajput@evoketechnologies.com','rrajput@evoketechnologies.com','Rahul','CSE','2014','BTECH','VSVT','0zd322ff','../certificateddocs/rrajput@evoketechnologies.comdocument.pdf','0','',''),('VSVTsnagulapalli@evoketechnologies.com','snagulapalli@evoketechnologies.com','Vamsi','CSE','2017','BTECH','VSVT','0zd322ff','../certificateddocs/snagulapalli@evoketechnologies.comdocument.pdf','0','','');
/*!40000 ALTER TABLE `Docs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-17 13:30:05
