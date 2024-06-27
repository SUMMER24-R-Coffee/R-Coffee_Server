-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2024 at 10:25 AM
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
(5, '202 Birch St', 'david.wilson@example.com'),
(6, '1367, Nguyễn Thị Thập, Hoà Minh, Liên Chiểu, Đà Nẵng', 'david.wilson@example.com'),
(7, '116, Nguyễn Huy Tưởng, Hoà Minh, Liên Chiểu, Đà Nẵng ', 'david.wilson@example.com'),
(8, '237 Dũng Sĩ Thanh Khê, Hoà Minh', 'david.wilson@example.com'),
(9, '146 Trưng Vương, Đà Nẵng ', 'jane.smith@example.com'),
(10, '456 Sơn Trang Vương Quyền', 'jane.smith@example.com'),
(11, '234 Ngũ Hành Sơn, Đà Nẵng', 'jane.smith@example.com'),
(12, '76 Hải Châu 1, Đà Nẵng', 'jane.smith@example.com'),
(13, '116 Sơn Trà, Đà Nẵng', 'jane.smith@example.com'),
(14, '452 Tần Lan, Đồ Sơn', 'david.wilson@example.com');

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
(14, 'https://res.cloudinary.com/datlowashere/image/upload/v1717690050/rcoffee/banner/usdjwmac8chwaoio1atd.jpg'),
(15, 'https://res.cloudinary.com/datlowashere/image/upload/v1717690061/rcoffee/banner/e2p6jk1qfav4ykydn8rp.jpg'),
(17, 'https://res.cloudinary.com/datlowashere/image/upload/v1717693976/rcoffee/banner/t3pjth2iobuefylf3v08.jpg');

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
(6, 2, 2, 'john.doe@example.com', 'ORD001'),
(7, 4, 6, 'john.doe@example.com', NULL),
(8, 5, 8, 'john.doe@example.com', NULL),
(13, 4, 10, 'john.doe@example.com', NULL),
(19, 1, 2, 'john.doe@example.com', NULL),
(20, 2, 1, 'john.doe@example.com', NULL),
(21, 10, 1, 'jane.smith@example.com', 'ORD240619231433'),
(22, 3, 6, 'jane.smith@example.com', 'ORD240619231225'),
(23, 2, 8, 'jane.smith@example.com', 'ORD240619231321'),
(27, 6, 1, 'michael.brown@example.com', NULL),
(28, 6, 11, 'michael.brown@example.com', NULL),
(29, 8, 13, 'michael.brown@example.com', NULL),
(30, 2, 14, 'michael.brown@example.com', NULL),
(33, 2, 4, 'michael.brown@example.com', NULL),
(52, 4, 2, 'david.wilson@example.com', 'ORD240619223141'),
(61, 1, 10, 'jane.smith@example.com', 'ORD240619231225'),
(62, 2, 11, 'david.wilson@example.com', 'ORD240619223141'),
(63, 2, 13, 'david.wilson@example.com', 'ORD240619231013'),
(65, 5, 1, 'david.wilson@example.com', 'ORD240619224119'),
(66, 2, 10, 'david.wilson@example.com', 'ORD240619224119'),
(67, 2, 5, 'jane.smith@example.com', 'ORD240619231433'),
(68, 1, 4, 'jane.smith@example.com', 'ORD240619231433'),
(69, 2, 6, 'jane.smith@example.com', 'ORD240619231433'),
(70, 3, 1, 'jane.smith@example.com', 'ORD240620143811'),
(72, 2, 5, 'jane.smith@example.com', 'ORD240619232234'),
(73, 1, 9, 'jane.smith@example.com', 'ORD240619232234'),
(76, 1, 4, 'jane.smith@example.com', 'ORD240620143811'),
(77, 1, 5, 'jane.smith@example.com', 'ORD240620143811'),
(78, 1, 6, 'jane.smith@example.com', 'ORD240620144154'),
(79, 1, 9, 'jane.smith@example.com', 'ORD240620144154'),
(80, 1, 10, 'jane.smith@example.com', 'ORD240620144154'),
(81, 2, 1, 'jane.smith@example.com', 'ORD240620145723'),
(82, 1, 2, 'jane.smith@example.com', 'ORD240620145406'),
(83, 1, 5, 'jane.smith@example.com', 'ORD240620145406'),
(84, 2, 5, 'jane.smith@example.com', 'ORD240620145902'),
(85, 1, 2, 'jane.smith@example.com', 'ORD240620150635'),
(86, 2, 5, 'jane.smith@example.com', 'ORD240620150729'),
(87, 1, 2, 'jane.smith@example.com', 'ORD240620192542'),
(88, 1, 1, 'jane.smith@example.com', 'ORD240620192542'),
(89, 2, 1, 'jane.smith@example.com', 'ORD240620193630'),
(90, 3, 2, 'jane.smith@example.com', 'ORD240620201456'),
(91, 1, 4, 'jane.smith@example.com', 'ORD240620202119'),
(92, 1, 5, 'jane.smith@example.com', 'ORD240620202027'),
(94, 1, 4, 'jane.smith@example.com', 'ORD240620202407'),
(95, 1, 11, 'jane.smith@example.com', 'ORD240620202334'),
(96, 8, 14, 'jane.smith@example.com', 'ORD240621025319'),
(98, 1, 5, 'david.wilson@example.com', 'ORD240622041318'),
(100, 6, 2, 'jane.smith@example.com', 'ORD240622203255'),
(101, 3, 1, 'jane.smith@example.com', 'ORD240622022933'),
(102, 2, 4, 'jane.smith@example.com', 'ORD240622022933'),
(107, 2, 8, 'jane.smith@example.com', 'ORD240622032617'),
(109, 3, 14, 'jane.smith@example.com', 'ORD240622032617'),
(110, 3, 2, 'david.wilson@example.com', 'ORD240622041053'),
(112, 3, 5, 'david.wilson@example.com', 'ORD240622042410'),
(113, 2, 1, 'jane.smith@example.com', 'ORD240622143735'),
(115, 2, 1, 'jane.smith@example.com', 'ORD240622212905'),
(116, 1, 2, 'jane.smith@example.com', 'ORD240622205937'),
(117, 2, 4, 'jane.smith@example.com', 'ORD240622204012'),
(118, 2, 8, 'jane.smith@example.com', 'ORD240622205553'),
(119, 2, 9, 'jane.smith@example.com', 'ORD240622205553'),
(120, 2, 9, 'jane.smith@example.com', 'ORD240622231851'),
(121, 1, 13, 'jane.smith@example.com', 'ORD240622231851'),
(122, 3, 14, 'jane.smith@example.com', 'ORD240622221734'),
(123, 1, 1, 'jane.smith@example.com', 'ORD240622233010'),
(124, 2, 4, 'jane.smith@example.com', 'ORD240622231851'),
(125, 2, 2, 'jane.smith@example.com', 'ORD240622232932'),
(128, 1, 1, 'david.wilson@example.com', 'ORD240623160629'),
(129, 3, 2, 'david.wilson@example.com', 'ORD240623155913'),
(131, 2, 9, 'david.wilson@example.com', 'ORD240623160444'),
(132, 1, 1, 'david.wilson@example.com', 'ORD240623161423'),
(133, 1, 1, 'david.wilson@example.com', 'ORD240623220033'),
(134, 1, 1, 'david.wilson@example.com', 'ORD240623220755'),
(135, 1, 1, 'david.wilson@example.com', 'ORD240623225002'),
(136, 1, 2, 'david.wilson@example.com', 'ORD240623221251'),
(137, 1, 2, 'david.wilson@example.com', 'ORD240623224227'),
(138, 1, 1, 'david.wilson@example.com', 'ORD240623225556'),
(139, 2, 2, 'david.wilson@example.com', 'ORD240623232454'),
(140, 1, 1, 'david.wilson@example.com', 'ORD240623233237'),
(141, 2, 1, 'david.wilson@example.com', 'ORD240623233424'),
(142, 3, 1, 'david.wilson@example.com', 'ORD240624000950'),
(143, 3, 2, 'david.wilson@example.com', 'ORD240623235332'),
(144, 1, 1, 'david.wilson@example.com', 'ORD240624001524'),
(145, 6, 1, 'david.wilson@example.com', 'ORD240624001602'),
(146, 2, 2, 'david.wilson@example.com', 'ORD240624001758'),
(147, 2, 1, 'david.wilson@example.com', 'ORD240624002146'),
(148, 2, 1, 'david.wilson@example.com', 'ORD240624002455'),
(149, 1, 2, 'david.wilson@example.com', 'ORD240624002455'),
(150, 7, 2, 'david.wilson@example.com', 'ORD240624002555'),
(151, 1, 1, 'david.wilson@example.com', 'ORD240624002751'),
(152, 1, 5, 'david.wilson@example.com', 'ORD240624002823'),
(153, 2, 6, 'david.wilson@example.com', 'ORD240624010116'),
(154, 3, 8, 'david.wilson@example.com', 'ORD240624005114'),
(155, 1, 2, 'david.wilson@example.com', 'ORD240624010116'),
(156, 1, 1, 'david.wilson@example.com', 'ORD240624005345'),
(157, 3, 8, 'david.wilson@example.com', 'ORD240624005345'),
(158, 4, 10, 'david.wilson@example.com', 'ORD240624230859'),
(159, 4, 13, 'david.wilson@example.com', 'ORD240624193846'),
(160, 10, 14, 'david.wilson@example.com', 'ORD240624010116'),
(161, 2, 5, 'jane.smith@example.com', 'ORD240624040800'),
(162, 1, 6, 'jane.smith@example.com', 'ORD240624040800'),
(163, 3, 8, 'jane.smith@example.com', 'ORD240624203017'),
(164, 2, 1, 'jane.smith@example.com', 'ORD240624223355'),
(166, 1, 2, 'jane.smith@example.com', 'ORD240624203017'),
(167, 1, 2, 'jane.smith@example.com', 'ORD240626040444'),
(168, 3, 4, 'jane.smith@example.com', 'ORD240626040444'),
(169, 2, 1, 'david.wilson@example.com', NULL),
(171, 1, 8, 'david.wilson@example.com', 'ORD240626033200'),
(172, 2, 10, 'david.wilson@example.com', 'ORD240626033200'),
(173, 3, 11, 'david.wilson@example.com', 'ORD240626033200'),
(174, 1, 2, 'david.wilson@example.com', 'ORD240626034514'),
(175, 1, 10, 'david.wilson@example.com', 'ORD240626034514'),
(176, 1, 6, 'david.wilson@example.com', 'ORD240626034514'),
(177, 1, 2, 'david.wilson@example.com', 'ORD240626152307');

-- --------------------------------------------------------

--
-- Table structure for table `cancel`
--

CREATE TABLE `cancel` (
  `cancel_id` int(11) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `order_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cancel`
--

INSERT INTO `cancel` (`cancel_id`, `reason`, `create_at`, `order_id`) VALUES
(2, 'Wrong Order Details', '2024-06-22 19:48:23', 'ORD240620202334'),
(3, 'Allergy Concerns', '2024-06-22 19:51:33', 'ORD240619232234'),
(4, 'Ordered by Mistake', '2024-06-22 19:52:12', 'ORD240621025319'),
(5, 'Order Not Needed', '2024-06-22 19:58:03', 'ORD240622143735'),
(6, 'Ordered by Mistake', '2024-06-22 20:40:57', 'ORD240622204012'),
(7, 'Wrong Order Details', '2024-06-22 21:09:30', 'ORD240620145406'),
(8, 'Price Too High', '2024-06-22 21:09:47', 'ORD240620144154'),
(9, 'Change of Plans', '2024-06-22 21:10:02', 'ORD240619231321'),
(10, 'Order Not Needed', '2024-06-22 21:21:32', 'ORD240622205937'),
(11, 'No Longer Want It', '2024-06-22 23:07:57', 'ORD240620145902'),
(12, 'Price Too High', '2024-06-22 23:15:27', 'ORD240620202027'),
(13, 'Ordered by Mistake', '2024-06-22 23:31:21', 'ORD240622232932'),
(14, 'Delay in Delivery', '2024-06-22 23:33:52', 'ORD005'),
(15, 'Wrong Order Details', '2024-06-23 16:16:28', 'ORD240623155913'),
(16, 'No Longer Want It', '2024-06-23 23:34:01', 'ORD240619231225'),
(17, 'Wrong Order Details', '2024-06-24 00:29:11', 'ORD240624002455'),
(18, 'No Longer Want It', '2024-06-24 00:46:28', 'ORD240624001758'),
(19, 'Delay in Delivery', '2024-06-24 00:49:09', 'ORD240624002146'),
(20, 'Allergy Concerns', '2024-06-24 00:49:42', 'ORD240623161423'),
(21, 'Found a Better Option', '2024-06-24 00:50:27', 'ORD240623233237'),
(22, 'No Longer Want It', '2024-06-24 00:58:59', 'ORD240623160444'),
(23, 'Delay in Delivery', '2024-06-24 01:08:54', 'ORD240624005345'),
(24, 'No Longer Want It', '2024-06-24 01:09:11', 'ORD240622231851'),
(25, 'Price Too High', '2024-06-24 01:10:29', 'ORD240624001524'),
(26, 'Wrong Order Details', '2024-06-24 01:10:58', 'ORD240620143811'),
(27, 'Allergy Concerns', '2024-06-24 01:11:24', 'ORD240620145723'),
(28, 'No Longer Want It', '2024-06-24 02:15:28', 'ORD240623220033'),
(29, 'No Longer Want It', '2024-06-24 03:28:36', 'ORD240623225002'),
(30, 'Not having time to make your order', '2024-06-24 04:03:45', 'ORD240624005114'),
(31, 'Your request payment is too long. So we have to cancel your order, please re-order and we will preparing the soonest order to u. thank u', '2024-06-24 04:12:53', 'ORD240624040800'),
(32, 'Your request payment is too long, so we have to cancel your order. thank u', '2024-06-24 20:13:43', 'ORD240623235332'),
(33, 'Wrong Order Details', '2024-06-24 22:55:24', 'ORD240623232454'),
(34, 'Change of Plans', '2024-06-24 23:00:07', 'ORD240623155913'),
(35, 'Wrong Order Details', '2024-06-24 23:10:07', 'ORD240624230859'),
(36, 'Change of Plans', '2024-06-24 23:10:58', 'ORD240623161423'),
(37, 'Your request payment too long so we decided to cancel your order. regrets!', '2024-06-24 23:11:59', 'ORD240623220033'),
(38, 'Price Too High', '2024-06-26 15:23:46', 'ORD240626152307');

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
('E001', '123', 'Tuấn Đoàn', 'male', 'https://res.cloudinary.com/datlowashere/image/upload/v1716614542/rcoffee/employee/jsmoggcpoqbryoy1n3ii.png', 'manager', '1234567890', 1),
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
(3, '2024-05-25 11:44:54', 'michael.brown@example.com', 3),
(4, '2024-05-25 11:44:54', 'john.doe@example.com', 4),
(94, '2024-06-24 20:26:28', 'jane.smith@example.com', 13),
(95, '2024-06-24 20:26:29', 'jane.smith@example.com', 14),
(96, '2024-06-24 23:12:28', 'david.wilson@example.com', 1),
(101, '2024-06-24 23:12:41', 'david.wilson@example.com', 2),
(102, '2024-06-26 04:04:34', 'jane.smith@example.com', 2),
(103, '2024-06-26 04:04:35', 'jane.smith@example.com', 4);

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

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`notification_id`, `title`, `message`, `create_at`, `is_read`, `email_user`, `order_id`) VALUES
(59, 'Order Cancelled', 'Order: ORD240622231851: has been cancelled for reason: No Longer Want It', '2024-06-24 01:09:11', 1, 'jane.smith@example.com', 'ORD240622231851'),
(62, 'Order Cancelled', 'Order: ORD240620145723: has been cancelled for reason: Allergy Concerns', '2024-06-24 01:11:24', 1, 'jane.smith@example.com', 'ORD240620145723'),
(89, 'Order Created', 'Order: ORD240624040800: 63.750 ₫ has been created', '2024-06-24 04:08:20', 1, 'jane.smith@example.com', 'ORD240624040800'),
(91, 'Order Preparing', 'Order: ORD240624040800. Your order is being prepared.', '2024-06-24 04:08:38', 1, 'jane.smith@example.com', 'ORD240624040800'),
(92, 'Order Pick Up', 'Order: ORD240624040800. Shipper has picked up your order.', '2024-06-24 04:10:48', 1, 'jane.smith@example.com', 'ORD240624040800'),
(97, 'Payment Failed', 'Order: ORD240624193846: failed to pay', '2024-06-24 20:05:43', 1, 'david.wilson@example.com', 'ORD240624193846'),
(98, 'Order Receiveds', 'Order: ORD240624005345: has been completed', '2024-06-24 20:05:51', 1, 'david.wilson@example.com', 'ORD240624005345'),
(100, 'Order Pick Up', 'Order: ORD240624193846. Shipper has picked up your order.', '2024-06-24 20:12:20', 1, 'david.wilson@example.com', 'ORD240624193846'),
(101, 'Order Delivering', 'Order: ORD240624193846. Your order is on its way to you.', '2024-06-24 20:12:22', 1, 'david.wilson@example.com', 'ORD240624193846'),
(102, 'Order Cancelled', 'Order: ORD240623235332. Your request payment is too long, so we have to cancel your order. thank u', '2024-06-24 20:13:43', 1, 'david.wilson@example.com', 'ORD240623235332'),
(103, 'Order Created', 'Order: ORD240624203017: 82.450 ₫ has been created', '2024-06-24 20:30:30', 1, 'jane.smith@example.com', 'ORD240624203017'),
(104, 'Payment Failed', 'Order: ORD240624203017: not pay yet', '2024-06-24 20:30:39', 1, 'jane.smith@example.com', 'ORD240624203017'),
(105, 'Payment Succesful', 'Order: ORD240624203017: has been paid successfully', '2024-06-24 20:30:56', 1, 'jane.smith@example.com', 'ORD240624203017'),
(106, 'Order Preparing', 'Order: ORD240624203017. Your order is being prepared.', '2024-06-24 22:26:43', 1, 'jane.smith@example.com', 'ORD240624203017'),
(107, 'Order Pick Up', 'Order: ORD240624203017. Shipper has picked up your order.', '2024-06-24 22:26:46', 1, 'jane.smith@example.com', 'ORD240624203017'),
(108, 'Order Delivering', 'Order: ORD240624203017. Your order is on its way to you.', '2024-06-24 22:26:48', 1, 'jane.smith@example.com', 'ORD240624203017'),
(110, 'Order Created', 'Order: ORD240624223355: 42.500 ₫ has been created', '2024-06-24 22:34:12', 1, 'jane.smith@example.com', 'ORD240624223355'),
(111, 'Payment Failed', 'Order: ORD240624223355: not pay yet', '2024-06-24 22:34:20', 1, 'jane.smith@example.com', 'ORD240624223355'),
(112, 'Payment Succesful', 'Order: ORD240624223355: has been paid successfully', '2024-06-24 22:34:35', 1, 'jane.smith@example.com', 'ORD240624223355'),
(113, 'Order Preparing', 'Order: ORD240624223355. Your order is being prepared.', '2024-06-24 22:40:14', 1, 'jane.smith@example.com', 'ORD240624223355'),
(115, 'Order Delivering', 'Order: ORD240624223355. Your order is on its way to you.', '2024-06-24 22:47:38', 1, 'jane.smith@example.com', 'ORD240624223355'),
(116, 'Order Receiveds', 'Order: ORD240624223355: has been completed', '2024-06-24 22:54:40', 1, 'jane.smith@example.com', 'ORD240624223355'),
(119, 'Order Preparing', 'Order: ORD240623233424. Your order is being prepared.', '2024-06-24 22:56:04', 1, 'david.wilson@example.com', 'ORD240623233424'),
(127, 'Order Delivering', 'Order: ORD240623235332. Your order is on its way to you.', '2024-06-24 23:10:42', 1, 'david.wilson@example.com', 'ORD240623235332'),
(128, 'Order Receiveds', 'Order: ORD240623235332: has been completed', '2024-06-24 23:10:48', 1, 'david.wilson@example.com', 'ORD240623235332'),
(129, 'Order Cancelled', 'Order: ORD240623161423: has been cancelled for reason: Change of Plans', '2024-06-24 23:10:58', 1, 'david.wilson@example.com', 'ORD240623161423'),
(130, 'Order Cancelled', 'Order: ORD240623220033. Your request payment too long so we decided to cancel your order. regrets!', '2024-06-24 23:11:59', 1, 'david.wilson@example.com', 'ORD240623220033'),
(131, 'Order Created', 'Order: ORD240626033200: 126.650 ₫ has been created', '2024-06-26 03:32:18', 1, 'david.wilson@example.com', 'ORD240626033200'),
(132, 'Payment Succesful', 'Order: ORD240626033200: has been paid successfully', '2024-06-26 03:32:36', 1, 'david.wilson@example.com', 'ORD240626033200'),
(133, 'Order Preparing', 'Order: ORD240626033200. Your order is being prepared.', '2024-06-26 03:32:52', 1, 'david.wilson@example.com', 'ORD240626033200'),
(134, 'Order Pick Up', 'Order: ORD240626033200. Shipper has picked up your order.', '2024-06-26 03:32:54', 1, 'david.wilson@example.com', 'ORD240626033200'),
(135, 'Order Delivering', 'Order: ORD240626033200. Your order is on its way to you.', '2024-06-26 03:32:56', 1, 'david.wilson@example.com', 'ORD240626033200'),
(137, 'Order Created', 'Order: ORD240626034514: 63.750 ₫ has been created', '2024-06-26 03:45:32', 1, 'david.wilson@example.com', 'ORD240626034514'),
(138, 'Payment Succesful', 'Order: ORD240626034514: has been paid successfully', '2024-06-26 03:57:32', 1, 'david.wilson@example.com', 'ORD240626034514'),
(139, 'Order Pick Up', 'Order: ORD240626034514. Shipper has picked up your order.', '2024-06-26 03:57:57', 1, 'david.wilson@example.com', 'ORD240626034514'),
(140, 'Order Delivering', 'Order: ORD240626034514. Your order is on its way to you.', '2024-06-26 03:57:59', 1, 'david.wilson@example.com', 'ORD240626034514'),
(141, 'Order Receiveds', 'Order: ORD240626034514: has been completed', '2024-06-26 03:58:16', 1, 'david.wilson@example.com', 'ORD240626034514'),
(143, 'Payment Failed', 'Order: ORD240626040444: not pay yet', '2024-06-26 04:05:19', 0, 'jane.smith@example.com', 'ORD240626040444'),
(144, 'Order Created', 'Order: ORD240626152307: 21.250 ₫ has been created', '2024-06-26 15:23:18', 0, 'david.wilson@example.com', 'ORD240626152307'),
(145, 'Payment Succesful', 'Order: ORD240626152307: has been paid successfully', '2024-06-26 15:23:33', 0, 'david.wilson@example.com', 'ORD240626152307'),
(146, 'Order Cancelled', 'Order: ORD240626152307: has been cancelled for reason: Price Too High', '2024-06-26 15:23:46', 0, 'david.wilson@example.com', 'ORD240626152307');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `order_id` varchar(255) NOT NULL,
  `order_date` datetime NOT NULL DEFAULT current_timestamp(),
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT current_timestamp(),
  `payment_method` varchar(50) DEFAULT NULL,
  `total_amount` double NOT NULL,
  `discount_amount` double DEFAULT NULL,
  `status_order` enum('pending','preparing','pick up','delivering','cancelled','delivered') DEFAULT 'pending',
  `address_id` int(11) DEFAULT NULL,
  `voucher_id` int(11) DEFAULT NULL,
  `order_message` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`order_id`, `order_date`, `create_at`, `update_at`, `payment_method`, `total_amount`, `discount_amount`, `status_order`, `address_id`, `voucher_id`, `order_message`) VALUES
('ORD001', '2024-05-28 14:30:00', '2024-05-28 14:30:00', '2024-06-22 15:52:46', 'Zalo Pay', 100000, 10, 'delivered', 1, 2, 'Less sugar please'),
('ORD002', '2024-05-30 14:30:00', '2024-05-28 14:30:00', '2024-06-22 15:52:46', 'Zalo Pay', 257000, 10, 'delivered', 2, 2, 'Call me when u arrived'),
('ORD003', '2024-05-31 14:30:00', '2024-05-28 14:30:00', '2024-06-22 15:52:46', 'Zalo Pay', 220000, 10, 'delivered', 3, 2, 'Please deliver between 2-4 PM.'),
('ORD004', '2024-03-06 15:00:00', '2024-05-28 15:00:00', '2024-06-22 15:52:46', 'Zalo Pay', 400000, 20, 'delivered', 4, 3, 'Leave package at the front door.'),
('ORD005', '2024-05-28 15:30:00', '2024-05-28 15:30:00', '2024-06-22 23:33:52', 'Zalo Pay', 75000, 5, 'cancelled', 5, 3, 'Ring the bell once you arrive.'),
('ORD240619223141', '2024-06-19 22:31:37', '2024-06-19 22:31:37', '2024-06-22 15:52:46', 'Zalo Pay', 150000, 37500, 'delivered', 6, 4, ''),
('ORD240619224119', '2024-06-19 22:41:15', '2024-06-19 22:41:15', '2024-06-22 15:52:46', 'Zalo Pay', 175000, 35000, 'delivered', 7, 3, ''),
('ORD240619231013', '2024-06-19 23:10:08', '2024-06-19 23:10:08', '2024-06-22 15:52:46', 'Zalo Pay', 70000, 17500, 'delivered', 8, 4, 'Nhiều đường, cho 1 thau đá riêng '),
('ORD240619231225', '2024-06-19 23:12:20', '2024-06-19 23:12:20', '2024-06-23 23:34:01', 'Zalo Pay', 100000, 25000, 'cancelled', 9, 4, 'Đá riêng'),
('ORD240619231321', '2024-06-19 23:13:16', '2024-06-19 23:13:16', '2024-06-22 21:10:02', 'Zalo Pay', 48000, 7200, 'cancelled', 9, 2, 'Nhiều đường không đá'),
('ORD240619231433', '2024-06-19 23:14:28', '2024-06-19 23:14:28', '2024-06-22 15:52:46', 'Zalo Pay', 350004.5, 87501.125, 'delivered', 10, 4, 'Cho 1 thau đá riêng, ship trước 10h hen'),
('ORD240619232234', '2024-06-19 23:22:29', '2024-06-19 23:22:29', '2024-06-22 19:51:33', 'Zalo Pay', 85000, 0, 'cancelled', 10, NULL, 'No comment'),
('ORD240620143811', '2024-06-20 14:38:06', '2024-06-20 14:38:06', '2024-06-24 01:10:57', 'Zalo Pay', 80003.6, 20000.9, 'cancelled', 11, 3, 'Ok cho đá riêng'),
('ORD240620144154', '2024-06-20 14:41:48', '2024-06-20 14:41:48', '2024-06-22 21:09:47', 'Zalo Pay', 85000, 0, 'cancelled', 10, NULL, 'Nhiều đường, ít cafe'),
('ORD240620145406', '2024-06-20 14:54:00', '2024-06-20 14:54:00', '2024-06-22 21:09:30', 'Zalo Pay', 37500, 12500, 'cancelled', 11, 4, 'Nothing special'),
('ORD240620145723', '2024-06-20 14:57:17', '2024-06-20 14:57:17', '2024-06-24 01:11:24', 'Zalo Pay', 50000, 0, 'cancelled', 10, NULL, ''),
('ORD240620145902', '2024-06-20 14:58:56', '2024-06-20 14:58:56', '2024-06-22 23:07:57', 'Zalo Pay', 40000, 10000, 'cancelled', 11, 3, ''),
('ORD240620150635', '2024-06-20 15:06:41', '2024-06-20 15:06:41', '2024-06-22 15:52:46', 'Zalo Pay', 21250, 3750, 'delivered', 10, 2, 'nothing'),
('ORD240620150729', '2024-06-20 15:07:33', '2024-06-20 15:07:33', '2024-06-22 15:52:46', 'Zalo Pay', 50000, 0, 'delivered', 11, NULL, 'okla'),
('ORD240620192542', '2024-06-20 19:25:49', '2024-06-20 19:25:49', '2024-06-22 15:58:07', 'Zalo Pay', 40000, 10000, 'delivered', 10, 3, ''),
('ORD240620193630', '2024-06-20 19:36:32', '2024-06-20 19:36:32', '2024-06-22 18:35:46', 'Zalo Pay', 50000, 0, 'delivered', 10, NULL, ''),
('ORD240620201456', '2024-06-20 20:16:17', '2024-06-20 20:16:17', '2024-06-22 18:50:01', 'Zalo Pay', 56250, 18750, 'delivered', 10, 4, ' Cho nhiều đá'),
('ORD240620202027', '2024-06-20 20:20:32', '2024-06-20 20:20:32', '2024-06-22 23:15:27', 'Zalo Pay', 25000, 0, 'cancelled', 9, NULL, ''),
('ORD240620202119', '2024-06-20 20:21:23', '2024-06-20 20:21:23', '2024-06-22 18:49:54', 'Zalo Pay', 4.5, 0, 'delivered', 9, NULL, ''),
('ORD240620202334', '2024-06-20 20:23:36', '2024-06-20 20:23:36', '2024-06-22 19:48:23', 'Zalo Pay', 25000, 0, 'cancelled', 11, NULL, ''),
('ORD240620202407', '2024-06-20 20:24:10', '2024-06-20 20:24:10', '2024-06-22 23:18:16', 'Zalo Pay', 4.5, 0, 'delivered', 9, NULL, ''),
('ORD240621025319', '2024-06-21 02:53:53', '2024-06-21 02:53:53', '2024-06-22 19:52:12', 'Zalo Pay', 17680, 3120, 'cancelled', 12, 2, 'Ít đường '),
('ORD240622022933', '2024-06-22 02:29:43', '2024-06-22 02:29:43', '2024-06-22 15:57:58', 'Zalo Pay', 119250, 39750, 'delivered', 12, 4, 'Đá riêng '),
('ORD240622032617', '2024-06-22 03:26:40', '2024-06-22 03:26:40', '2024-06-22 21:34:36', 'Zalo Pay', 109650, 19350, 'delivered', 12, 2, 'Dont delivery at 10.am'),
('ORD240622041053', '2024-06-22 04:11:03', '2024-06-22 04:11:03', '2024-06-23 15:38:47', 'Zalo Pay', 56250, 18750, 'delivered', 7, 4, 'Give me some flavors '),
('ORD240622041318', '2024-06-22 04:13:17', '2024-06-22 04:13:17', '2024-06-22 23:32:54', 'Zalo Pay', 25000, 0, 'delivered', 7, NULL, ''),
('ORD240622042410', '2024-06-22 04:24:09', '2024-06-22 04:24:09', '2024-06-22 23:32:47', 'Zalo Pay', 75000, 0, 'delivered', 7, NULL, ''),
('ORD240622143735', '2024-06-22 14:37:35', '2024-06-22 14:37:35', '2024-06-22 19:58:03', 'Zalo Pay', 50000, 0, 'cancelled', 11, NULL, ''),
('ORD240622203255', '2024-06-22 20:33:05', '2024-06-22 20:33:05', '2024-06-22 23:17:02', 'Zalo Pay', 112500, 37500, 'delivered', 11, 4, 'Do nothing '),
('ORD240622204012', '2024-06-22 20:40:19', '2024-06-22 20:40:19', '2024-06-22 20:40:57', 'Zalo Pay', 71400, 12600, 'cancelled', 10, 2, 'Do nothing'),
('ORD240622205553', '2024-06-22 20:56:07', '2024-06-22 20:56:07', '2024-06-22 22:19:07', 'Zalo Pay', 100300, 17700, 'delivered', 11, 2, 'Testing'),
('ORD240622205937', '2024-06-22 20:59:40', '2024-06-22 20:59:40', '2024-06-22 21:21:32', 'Zalo Pay', 21250, 3750, 'cancelled', 11, 2, '12t'),
('ORD240622212905', '2024-06-22 21:29:27', '2024-06-22 21:29:27', '2024-06-22 21:30:56', 'Zalo Pay', 37500, 12500, 'delivered', 11, 4, 'Check out before divery'),
('ORD240622221734', '2024-06-22 22:18:16', '2024-06-22 22:18:16', '2024-06-22 23:17:22', 'Zalo Pay', 68850, 12150, 'delivered', 13, 2, 'Call me before delivery '),
('ORD240622231851', '2024-06-22 23:19:04', '2024-06-22 23:19:04', '2024-06-24 01:09:11', 'Zalo Pay', 160650, 28350, 'cancelled', 11, 2, 'Kick off'),
('ORD240622232932', '2024-06-22 23:29:43', '2024-06-22 23:29:43', '2024-06-22 23:31:21', 'Zalo Pay', 40000, 10000, 'cancelled', 11, 3, 'Checkout before comming'),
('ORD240622233010', '2024-06-22 23:30:29', '2024-06-22 23:30:29', '2024-06-22 23:31:44', 'Zalo Pay', 20000, 5000, 'delivered', 10, 3, 'Keep it hot before delivery '),
('ORD240623155913', '2024-06-23 15:59:33', '2024-06-23 15:59:33', '2024-06-24 23:00:07', 'Zalo Pay', 63750, 11250, 'cancelled', 6, 2, 'Give me some flavors '),
('ORD240623160346', '2024-06-23 16:04:16', '2024-06-23 16:04:16', '2024-06-23 16:04:16', 'Zalo Pay', 52500, 17500, 'pending', 7, 4, 'Give me the receipt'),
('ORD240623160444', '2024-06-23 16:04:44', '2024-06-23 16:04:44', '2024-06-24 00:58:59', 'Zalo Pay', 70000, 0, 'cancelled', 6, NULL, 'Give me the receipt'),
('ORD240623160629', '2024-06-23 16:06:32', '2024-06-23 16:06:32', '2024-06-23 16:06:32', 'Zalo Pay', 20000, 5000, 'pending', 5, 3, 'Ok'),
('ORD240623161423', '2024-06-23 16:14:25', '2024-06-23 16:14:25', '2024-06-24 23:10:58', 'Zalo Pay', 21250, 3750, 'cancelled', 7, 2, 'ok'),
('ORD240623220033', '2024-06-23 22:00:38', '2024-06-23 22:00:38', '2024-06-24 23:11:59', 'Zalo Pay', 25000, 0, 'cancelled', 6, NULL, ''),
('ORD240623220755', '2024-06-23 22:09:00', '2024-06-23 22:09:00', '2024-06-24 01:00:26', 'Zalo Pay', 25000, 0, 'delivered', 7, NULL, 'Okai'),
('ORD240623221251', '2024-06-23 22:13:04', '2024-06-23 22:13:04', '2024-06-24 04:06:57', 'Zalo Pay', 18750, 6250, 'delivering', 7, 4, 'ok'),
('ORD240623224227', '2024-06-23 22:42:37', '2024-06-23 22:42:37', '2024-06-24 01:00:19', 'Zalo Pay', 21250, 3750, 'delivered', 7, 2, 'ok'),
('ORD240623225002', '2024-06-23 22:50:14', '2024-06-23 22:50:14', '2024-06-24 03:28:36', 'Zalo Pay', 18750, 6250, 'cancelled', 5, 4, 'ok'),
('ORD240623225556', '2024-06-23 22:56:02', '2024-06-23 22:56:02', '2024-06-24 01:00:34', 'Zalo Pay', 25000, 0, 'delivered', 6, NULL, ''),
('ORD240623232454', '2024-06-23 23:25:03', '2024-06-23 23:25:03', '2024-06-24 22:55:24', 'Zalo Pay', 40000, 10000, 'cancelled', 6, 3, ''),
('ORD240623233237', '2024-06-23 23:32:47', '2024-06-23 23:32:47', '2024-06-24 00:50:26', 'Zalo Pay', 25000, 0, 'cancelled', 6, NULL, 'ok'),
('ORD240623233424', '2024-06-23 23:34:36', '2024-06-23 23:34:36', '2024-06-24 22:56:09', 'Zalo Pay', 50000, 0, 'delivering', 7, NULL, ''),
('ORD240623235332', '2024-06-23 23:53:44', '2024-06-23 23:53:44', '2024-06-24 23:10:48', 'Zalo Pay', 75000, 0, 'delivered', 7, NULL, 'ik'),
('ORD240624000950', '2024-06-24 00:10:28', '2024-06-24 00:10:28', '2024-06-24 04:07:17', 'Zalo Pay', 63750, 11250, 'delivered', 14, 2, 'Okela'),
('ORD240624001524', '2024-06-24 00:15:31', '2024-06-24 00:15:31', '2024-06-24 01:10:28', 'Zalo Pay', 18750, 6250, 'cancelled', 6, 4, ''),
('ORD240624001602', '2024-06-24 00:16:14', '2024-06-24 00:16:14', '2024-06-24 04:06:29', 'Zalo Pay', 127500, 22500, 'delivering', 14, 2, 'oke'),
('ORD240624001758', '2024-06-24 00:18:08', '2024-06-24 00:18:08', '2024-06-24 04:07:21', 'Zalo Pay', 42500, 7500, 'delivered', 7, 2, ''),
('ORD240624002146', '2024-06-24 00:21:56', '2024-06-24 00:21:56', '2024-06-24 00:49:09', 'Zalo Pay', 42500, 7500, 'cancelled', 6, 2, 'ok'),
('ORD240624002455', '2024-06-24 00:25:05', '2024-06-24 00:25:05', '2024-06-24 00:29:11', 'Zalo Pay', 63750, 11250, 'cancelled', 7, 2, ''),
('ORD240624002555', '2024-06-24 00:26:08', '2024-06-24 00:26:08', '2024-06-24 00:48:49', 'Zalo Pay', 148750, 26250, 'delivered', 8, 2, 'oke'),
('ORD240624002751', '2024-06-24 00:27:58', '2024-06-24 00:27:58', '2024-06-24 00:48:42', 'Zalo Pay', 18750, 6250, 'delivered', 7, 4, ''),
('ORD240624002823', '2024-06-24 00:28:31', '2024-06-24 00:28:31', '2024-06-24 04:07:25', 'Zalo Pay', 18750, 6250, 'delivered', 7, 4, ''),
('ORD240624005114', '2024-06-24 00:51:23', '2024-06-24 00:51:23', '2024-06-24 04:03:45', 'Zalo Pay', 61200, 10800, 'cancelled', 8, 2, 'ola'),
('ORD240624005345', '2024-06-24 00:53:56', '2024-06-24 00:53:56', '2024-06-24 20:05:51', 'Zalo Pay', 72750, 24250, 'delivered', 8, 4, 'okela'),
('ORD240624010116', '2024-06-24 01:01:33', '2024-06-24 01:01:33', '2024-06-24 04:07:31', 'Zalo Pay', 293250, 51750, 'delivered', 8, 2, 'Test'),
('ORD240624040800', '2024-06-24 04:08:20', '2024-06-24 04:08:20', '2024-06-24 04:12:53', 'Zalo Pay', 63750, 11250, 'cancelled', 11, 2, ''),
('ORD240624193846', '2024-06-24 19:39:10', '2024-06-24 19:39:10', '2024-06-24 22:55:17', 'Zalo Pay', 119000, 21000, 'delivered', 7, 2, 'Call be before delivering '),
('ORD240624203017', '2024-06-24 20:30:30', '2024-06-24 20:30:30', '2024-06-24 22:28:37', 'Zalo Pay', 82450, 14550, 'delivered', 13, 2, 'ok'),
('ORD240624223355', '2024-06-24 22:34:12', '2024-06-24 22:34:12', '2024-06-24 22:54:40', 'Zalo Pay', 42500, 7500, 'delivered', 10, 2, 'Oke'),
('ORD240624230859', '2024-06-24 23:09:12', '2024-06-24 23:09:12', '2024-06-24 23:10:06', 'Zalo Pay', 85000, 15000, 'cancelled', 7, 2, 'Okela'),
('ORD240626033200', '2024-06-26 03:32:18', '2024-06-26 03:32:18', '2024-06-26 03:33:09', 'Zalo Pay', 126650, 22350, 'delivered', 7, 2, 'Call me when u arrive '),
('ORD240626034514', '2024-06-26 03:45:32', '2024-06-26 03:45:32', '2024-06-26 03:58:16', 'Zalo Pay', 63750, 11250, 'delivered', 14, 2, 'Call me when you arrive '),
('ORD240626040444', '2024-06-26 04:05:16', '2024-06-26 04:05:16', '2024-06-26 04:05:16', 'Zalo Pay', 128350, 22650, 'pending', 11, 2, ''),
('ORD240626152307', '2024-06-26 15:23:18', '2024-06-26 15:23:18', '2024-06-26 15:23:46', 'Zalo Pay', 21250, 3750, 'cancelled', 7, 2, 'Ok');

-- --------------------------------------------------------

--
-- Table structure for table `payment_detail`
--

CREATE TABLE `payment_detail` (
  `payment_id` int(11) NOT NULL,
  `status` enum('paid','unpaid') DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `order_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment_detail`
--

INSERT INTO `payment_detail` (`payment_id`, `status`, `create_at`, `order_id`) VALUES
(7, 'paid', '2024-06-20 15:06:55', 'ORD240620150635'),
(8, 'unpaid', '2024-06-20 15:07:42', 'ORD240620150729'),
(9, 'paid', '2024-06-20 19:36:50', 'ORD240620193630'),
(10, 'unpaid', '2024-06-20 20:16:32', 'ORD240620201456'),
(11, 'paid', '2024-06-20 20:20:47', 'ORD240620202027'),
(12, 'unpaid', '2024-06-20 20:21:34', 'ORD240620202119'),
(13, 'paid', '2024-06-20 20:23:51', 'ORD240620202334'),
(14, 'unpaid', '2024-06-20 20:24:18', 'ORD240620202407'),
(15, 'paid', '2024-06-20 23:14:10', 'ORD240620192542'),
(16, 'unpaid', '2024-06-20 23:15:12', 'ORD001'),
(17, 'paid', '2024-06-20 23:15:12', 'ORD002'),
(18, 'paid', '2024-06-20 23:15:12', 'ORD003'),
(19, 'paid', '2024-06-20 23:15:12', 'ORD004'),
(20, 'paid', '2024-06-20 23:15:12', 'ORD005'),
(21, 'paid', '2024-06-20 23:15:12', 'ORD240619223141'),
(22, 'paid', '2024-06-20 23:15:12', 'ORD240619224119'),
(23, 'paid', '2024-06-20 23:15:12', 'ORD240619231013'),
(24, 'paid', '2024-06-20 23:15:12', 'ORD240619231225'),
(25, 'paid', '2024-06-20 23:15:12', 'ORD240619231321'),
(26, 'paid', '2024-06-20 23:15:12', 'ORD240619231433'),
(27, 'paid', '2024-06-20 23:15:12', 'ORD240619232234'),
(28, 'paid', '2024-06-20 23:15:12', 'ORD240620143811'),
(29, 'paid', '2024-06-20 23:15:12', 'ORD240620144154'),
(30, 'paid', '2024-06-20 23:15:12', 'ORD240620145406'),
(31, 'paid', '2024-06-20 23:15:12', 'ORD240620145723'),
(32, 'paid', '2024-06-20 23:15:12', 'ORD240620145902'),
(33, 'paid', '2024-06-21 02:54:11', 'ORD240621025319'),
(34, 'paid', '2024-06-22 02:30:01', 'ORD240622022933'),
(35, 'paid', '2024-06-22 03:26:57', 'ORD240622032617'),
(36, 'unpaid', '2024-06-22 04:11:12', 'ORD240622041053'),
(37, 'unpaid', '2024-06-22 04:13:24', 'ORD240622041318'),
(38, 'unpaid', '2024-06-22 04:24:20', 'ORD240622042410'),
(39, 'unpaid', '2024-06-22 14:37:45', 'ORD240622143735'),
(40, 'paid', '2024-06-22 20:40:33', 'ORD240622204012'),
(41, 'paid', '2024-06-22 20:59:18', 'ORD240622205553'),
(42, 'paid', '2024-06-22 20:59:18', 'ORD240622203255'),
(43, 'paid', '2024-06-22 20:59:55', 'ORD240622205937'),
(44, 'paid', '2024-06-22 21:29:42', 'ORD240622212905'),
(45, 'paid', '2024-06-22 22:18:25', 'ORD240622221734'),
(46, 'paid', '2024-06-22 23:19:19', 'ORD240622231851'),
(47, 'paid', '2024-06-22 23:29:57', 'ORD240622232932'),
(48, 'paid', '2024-06-22 23:30:39', 'ORD240622233010'),
(49, 'paid', '2024-06-23 16:01:35', 'ORD240623155913'),
(50, 'unpaid', '2024-06-23 16:06:04', 'ORD240623160346'),
(51, 'paid', '2024-06-23 16:06:14', 'ORD240623160444'),
(52, 'paid', '2024-06-23 16:14:42', 'ORD240623161423'),
(53, 'paid', '2024-06-23 22:01:02', 'ORD240623220033'),
(54, 'paid', '2024-06-23 22:09:20', 'ORD240623220755'),
(55, 'paid', '2024-06-23 22:43:24', 'ORD240623224227'),
(56, 'paid', '2024-06-23 22:50:56', 'ORD240623225002'),
(57, 'paid', '2024-06-23 22:56:17', 'ORD240623225556'),
(58, 'paid', '2024-06-23 23:25:29', 'ORD240623232454'),
(59, 'paid', '2024-06-23 23:33:03', 'ORD240623233237'),
(62, 'paid', '2024-06-23 23:54:04', 'ORD240623235332'),
(63, 'paid', '2024-06-24 00:10:42', 'ORD240624000950'),
(64, 'paid', '2024-06-24 00:15:45', 'ORD240624001524'),
(65, 'paid', '2024-06-24 00:18:17', 'ORD240624001758'),
(66, 'paid', '2024-06-24 00:22:12', 'ORD240624002146'),
(67, 'paid', '2024-06-24 00:25:21', 'ORD240624002455'),
(68, 'paid', '2024-06-24 00:26:16', 'ORD240624002555'),
(69, 'paid', '2024-06-24 00:28:11', 'ORD240624002751'),
(70, 'paid', '2024-06-24 00:28:33', 'ORD240624002823'),
(71, 'paid', '2024-06-24 00:51:35', 'ORD240624005114'),
(72, 'paid', '2024-06-24 00:54:05', 'ORD240624005345'),
(73, 'paid', '2024-06-24 01:01:42', 'ORD240624010116'),
(74, 'unpaid', '2024-06-24 04:08:22', 'ORD240624040800'),
(75, 'unpaid', '2024-06-24 19:39:20', 'ORD240624193846'),
(76, 'paid', '2024-06-24 20:30:39', 'ORD240624203017'),
(77, 'paid', '2024-06-24 22:34:21', 'ORD240624223355'),
(78, 'paid', '2024-06-24 23:09:23', 'ORD240624230859'),
(79, 'paid', '2024-06-26 03:32:36', 'ORD240626033200'),
(80, 'paid', '2024-06-26 03:57:07', 'ORD240626034514'),
(81, 'unpaid', '2024-06-26 04:05:19', 'ORD240626040444'),
(82, 'paid', '2024-06-26 15:23:33', 'ORD240626152307');

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
(1, 'Espresso', 'https://res.cloudinary.com/datlowashere/image/upload/v1717689895/rcoffee/product/kyg28rhr01pz82sa0lk4.jpg', 'Strong and bold coffee.', 25000, 1, 'available'),
(2, 'Double Espresso', 'https://res.cloudinary.com/datlowashere/image/upload/v1717689883/rcoffee/product/pikzjtkawgu88v948q0o.jpg', 'Twice the strength of a regular espresso.', 25000, 1, 'available'),
(3, 'Latte', 'https://as1.ftcdn.net/v2/jpg/00/94/14/38/1000_F_94143804_QFuKnDxb29Crj61iuBClT9wQPErPfGsw.jpg', 'Smooth and creamy coffee with milk.', 4, 2, 'is available'),
(4, 'Vanilla Latte', 'https://as2.ftcdn.net/v2/jpg/05/95/09/07/1000_F_595090766_1wz5nknXYjZIiHHN2AkbNKCP5C0gzl7r.webp', 'Latte with a hint of vanilla.', 42000, 2, 'available'),
(5, 'Cappuccino', 'https://res.cloudinary.com/datlowashere/image/upload/v1717689870/rcoffee/product/gsnvvzndj5foldiblguy.jpg', 'Rich and foamy coffee.', 25000, 3, 'available'),
(6, 'Flat White', 'https://res.cloudinary.com/datlowashere/image/upload/v1717689853/rcoffee/product/ownmssncwf7sltpx1jvb.jpg', 'Smooth and velvety coffee.', 25000, 2, 'available'),
(7, 'Americano', 'https://as1.ftcdn.net/v2/jpg/06/27/72/08/1000_F_627720871_kZ9KfTT179IjjT7FNqBC9vaLS2n5tLAw.jpg', 'Simple and classic black coffee.', 30000, 4, 'is available'),
(8, 'Extrempa', 'https://res.cloudinary.com/datlowashere/image/upload/v1717689841/rcoffee/product/vu3obf8t33fgylmyek9r.jpg', 'Chocolate-flavored coffee and rich cheese with little sugar', 24000, 1, 'available'),
(9, 'Caramel Mocha', 'https://res.cloudinary.com/datlowashere/image/upload/v1717689830/rcoffee/product/vxb1nubxseias6vqtcbx.jpg', 'Mocha with caramel.', 35000, 5, 'available'),
(10, 'Cold Brew', 'https://res.cloudinary.com/datlowashere/image/upload/v1717689818/rcoffee/product/iyekjuqwuenju5jg0tjw.jpg', 'Smooth cold coffee.', 25000, 4, 'available'),
(11, 'BeeCapuchio', 'https://res.cloudinary.com/datlowashere/image/upload/v1717689805/rcoffee/product/hxadbevm0qfgljsjyytd.jpg', 'Hot and cold', 25000, 4, 'available'),
(12, 'EmmaAmericano', 'https://res.cloudinary.com/datlowashere/image/upload/v1716887291/rcoffee/product/paed6ooqx4bsc07nwe6u.jpg', 'Hot and reach', 26000, 4, 'is available'),
(13, 'Mochiano', 'https://res.cloudinary.com/datlowashere/image/upload/v1717689793/rcoffee/product/lfx4nysuqiezjcgwjsvv.jpg', 'Highly and hot', 35000, 5, 'available'),
(14, 'Americano Original', 'https://res.cloudinary.com/datlowashere/image/upload/v1717689781/rcoffee/product/tmvklv0rlovbl7z6ilbr.jpg', 'Coffee is a beverage brewed from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks.', 27000, 4, 'available'),
(15, 'XunaX', 'https://res.cloudinary.com/datlowashere/image/upload/v1717612610/rcoffee/product/igzldolcu8jfgxd2o68q.jpg', 'Special edition of americano', 35000, 3, 'is available'),
(16, 'Americano Blackx5', 'https://res.cloudinary.com/datlowashere/image/upload/v1717168532/rcoffee/product/fxcxwsiofpgu6okcoeqs.jpg', 'Hot and extremely bitter', 45000, 4, 'is available');

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
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `basket_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`rating_id`, `rating`, `review`, `product_id`, `email_user`, `create_at`, `basket_id`) VALUES
(6, 3, 'OK it fine this time', 8, 'jane.smith@example.com', '2024-06-26 00:26:19', 163),
(8, 4, 'Oke nake', 1, 'jane.smith@example.com', '2024-06-26 01:14:07', 164),
(10, 2, 'Okenaka', 2, 'jane.smith@example.com', '2024-06-26 01:14:45', 166),
(11, 3, 'Not good as i expected ', 8, 'jane.smith@example.com', '2024-06-26 01:19:10', 118),
(12, 5, 'oke', 9, 'jane.smith@example.com', '2024-06-26 01:19:11', 119),
(13, 2, 'Norm', 9, 'jane.smith@example.com', '2024-06-26 01:25:25', 119),
(14, 4, 'Pretty good ', 14, 'jane.smith@example.com', '2024-06-26 01:32:11', 122),
(17, 4, 'Not good as i though ', 4, 'jane.smith@example.com', '2024-06-26 02:29:07', 94),
(18, 4, 'Its good this time', 8, 'jane.smith@example.com', '2024-06-26 02:29:29', 107),
(19, 2, 'How it can be too sours this time?', 14, 'jane.smith@example.com', '2024-06-26 02:29:45', 109),
(20, 3, 'Such a disappointed ', 2, 'jane.smith@example.com', '2024-06-26 02:34:20', 100),
(21, 1, 'Not good ????', 5, 'jane.smith@example.com', '2024-06-26 02:36:22', 86),
(22, 5, 'Love it', 1, 'jane.smith@example.com', '2024-06-26 02:36:38', 21),
(23, 3, 'Too sweet ', 5, 'jane.smith@example.com', '2024-06-26 02:36:46', 67),
(24, 3, 'too hot', 4, 'jane.smith@example.com', '2024-06-26 02:36:56', 68),
(25, 1, 'Bad ', 6, 'jane.smith@example.com', '2024-06-26 02:37:05', 69),
(26, 3, 'Dont like it', 1, 'jane.smith@example.com', '2024-06-26 02:37:26', 123),
(27, 5, 'Maybe this time is ok', 1, 'jane.smith@example.com', '2024-06-26 02:37:56', 115),
(28, 3, 'norm', 4, 'jane.smith@example.com', '2024-06-26 02:38:09', 91),
(29, 4, 'Pretty good for me', 2, 'david.wilson@example.com', '2024-06-26 03:00:22', 143),
(30, 2, 'Too salty ', 1, 'david.wilson@example.com', '2024-06-26 03:00:45', 65),
(31, 4, 'This is becoming my favorite one now', 10, 'david.wilson@example.com', '2024-06-26 03:01:08', 66),
(32, 5, 'Enjoyed it ????', 13, 'david.wilson@example.com', '2024-06-26 03:02:35', 159),
(33, 5, 'Goood', 8, 'david.wilson@example.com', '2024-06-26 03:36:26', 171),
(34, 5, 'Quite good ', 11, 'david.wilson@example.com', '2024-06-26 03:37:30', 173),
(35, 3, 'It norm', 10, 'david.wilson@example.com', '2024-06-26 03:37:41', 172),
(36, 2, 'Not good as i expected ', 10, 'david.wilson@example.com', '2024-06-26 03:58:41', 175),
(37, 5, 'Love this flavor ', 6, 'david.wilson@example.com', '2024-06-26 03:58:50', 176),
(38, 4, 'Pretty simple but not too bad', 2, 'david.wilson@example.com', '2024-06-26 03:59:45', 174);

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
  `name` varchar(255) DEFAULT NULL,
  `token` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email_user`, `password`, `gender`, `phone`, `user_img`, `name`, `token`) VALUES
('david.wilson@example.com', '123', 'male', '9988776655', 'https://res.cloudinary.com/datlowashere/image/upload/v1716614542/rcoffee/employee/jsmoggcpoqbryoy1n3ii.png', 'David Wilson', 'eK2RL5UeSAqlZ8KcSzt42t:APA91bG5V4be7pnSyn51A-YFp9CXDRnd5pq_I9suC-9gqCmvFvBmextIxGyf6pF5qIHNClFM75RhjVaEIz9UopV5sBDFRfZmA1GOOX1SimAIdJJzqOxB5d58Bc9UiyYa1XUK8nHqqRul'),
('emily.davis@example.com', 'password123', 'female', '6677889900', 'https://baoxaydung.com.vn/stores/news_dataimages/vananh/022020/06/11/in_article/0813_image001.jpg', 'Emily Davis', NULL),
('jane.smith@example.com', '1123', 'female', '0987654321', 'https://images2.thanhnien.vn/Uploaded/ttt/images/Content/chan-dung/sao-quoc-te/2016_01_w1/Dong_Dai_Vy/b0cf68dab563cb87dc647de0de335d24.jpg', 'Jane Smith', 'eK2RL5UeSAqlZ8KcSzt42t:APA91bG5V4be7pnSyn51A-YFp9CXDRnd5pq_I9suC-9gqCmvFvBmextIxGyf6pF5qIHNClFM75RhjVaEIz9UopV5sBDFRfZmA1GOOX1SimAIdJJzqOxB5d58Bc9UiyYa1XUK8nHqqRul'),
('john.doe@example.com', '123', 'male', '1234567890', 'https://res.cloudinary.com/datlowashere/image/upload/v1716614542/rcoffee/employee/jsmoggcpoqbryoy1n3ii.png', 'Jonh Doe', NULL),
('michael.brown@example.com', '123', 'male', '1122334455', 'https://example.com/images/michael_brown.jpg', 'Michael Brown', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `verification_codes`
--

CREATE TABLE `verification_codes` (
  `id` int(11) NOT NULL,
  `email_user` varchar(255) NOT NULL,
  `code` varchar(6) NOT NULL,
  `expiration` bigint(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `verification_codes`
--

INSERT INTO `verification_codes` (`id`, `email_user`, `code`, `expiration`, `created_at`) VALUES
(1, 'datlowashere@gmail.com ', '3211EB', 1719439532669, '2024-06-26 22:00:32'),
(2, 'datlowashere@gmail.com ', '8FB4FB', 1719439586618, '2024-06-26 22:01:26'),
(3, 'datltpd05558@fpt.edu.vn', '0F269E', 1719439655030, '2024-06-26 22:02:35'),
(4, 'datlowashere@gmail.com', 'B5880C', 1719439750569, '2024-06-26 22:04:10'),
(5, 'datlowashere@gmail.com ', 'C55D73', 1719448063339, '2024-06-27 00:22:43'),
(6, 'datlowashere@gmail.com ', '9CCA2B', 1719448178563, '2024-06-27 00:24:38'),
(7, 'datlowashere@gmail.com ', '29313A', 1719448905809, '2024-06-27 00:36:45'),
(8, 'datlowashere@gmail.com ', 'A15FF1', 1719449025491, '2024-06-27 00:38:45'),
(9, 'datlowashere@gmail.com ', '1E6C45', 1719449075750, '2024-06-27 00:39:35'),
(10, 'datlowashere@gmail.com ', 'C371C3', 1719449326522, '2024-06-27 00:43:46'),
(11, 'datlo2208@gmail.com ', '749626', 1719449527842, '2024-06-27 00:47:07'),
(12, 'datlo2208@gmail.com ', '222591', 1719450411649, '2024-06-27 01:01:51'),
(13, 'jane.smith@example.com', '342188', 1719450516169, '2024-06-27 01:03:36'),
(14, 'jane.smith@example.com', '147876', 1719450564657, '2024-06-27 01:04:24'),
(15, 'jane.smith@example.com', '286862', 1719450596273, '2024-06-27 01:04:56'),
(16, 'jane.smith@example.com', '604977', 1719450616634, '2024-06-27 01:05:16'),
(17, 'jane.smith@example.com', '256353', 1719450789426, '2024-06-27 01:08:09'),
(18, 'jane.smith@example.com', '517801', 1719450831373, '2024-06-27 01:08:51'),
(19, 'jane.smith@example.com', '479215', 1719451005203, '2024-06-27 01:11:45'),
(20, 'jane.smith@example.com', '996201', 1719451033818, '2024-06-27 01:12:13'),
(21, 'datlowashere@gmail.com ', '694983', 1719451080241, '2024-06-27 01:13:00'),
(22, 'datlowashere@gmail.com ', '715110', 1719451219903, '2024-06-27 01:15:19'),
(23, 'david.wilson@example.com ', '766181', 1719451228358, '2024-06-27 01:15:28'),
(24, 'datlowashere@gmail.com ', '989400', 1719474212697, '2024-06-27 07:38:32'),
(25, 'datlowashere@gmail.com ', '944240', 1719474242041, '2024-06-27 07:39:02'),
(26, 'david.wilson@example.co', '800764', 1719475015764, '2024-06-27 07:51:55'),
(27, 'datlowashere@gmail.com', '437587', 1719475200957, '2024-06-27 07:55:00'),
(28, 'datlowashere@gmail.com', '465464', 1719475471399, '2024-06-27 07:59:31'),
(29, 'datlowashere@gmail.com', '845169', 1719476185412, '2024-06-27 08:14:25'),
(30, 'datlowashere@gmail.com', '618633', 1719476427686, '2024-06-27 08:18:27'),
(31, 'datlowashere@gmail.com', '155535', 1719476584498, '2024-06-27 08:21:04');

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
-- Indexes for table `cancel`
--
ALTER TABLE `cancel`
  ADD PRIMARY KEY (`cancel_id`),
  ADD KEY `order_id` (`order_id`);

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
-- Indexes for table `payment_detail`
--
ALTER TABLE `payment_detail`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `order_id` (`order_id`);

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
  ADD KEY `email_user` (`email_user`),
  ADD KEY `fk_rating_basket` (`basket_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email_user`);

--
-- Indexes for table `verification_codes`
--
ALTER TABLE `verification_codes`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `basket`
--
ALTER TABLE `basket`
  MODIFY `basket_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT for table `cancel`
--
ALTER TABLE `cancel`
  MODIFY `cancel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `favorite`
--
ALTER TABLE `favorite`
  MODIFY `favorite_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- AUTO_INCREMENT for table `payment_detail`
--
ALTER TABLE `payment_detail`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `rating_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `verification_codes`
--
ALTER TABLE `verification_codes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

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
-- Constraints for table `cancel`
--
ALTER TABLE `cancel`
  ADD CONSTRAINT `cancel_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE;

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
-- Constraints for table `payment_detail`
--
ALTER TABLE `payment_detail`
  ADD CONSTRAINT `payment_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `fk_rating_basket` FOREIGN KEY (`basket_id`) REFERENCES `basket` (`basket_id`),
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`email_user`) REFERENCES `users` (`email_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
