-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2024 at 10:27 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rcoffee`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `address_id` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `email_user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`address_id`, `location`, `email_user`) VALUES
(1, '123 Main St', 'john.doe@example.com'),
(2, '456 Elm St', 'jane.smith@example.com'),
(3, '789 Oak St', 'michael.brown@example.com'),
(4, '101 Pine St', 'emily.davis@example.com'),
(5, '202 Birch St', 'david.wilson@example.com');

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`banner_id`, `img`) VALUES
(1, 'https://as1.ftcdn.net/v2/jpg/01/94/82/86/1000_F_194828624_llDpKzFNYmi6cfHVF8GOOoAe5KTJlc9N.jpg'),
(2, 'https://as2.ftcdn.net/v2/jpg/06/87/44/35/1000_F_687443550_nIzaXFspeLHhrZkAkdydKtPDbxYvetFE.jpg'),
(3, 'https://as2.ftcdn.net/v2/jpg/02/28/47/67/1000_F_228476716_6XIKhvoH9jSfzsgbAvhsQLTBIkZxXmMU.jpg'),
(4, 'https://as1.ftcdn.net/v2/jpg/03/26/12/24/1000_F_326122449_ZumP6HwKLhha5mV4stcVDrXMHwlVCEzc.jpg'),
(5, 'https://as1.ftcdn.net/v2/jpg/03/02/51/36/1000_F_302513691_zrN6dkSX9cptX3XHzjAzauyLxAzKWI7L.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `basket`
--

CREATE TABLE `basket` (
  `basket_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `email_user` varchar(255) DEFAULT NULL,
  `order_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `basket`
--

INSERT INTO `basket` (`basket_id`, `quantity`, `product_id`, `email_user`, `order_id`) VALUES
(1, 5, 1, 'john.doe@example.com', 'ORD001'),
(2, 1, 2, 'jane.smith@example.com', 'ORD002'),
(3, 3, 3, 'michael.brown@example.com', 'ORD003'),
(4, 1, 4, 'emily.davis@example.com', 'ORD004'),
(5, 2, 5, 'david.wilson@example.com', 'ORD005'),
(6, 2, 2, 'john.doe@example.com', 'ORD001');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `name`) VALUES
(1, 'Espresso'),
(2, 'Latte'),
(3, 'Cappuccino'),
(4, 'Americano'),
(5, 'Mocha');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` varchar(255) NOT NULL,
  `emp_password` varchar(255) NOT NULL,
  `emp_name` varchar(255) NOT NULL,
  `emp_gender` varchar(10) DEFAULT NULL,
  `emp_img` varchar(255) DEFAULT NULL,
  `emp_role` enum('manager','employee') NOT NULL DEFAULT 'employee',
  `emp_phone` varchar(15) DEFAULT NULL,
  `is_working` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`emp_id`, `emp_password`, `emp_name`, `emp_gender`, `emp_img`, `emp_role`, `emp_phone`, `is_working`) VALUES
('E001', '12345678', 'Tuấn Đoàn', 'male', 'https://res.cloudinary.com/datlowashere/image/upload/v1716614542/rcoffee/employee/jsmoggcpoqbryoy1n3ii.png', 'manager', '1234567890', 1),
('E0014', '123', 'Tuấn Đoàn', 'male', 'https://res.cloudinary.com/datlowashere/image/upload/v1717054314/rcoffee/employee/ucrbvkvnlav09sboncdm.png', 'manager', '0879563470', 1),
('E002', 'password123', 'Bob Miller', 'male', 'https://res.cloudinary.com/datlowashere/image/upload/v1716614542/rcoffee/employee/jsmoggcpoqbryoy1n3ii.png', 'employee', '0987654321', 1),
('E003', 'abc123456', 'Nguyễn Văn Nhật', 'female', 'https://res.cloudinary.com/datlowashere/image/upload/v1717159799/rcoffee/employee/xizbh8jjoefl5adxmpmp.png', 'employee', '0368572822', 1),
('E0035', '12345678', 'Thất Nguyệt Lưu Hoả', 'male', 'https://res.cloudinary.com/datlowashere/image/upload/v1717169958/rcoffee/employee/ieiblyu3m1qmgmjgewzy.jpg', 'employee', '0368572829', 1),
('E004', 'password123', 'David Taylor', 'male', 'https://example.com/images/david_taylor.jpg', 'employee', '6677889900', 0),
('E005', 'password123', 'Eve Anderson', 'female', 'https://example.com/images/eve_anderson.jpg', 'employee', '9988776655', 0),
('ED095', 'abcxyz123', 'Công Đức Vô Lượng', 'female', 'https://res.cloudinary.com/datlowashere/image/upload/v1717170445/rcoffee/employee/l1p1wkoxmcu8qtute9mq.jpg', 'employee', '0945152601', 1),
('ERD01', '123', 'Emma Naht', 'male', 'https://res.cloudinary.com/datlowashere/image/upload/v1717144286/rcoffee/employee/oskzvd8sgutucafbvsmk.png', 'employee', '0945152601', 1);

-- --------------------------------------------------------

--
-- Table structure for table `favorite`
--

CREATE TABLE `favorite` (
  `favorite_id` int(11) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` varchar(255) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorite`
--

INSERT INTO `favorite` (`favorite_id`, `create_at`, `user_id`, `product_id`) VALUES
(1, '2024-05-25 11:44:54', 'john.doe@example.com', 1),
(2, '2024-05-25 11:44:54', 'jane.smith@example.com', 2),
(3, '2024-05-25 11:44:54', 'michael.brown@example.com', 3),
(4, '2024-05-25 11:44:54', 'emily.davis@example.com', 4),
(5, '2024-05-25 11:44:54', 'david.wilson@example.com', 5);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `notification_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `message` text DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `is_read` tinyint(1) DEFAULT 0,
  `email_user` varchar(255) DEFAULT NULL,
  `order_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `order_id` varchar(255) NOT NULL,
  `order_date` datetime NOT NULL DEFAULT current_timestamp(),
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `total_amount` double NOT NULL,
  `discount_amount` double DEFAULT NULL,
  `status_order` enum('pending','preparing','pick up','delivering','cancelled','delivered') NOT NULL DEFAULT 'pending',
  `address_id` int(11) DEFAULT NULL,
  `voucher_id` int(11) DEFAULT NULL,
  `order_message` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`order_id`, `order_date`, `create_at`, `update_at`, `payment_method`, `total_amount`, `discount_amount`, `status_order`, `address_id`, `voucher_id`, `order_message`) VALUES
('ORD001', '2024-05-28 14:30:00', '2024-05-28 14:30:00', NULL, 'Zalo Pay', 100000, 10, 'delivered', 1, 2, 'Less sugar please'),
('ORD002', '2024-05-30 14:30:00', '2024-05-28 14:30:00', NULL, 'Zalo Pay', 257000, 10, 'delivered', 2, 2, 'Call me when u arrived'),
('ORD003', '2024-05-31 14:30:00', '2024-05-28 14:30:00', NULL, 'Zalo Pay', 220000, 10, 'delivered', 3, 2, 'Please deliver between 2-4 PM.'),
('ORD004', '2024-03-06 15:00:00', '2024-05-28 15:00:00', NULL, 'Zalo Pay', 400000, 20, 'delivered', 4, 3, 'Leave package at the front door.'),
('ORD005', '2024-05-28 15:30:00', '2024-05-28 15:30:00', NULL, 'Zalo Pay', 75000, 5, 'delivering', 5, 3, 'Ring the bell once you arrive.');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` double NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `is_available` enum('available','is available') DEFAULT 'available'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `name`, `img`, `description`, `price`, `category_id`, `is_available`) VALUES
(1, 'Espresso', 'https://as2.ftcdn.net/v2/jpg/02/08/04/75/1000_F_208047557_0ZTJD5PBMhVvBvftmBhVfawydSLz8mbz.jpg', 'Strong and bold coffee.', 25000, 1, 'available'),
(2, 'Double Espresso', 'https://as2.ftcdn.net/v2/jpg/00/01/59/43/1000_F_1594358_YnzaXmFzwa2VbCouMbZJYIO0ousyR2.jpg', 'Twice the strength of a regular espresso.', 25000, 1, 'available'),
(3, 'Latte', 'https://as1.ftcdn.net/v2/jpg/00/94/14/38/1000_F_94143804_QFuKnDxb29Crj61iuBClT9wQPErPfGsw.jpg', 'Smooth and creamy coffee with milk.', 4, 2, 'is available'),
(4, 'Vanilla Latte', 'https://as2.ftcdn.net/v2/jpg/05/95/09/07/1000_F_595090766_1wz5nknXYjZIiHHN2AkbNKCP5C0gzl7r.webp', 'Latte with a hint of vanilla.', 4.5, 2, 'is available'),
(5, 'Cappuccino', 'https://as2.ftcdn.net/v2/jpg/01/16/61/93/1000_F_116619399_YA611bKNOW35ffK0OiyuaOcjAgXgKBui.jpg', 'Rich and foamy coffee.', 25000, 3, 'available'),
(6, 'Flat White', 'https://as2.ftcdn.net/v2/jpg/03/06/52/85/1000_F_306528536_pxTXKrCkOkG4Kr00nviReOnLkWGXCbTs.jpg', 'Smooth and velvety coffee.', 25000, 2, 'available'),
(7, 'Americano', 'https://as1.ftcdn.net/v2/jpg/06/27/72/08/1000_F_627720871_kZ9KfTT179IjjT7FNqBC9vaLS2n5tLAw.jpg', 'Simple and classic black coffee.', 30000, 4, 'available'),
(8, 'Cá ra mén5', 'https://res.cloudinary.com/datlowashere/image/upload/v1716906563/rcoffee/product/vudny3kasevmneagnhei.jpg', 'Chocolate-flavored coffee and rich cheese with little sugar', 24000, 1, 'available'),
(9, 'Caramel Mocha', 'https://as1.ftcdn.net/v2/jpg/02/42/01/52/1000_F_242015219_c71jJi6lYTkQrXIADrZkEnpTnQlLEZZg.jpg', 'Mocha with caramel.', 35000, 5, 'available'),
(10, 'Cold Brew', 'https://as1.ftcdn.net/v2/jpg/06/23/15/88/1000_F_623158888_izkWSiIzHQ4jeeWyTUSMKuc5QMNJwwmX.jpg', 'Smooth cold coffee.', 25000, 4, 'available'),
(11, 'BeeCapuchio', 'https://res.cloudinary.com/datlowashere/image/upload/v1716885405/rcoffee/product/sitaxxi9xhruencotwxn.jpg', 'Hot and cold', 25000, 4, 'available'),
(12, 'EmmaAmericano', 'https://res.cloudinary.com/datlowashere/image/upload/v1716887291/rcoffee/product/paed6ooqx4bsc07nwe6u.jpg', 'Hot and reach', 26000, 4, 'available'),
(13, 'Mochiano', 'https://res.cloudinary.com/datlowashere/image/upload/v1716900872/rcoffee/product/hzbsfwnx4ihr2dbljcvq.jpg', 'Highly and hot', 35000, 5, 'available'),
(14, 'Americano Original', 'https://res.cloudinary.com/datlowashere/image/upload/v1716905044/rcoffee/product/uiinwvv846ww8hwd8njd.jpg', 'Hot coffee, and extremely bitter with little sugar', 2600, 4, 'available'),
(15, 'XunaX', 'https://res.cloudinary.com/datlowashere/image/upload/v1717612610/rcoffee/product/igzldolcu8jfgxd2o68q.jpg', 'Special edition of americano', 35000, 3, 'available'),
(16, 'Americano Blackx5', 'https://res.cloudinary.com/datlowashere/image/upload/v1717168532/rcoffee/product/fxcxwsiofpgu6okcoeqs.jpg', 'Hot and extremely bitter', 45000, 4, 'available');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `rating_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `review` text DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `email_user` varchar(255) DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`rating_id`, `rating`, `review`, `product_id`, `email_user`, `create_at`) VALUES
(1, 5, 'Excellent coffee!', 1, 'john.doe@example.com', '2024-05-25 11:44:54'),
(2, 4, 'Really good.', 2, 'jane.smith@example.com', '2024-05-25 11:44:54'),
(3, 5, 'My favorite!', 3, 'michael.brown@example.com', '2024-05-25 11:44:54'),
(4, 3, 'It was okay.', 4, 'emily.davis@example.com', '2024-05-25 11:44:54'),
(5, 4, 'Pretty good.', 5, 'david.wilson@example.com', '2024-05-25 11:44:54');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email_user` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `user_img` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email_user`, `password`, `gender`, `phone`, `user_img`, `name`) VALUES
('david.wilson@example.com', 'password123', 'male', '9988776655', 'https://example.com/images/david_wilson.jpg', 'David Wilson'),
('emily.davis@example.com', 'password123', 'female', '6677889900', 'https://example.com/images/emily_davis.jpg', 'Emily Davis'),
('jane.smith@example.com', 'password123', 'female', '0987654321', 'https://example.com/images/jane_smith.jpg', 'Jane Smith'),
('john.doe@example.com', 'password123', 'male', '1234567890', 'https://example.com/images/john_doe.jpg', 'Jonh Doe'),
('michael.brown@example.com', 'password123', 'male', '1122334455', 'https://example.com/images/michael_brown.jpg', 'Michael Brown');

-- --------------------------------------------------------

--
-- Table structure for table `voucher`
--

CREATE TABLE `voucher` (
  `voucher_id` int(11) NOT NULL,
  `voucher_code` varchar(255) NOT NULL,
  `percent` double NOT NULL,
  `valid_date` datetime NOT NULL DEFAULT current_timestamp(),
  `exp_date` datetime NOT NULL DEFAULT current_timestamp(),
  `is_visible` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `voucher`
--

INSERT INTO `voucher` (`voucher_id`, `voucher_code`, `percent`, `valid_date`, `exp_date`, `is_visible`) VALUES
(1, 'WELCOME10', 10, '2024-01-01 14:00:00', '2024-05-08 00:00:00', 0),
(2, 'SUMMER15', 15, '2024-06-01 10:00:00', '2024-08-31 02:00:00', 1),
(3, 'FALL20', 20, '2024-09-01 00:00:00', '2024-11-30 00:00:00', 1),
(4, 'WINTER25', 25, '2024-12-01 00:00:00', '2025-02-28 00:00:00', 1),
(5, 'SPRING30', 30, '2024-03-01 00:00:00', '2024-05-31 00:00:00', 1),
(6, 'TCT3', 65, '2024-05-29 10:47:00', '2024-06-01 00:47:00', 1),
(7, 'RX004', 15, '2024-05-30 10:48:00', '2024-06-15 12:50:00', 1),
(8, 'PXL4', 22, '2024-05-30 06:21:00', '2024-06-08 05:17:00', 1),
(9, 'NTN34', 12, '2024-05-29 13:42:00', '2024-05-31 01:42:00', 0),
(10, 'NT732434', 23, '2024-06-08 13:39:00', '2024-06-08 13:45:00', 0),
(11, 'AFTERNOON12', 50, '2024-06-02 06:06:00', '2024-06-09 02:03:00', 1),
(12, 'MORNIGN12', 25, '2024-05-29 02:09:00', '2024-05-29 18:00:00', 0),
(29, 'TCL357', 50, '2024-06-08 20:58:00', '2024-06-13 10:58:00', 1),
(30, 'TCL355', 15, '2024-06-03 21:02:00', '2024-06-08 21:02:00', 1),
(31, 'TCT3', 35, '2024-06-02 21:47:00', '2024-06-18 21:48:00', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `email_user` (`email_user`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`banner_id`);

--
-- Indexes for table `basket`
--
ALTER TABLE `basket`
  ADD PRIMARY KEY (`basket_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `email_user` (`email_user`),
  ADD KEY `fk_order_id` (`order_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`favorite_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `email_user` (`email_user`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `address_id` (`address_id`),
  ADD KEY `voucher_id` (`voucher_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`rating_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `email_user` (`email_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email_user`);

--
-- Indexes for table `voucher`
--
ALTER TABLE `voucher`
  ADD PRIMARY KEY (`voucher_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `basket`
--
ALTER TABLE `basket`
  MODIFY `basket_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `favorite`
--
ALTER TABLE `favorite`
  MODIFY `favorite_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `rating_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `voucher`
--
ALTER TABLE `voucher`
  MODIFY `voucher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`email_user`) REFERENCES `users` (`email_user`);

--
-- Constraints for table `basket`
--
ALTER TABLE `basket`
  ADD CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `basket_ibfk_2` FOREIGN KEY (`email_user`) REFERENCES `users` (`email_user`),
  ADD CONSTRAINT `fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`);

--
-- Constraints for table `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`email_user`),
  ADD CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`email_user`) REFERENCES `users` (`email_user`),
  ADD CONSTRAINT `notification_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`),
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`voucher_id`) REFERENCES `voucher` (`voucher_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`email_user`) REFERENCES `users` (`email_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
