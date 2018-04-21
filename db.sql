create database comp5322;

use comp5322;

CREATE TABLE IF NOT EXISTS `users` (
  `UID` varchar(41) NOT NULL,
  `username` varchar(41) NOT NULL,
  `password` varchar(41) NOT NULL,
  `role` varchar(41),
  `email` varchar(41),
  `contactno` int(11),
  PRIMARY KEY (`UID`)
);

INSERT INTO `users` (`UID`, `username`, `password`, `role`, `email`, `contactno`) VALUES
('admin', 'Administrator', 'demo', 'Administrator', 'admin@yahoo.com.hk', 96443377),
('customer', 'Liu Chun Hei', 'demo', 'Customer', 'customer@yahoo.com.hk', 60803967),
('cook', 'YUEN Ka Ho', 'demo', 'Cook', 'cook@yahoo.com.hk', 64482338),
('manager', 'WONG Wai Sum', 'demo', 'Manager', 'manager@yahoo.com.hk', 66958794);

CREATE TABLE IF NOT EXISTS `booking` (
  `bookingID` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `UID` varchar(41) NOT NULL,
  `bookingdate` date NOT NULL,
  `bookingstarttime` varchar(41) NOT NULL,
  `bookingfinishtime` varchar(41) NOT NULL,
  `bookingattendance` int(11) NOT NULL,
  `bookingstatus` varchar(41) DEFAULT 'Pending',
  PRIMARY KEY (`bookingID`)
);

INSERT INTO `booking` (`UID`, `bookingdate`, `bookingstarttime`, `bookingfinishtime`, `bookingattendance`) VALUES
('customer','2018-04-02','19:30','21:30',2),
('customer','2018-04-03','19:30','21:30',2),
('customer','2018-04-04','19:30','21:30',2),
('customer','2018-04-05','19:30','21:30',2),
('customer','2018-04-06','19:30','21:30',2),
('customer','2018-04-07','18:30','20:30',10),
('customer','2018-04-08','20:00','22:00',8);

CREATE TABLE IF NOT EXISTS `menu` (
  `menuID` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `menuname` varchar(41) NOT NULL,
  `menutype` varchar(41) NOT NULL,
  `menudesc` varchar(401) NOT NULL,
  `menuinventory` int(11) NOT NULL,
  `menuprice` float NOT NULL,
  `menuimageurl` varchar(401),
  PRIMARY KEY (`menuID`)
);

INSERT INTO `menu` (`menuname`, `menutype`, `menudesc`, `menuinventory`, `menuprice`, `menuimageurl`) VALUES
('Iced Fresh Lemon Tea','Beverages','Iced tea with slices of real fresh lemons, for the taste of true freshness! ',1000,10.9,'http://www.mcdonalds.com.hk/content/dam/hongkong/en/food/menu/217/McDonalds-Iced-Fresh-Lemon-Tea-217-list.png'),
('Hot Fresh Lemon Tea','Beverages','Hot tea with real fresh lemon slices, to keep you warm and refreshed throughout the day! ',1000,8.9,'http://www.mcdonalds.com.hk/content/dam/hongkong/en/food/menu/538/McDonalds-Hot-Fresh-Lemon-Tea-538-list.png');

INSERT INTO `menu` (`menuname`, `menutype`, `menudesc`, `menuinventory`, `menuprice`, `menuimageurl`) VALUES
('Scrambled Egg','Breakfast','Scrambled Egg with Milk and Minute Steak',1000,28,'http://www.cafedecoralfastfood.com/files/image/hk/2011/Fish_Filet_%20(low%20res)web.jpg'),
('Roasted Chicken Fillet','Breakfast','Roasted Chicken Fillet with Honey and Jumbo Sunny Eggs',1000,26,'http://www.cafedecoralfastfood.com/files/image/hk/2012/Honey%20Chicken%20Fillet(HR)_WEB.jpg'),
('Daily Value Set','Breakfast','Oatmeal with Milk, Ham, Hard Boiled Egg and Toast',1000,24,'http://www.cafedecoralfastfood.com/files/image/hk/breakfast_boiled%20egg%20set.jpg'),
('Spicy Pork Cubes Noodles','Breakfast','Spicy Pork Cubes Noodles and French Toast',1000,25,'http://www.cafedecoralfastfood.com/files/image/hk/Spicy%20Pork%20Noodles-01.jpg'),
('Crispy Roasted Danish Pork Belly','Main','Crispy Roasted Pork Belly Combo with Rice',1000,38,'http://www.cafedecoralfastfood.com/files/image/hk/Siu%20Mei-33.jpg'),
('Sour Pork','Main','Sweet and Sour Pork with Pineapple and Rice',1000,56,'http://www.cafedecoralfastfood.com/files/image/hk/sweet%20&%20sour%20pork.jpg'),
('Sizzling Plate Fever','Main','New Zealand Sirloin Steak and Sausage',1000,70,'http://www.cafedecoralfastfood.com/files/image/hk/%E9%90%B5%E6%9D%BF%E7%8B%82%E7%86%B1.jpg'),
('Light Meal','Main','BBQ Pork with Rice',1000,32,'http://www.cafedecoralfastfood.com/files/image/hk/2011/BBQ%20pork%20Rice2011_ATM.jpg'),
('Fresh Lemon Coke','Beverages','Slices of fresh lemon added to ice cold Coca-Cola, it makes an exceptional thirst quencher.',1000,10.9,'http://www.mcdonalds.com.hk/content/dam/hongkong/en/food/menu/560/McDonalds-Fresh-Lemon-Coke-560-hero.png'),
('Soy Milk','Beverages','It’s smooth, tasty, warm enough to keep the cold out.',1000,7,'http://www.mcdonalds.com.hk/content/dam/hongkong/en/food/menu/220/McDonalds-Soy-Milk-220-hero.png'),
('Hot Tea','Beverages','What would life be without a break now and then for a hot cup of tea and a chat with friends. ',1000,7,'http://www.mcdonalds.com.hk/content/dam/hongkong/en/food/menu/105/McDonalds-Hot-Tea-105-hero.png'),
('Hot Chocolate','Beverages','Wrap your hands round a cup of rich, smooth creamy hot chocolate for the most satisfying comfort moment of all.',1000,7,'http://www.mcdonalds.com.hk/content/dam/hongkong/en/food/menu/106/McDonalds-Hot-Chocolate-106-hero.png'),
('Orange Juice','Beverages','100% concentrated orange juice for a healthy boost each day.',1000,10,'http://www.mcdonalds.com.hk/content/dam/hongkong/en/food/menu/103/McDonalds-Minute-Maid-Orange-Juice-103-hero.png'),
('Sundae','Snack','Scoop up these classics of dairy vanilla sundae topped with chocolate or strawberry flavor - you know you succumb.',1000,10,'http://www.mcdonalds.com.hk/content/dam/hongkong/en/food/menu/027/McDonalds-Sundae-027-hero.png'),
('Apple Pie','Snack','Take a bite of chunky hot apple from a crispy pie. It is as sweet as…can be!',1000,15,'http://www.mcdonalds.com.hk/content/dam/hongkong/en/food/menu/026/McDonalds-Apple-Pie-026-hero.png'),
('Hash Browns','Snack','Who can resist our hearty hash browns with their crispy golden brown outers protecting such soft, moist centres?',1000,12,'http://www.mcdonalds.com.hk/content/dam/hongkong/en/food/menu/170/McDonalds-Hash-Browns-170-hero.png'),
('Caesar Salad','Snack','Flavor with your own choice of either Caesar Salad dressing or Deep-Roasted Sesame dressing to take the delicious authentic taste to another level.',1000,17,'http://www.mcdonalds.com.hk/content/dam/hongkong/en/food/menu/514/McDonalds-Caesar-Salad-514-hero.png')
;

CREATE TABLE IF NOT EXISTS `orders` (
  `orderid` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `orderdate` date NOT NULL,
  `orderstatus` varchar(41) NOT NULL DEFAULT 'Pending',
  `orderingcost` float(7,1) NOT NULL,
  `discountrate` float NOT NULL DEFAULT 0,
  `paymentmethod` varchar(41),
  `paymentstatus` varchar(41) DEFAULT 'Pending',
  `UID` varchar(41) NOT NULL,
  PRIMARY KEY (`orderid`)
);

CREATE TABLE IF NOT EXISTS `orderdetail` (
  `orderdetailid` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `orderid` MEDIUMINT NOT NULL,
  `menuID` MEDIUMINT NOT NULL,
  `menuprice` float NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`orderdetailid`)
);

CREATE TABLE IF NOT EXISTS `cart` (
  `menuID` MEDIUMINT NOT NULL,
  `UID` varchar(41) NOT NULL
);
