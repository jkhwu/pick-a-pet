DROP DATABASE IF EXISTS pick_a_pet;
CREATE DATABASE pick_a_pet;

USE pick_a_pet;

DROP TABLE IF EXISTS `dogs_table`;
CREATE TABLE `dogs_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `breed` varchar(100) DEFAULT NULL,
  `height` int(10) DEFAULT NULL,
  `weight` int(10) DEFAULT NULL,
  `size` varchar(30) DEFAULT NULL,
  `child_friendly` varchar(30) DEFAULT NULL,
  `energy_level` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=256 DEFAULT CHARSET=latin1;
    