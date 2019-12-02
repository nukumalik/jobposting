-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 02, 2019 at 12:08 PM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restful_jobposting`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(5) NOT NULL,
  `name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Teknologi Informasi'),
(2, 'Farmasi'),
(3, 'Keuangan & Perbankan'),
(4, 'Retail'),
(5, 'Nuku Malik'),
(6, 'Nuku Malik'),
(7, 'Nuku Malik'),
(8, 'Nuku Malik'),
(9, 'Nuku Malik'),
(10, 'Nuku Malik'),
(11, 'Nuku Malik'),
(12, 'Nuku Malik'),
(13, 'Nuku Malik'),
(14, 'Nuku Malik'),
(15, 'Nuku Malik'),
(16, 'mumummumumu'),
(17, 'asdasdasd'),
(18, 'blasdiuandiybeib'),
(19, 'asd');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` varchar(50) NOT NULL,
  `id_user` varchar(255) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `logo` text,
  `location` varchar(250) DEFAULT NULL,
  `description` text,
  `slug` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `id_user`, `name`, `logo`, `location`, `description`, `slug`) VALUES
('8a255e95-807b-4cf3-a412-035abcb62cac', '', 'Google', 'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c51f.png', 'Cirebon', 'Google LLC adalah sebuah perusahaan multinasional Amerika Serikat yang berkekhususan pada jasa dan produk Internet. Produk-produk tersebut meliputi teknologi pencarian, komputasi web, perangkat lunak, dan periklanan daring. Sebagian besar labanya berasal dari AdWords.', ''),
('971b8ec9-ad3c-4fa8-82d2-e2154342b401', NULL, 'Arkademy', 'https://cdn-images-1.medium.com/max/1200/1*7ugSMISUo8vYf9ILG6VmuQ.png', 'Jakarta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non dui pretium, egestas sapien nec, aliquam libero. Morbi est lectus, auctor et consequat at, hendrerit sed enim. Nam ultricies, leo sed dictum posuere, erat tellus ultricies tortor, sit amet porttitor erat magna a mi. Duis a scelerisque nibh. Curabitur efficitur consequat metus. Vestibulum vel tellus molestie, pulvinar sem sagittis, aliquam metus. Praesent consectetur quam eu elit posuere maximus. Quisque vitae suscipit felis, quis imperdiet velit. Praesent fermentum, nulla nec laoreet aliquam, lacus tortor laoreet nibh, eget feugiat tellus lacus id libero. Curabitur in sapien vitae sem auctor blandit. Aenean in tellus ultrices, accumsan lacus et, malesuada urna.\n\nPellentesque molestie posuere velit, ac dignissim velit cursus at. Cras nec elit pharetra, ullamcorper erat eu, suscipit urna. Phasellus eget quam erat. Nam consectetur, magna ut accumsan auctor, ex sem viverra turpis, vel volutpat est tellus vitae felis. Pellentesque sit amet sollicitudin nulla. Nunc a eleifend enim. Cras blandit pharetra pellentesque. Vivamus ornare eleifend lectus, non vehicula lectus fermentum non. Duis sit amet dolor quis mi efficitur iaculis id ac metus.\n\nNam velit justo, viverra dapibus velit sit amet, tristique iaculis arcu. Quisque eget justo suscipit nisi volutpat volutpat. Etiam porta velit libero, sit amet feugiat sapien hendrerit at. Nullam in egestas nulla. Sed pretium, metus sit amet aliquet consequat, lacus neque tincidunt sem, at bibendum turpis est in sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla non fermentum felis. Nulla et dapibus nisl. Donec at semper tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce maximus pretium pretium. Quisque tempor ultrices egestas. Duis quis velit eu elit vestibulum sodales ac ut ligula. Donec blandit orci at mauris tincidunt laoreet. Donec vel accumsan arcu.\n\nEtiam eget ultricies erat. Nulla ultrices venenatis risus sit amet mollis. Nulla non lacinia quam. Morbi gravida risus et mauris porta, in egestas elit pretium. Phasellus justo purus, consequat vel vehicula id, interdum sit amet metus. Phasellus tristique augue velit, viverra aliquet nunc convallis sed. Quisque vel eleifend ligula, non hendrerit purus. Phasellus sit amet massa venenatis, semper odio interdum, pharetra elit. Sed at arcu non neque lobortis luctus. Sed quis eleifend est. Cras vehicula felis quis sodales pellentesque. Aliquam rhoncus erat orci, eget sodales odio auctor vitae.\n\nNam et ligula dignissim, auctor leo ut, ornare nulla. Sed malesuada purus eu mi lacinia sagittis. Nunc sodales dapibus faucibus. Morbi nec ullamcorper est. Sed tortor tellus, porta sed laoreet in, feugiat fringilla massa. Proin id quam sit amet libero vehicula ultricies. Quisque a ultrices arcu, vitae pretium ipsum. Morbi arcu nulla, vestibulum eget lectus ut, placerat elementum orci. Nunc sed vehicula justo. Donec iaculis dui id eros egestas, at euismod libero luctus. Fusce tristique iaculis lectus, sed maximus est ultricies at. Nulla facilisi. Fusce leo eros, varius vel rhoncus ut, auctor non lacus. Sed id risus consectetur, condimentum enim quis, finibus nulla. Cras sit amet dictum nunc.', ''),
('b8399a49-c061-463f-ba9d-ed834c679d5e', '', 'Hypermart', 'http://www.hypermart.co.id/wp-content/uploads/2018/02/hypermart-1.png', 'Surabaya', 'Hypermart adalah jaringan hipermarket yang memiliki banyak cabang di Indonesia. Selain department store yang menjual produk sandang seperti makanan, Hypermart juga memiliki supermarket atau pasar swalayan yang menjual kebutuhan sandang, barang kebutuhan hidup dan sehari-hari.', ''),
('cbaaa2df-c0d7-49e1-a804-1d91b2ef759d', '', 'Microsoft', 'http://pngimg.com/uploads/microsoft/microsoft_PNG6.png', 'Jakarta', 'Microsoft Corporation adalah sebuah perusahaan multinasional Amerika Serikat yang berkantor pusat di Redmond, Washington, Amerika Serikat yang mengembangkan, membuat, memberi lisensi, dan mendukung berbagai produk dan jasa terkait dengan komputer.', ''),
('ebe832b6-6910-453c-9ac7-4ac198d4b4f2', NULL, 'Joga', 'asdasdsada', 'Jogjakarta', 'asdasdsadasdsad', '');

-- --------------------------------------------------------

--
-- Table structure for table `educations`
--

CREATE TABLE `educations` (
  `id` varchar(255) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `university` varchar(100) NOT NULL,
  `major` varchar(100) NOT NULL,
  `gpa` float NOT NULL,
  `start` year(4) NOT NULL,
  `end` year(4) NOT NULL,
  `now` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `experiences`
--

CREATE TABLE `experiences` (
  `id` varchar(255) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `company` varchar(100) NOT NULL,
  `position` varchar(100) NOT NULL,
  `start` year(4) NOT NULL,
  `end` year(4) NOT NULL,
  `now` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` text,
  `id_category` int(5) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  `location` varchar(250) DEFAULT NULL,
  `id_company` varchar(50) DEFAULT NULL,
  `slug` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `name`, `description`, `id_category`, `salary`, `location`, `id_company`, `slug`, `created_at`, `updated_at`) VALUES
('372a27ba-3978-4d01-8d66-4ceb554018d3', 'Back End Programmer', 'Role: Programmer\n\nKualifikasi Anda harus memenuhi:\n- Minimal lulusan S1\n- Minimal pengalaman kerja yang sejenis 3 tahun\n- Skill yang dibutuhkan: .Net, C# Language, Rest, XML, SQL Server Query, TFS/Gitlab\n- Pengetahuan tentang SDLC (Software Development LifeCycle) atau Devops Methodology, \n- Memiliki jiwa sebagai programmer aplikasi\n- Fokus dalam target pekerjaan dan mampu menghadapi beban dan target pekerjaan yang tinggi\n- Kemampuan akan menejemen waktu dan berorganisasi\n- Keinginan untuk berkolaborasi dan bekerja dalam team', 1, 10000000, 'Bandung', '8a255e95-807b-4cf3-a412-035abcb62cac', '', '2019-10-30 10:01:14', '2019-11-04 17:56:19'),
('3fe73e2a-fbfb-4daf-9637-789ba289a3ed', 'Front End Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis vitae nunc et convallis. Duis mattis eu lacus quis rutrum. Phasellus ac quam leo. Nulla facilisi. Morbi rhoncus arcu nec dui suscipit, id molestie nunc consectetur. Donec ornare dolor nibh, id efficitur velit aliquam nec. Aliquam erat volutpat. Sed nisl felis, imperdiet id justo quis, rhoncus dignissim ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer dictum vitae sem vel vehicula. Suspendisse risus erat, pulvinar interdum facilisis non, varius et ante. In hendrerit lacinia magna, vitae laoreet nisi hendrerit vel.\n\nDuis eu pellentesque nisl. Sed nec tortor fermentum, sollicitudin dolor in, condimentum neque. Suspendisse potenti. Fusce ac dictum nunc. Mauris sit amet lectus luctus nunc auctor rutrum. Ut tempor vitae libero vitae rutrum. Nulla hendrerit sapien id eleifend porta. Pellentesque vulputate ante a orci vulputate feugiat. Sed nec fringilla mi, bibendum pretium lorem. Suspendisse vehicula congue lectus, imperdiet viverra nulla fringilla quis. Nam accumsan lorem metus, a laoreet enim cursus sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ac nisi velit. Vivamus elementum mollis felis, ut fringilla metus.\n\nAliquam purus justo, volutpat eget dui et, efficitur fringilla risus. Duis massa mi, ultricies vel massa varius, luctus vehicula risus. Aenean volutpat facilisis felis non pharetra. Proin consequat, nulla ut pulvinar sollicitudin, elit nulla bibendum nulla, ut vehicula metus leo ac diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum feugiat facilisis scelerisque. Quisque consectetur eget ligula at auctor. Aliquam ac eleifend sem. Curabitur vel sollicitudin lectus, eget convallis lectus. Maecenas quis mollis leo, quis imperdiet magna. Mauris nisl lacus, dictum at posuere tristique, tincidunt imperdiet lacus.\n\nMorbi sed euismod ligula. Aliquam sed dui vel tellus pretium venenatis at vitae lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus felis, vulputate a accumsan et, mattis ut metus. Morbi euismod elit est, ut mollis orci mattis a. In efficitur nisi sit amet lacinia dignissim. Pellentesque consectetur convallis neque, sit amet viverra libero ullamcorper pellentesque. In maximus imperdiet lectus nec efficitur. Pellentesque sed ullamcorper lectus. Phasellus placerat elit eu massa mattis, sed egestas nulla eleifend. Vivamus lectus lectus, eleifend ultrices finibus nec, interdum sed urna.\n\nPellentesque eu vulputate mauris. Quisque id lorem varius, ultricies nibh nec, dapibus diam. In posuere non orci in tincidunt. Phasellus in blandit ligula, ut blandit ipsum. Curabitur ac nisl porta, hendrerit arcu vel, ornare lacus. Curabitur vitae pulvinar est. Quisque nec leo in nulla lacinia rutrum nec id dolor. Nullam dapibus arcu ipsum, at venenatis justo ultricies quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam metus nunc, bibendum ut tincidunt in, pulvinar vel enim. Suspendisse tempus maximus mauris quis ultrices. Nunc dictum dui eget lorem lacinia congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut pulvinar elit eu aliquet venenatis.', 1, 12000000, 'Jakarta', 'cbaaa2df-c0d7-49e1-a804-1d91b2ef759d', '', '2019-11-08 01:45:50', '2019-11-08 01:45:50'),
('4e4b520a-e9d9-480f-9b97-40fd2792a9a6', 'DevOps Newbie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis vitae nunc et convallis. Duis mattis eu lacus quis rutrum. Phasellus ac quam leo. Nulla facilisi. Morbi rhoncus arcu nec dui suscipit, id molestie nunc consectetur. Donec ornare dolor nibh, id efficitur velit aliquam nec. Aliquam erat volutpat. Sed nisl felis, imperdiet id justo quis, rhoncus dignissim ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer dictum vitae sem vel vehicula. Suspendisse risus erat, pulvinar interdum facilisis non, varius et ante. In hendrerit lacinia magna, vitae laoreet nisi hendrerit vel.\n\nDuis eu pellentesque nisl. Sed nec tortor fermentum, sollicitudin dolor in, condimentum neque. Suspendisse potenti. Fusce ac dictum nunc. Mauris sit amet lectus luctus nunc auctor rutrum. Ut tempor vitae libero vitae rutrum. Nulla hendrerit sapien id eleifend porta. Pellentesque vulputate ante a orci vulputate feugiat. Sed nec fringilla mi, bibendum pretium lorem. Suspendisse vehicula congue lectus, imperdiet viverra nulla fringilla quis. Nam accumsan lorem metus, a laoreet enim cursus sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ac nisi velit. Vivamus elementum mollis felis, ut fringilla metus.\n\nAliquam purus justo, volutpat eget dui et, efficitur fringilla risus. Duis massa mi, ultricies vel massa varius, luctus vehicula risus. Aenean volutpat facilisis felis non pharetra. Proin consequat, nulla ut pulvinar sollicitudin, elit nulla bibendum nulla, ut vehicula metus leo ac diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum feugiat facilisis scelerisque. Quisque consectetur eget ligula at auctor. Aliquam ac eleifend sem. Curabitur vel sollicitudin lectus, eget convallis lectus. Maecenas quis mollis leo, quis imperdiet magna. Mauris nisl lacus, dictum at posuere tristique, tincidunt imperdiet lacus.\n\nMorbi sed euismod ligula. Aliquam sed dui vel tellus pretium venenatis at vitae lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus felis, vulputate a accumsan et, mattis ut metus. Morbi euismod elit est, ut mollis orci mattis a. In efficitur nisi sit amet lacinia dignissim. Pellentesque consectetur convallis neque, sit amet viverra libero ullamcorper pellentesque. In maximus imperdiet lectus nec efficitur. Pellentesque sed ullamcorper lectus. Phasellus placerat elit eu massa mattis, sed egestas nulla eleifend. Vivamus lectus lectus, eleifend ultrices finibus nec, interdum sed urna.\n\nPellentesque eu vulputate mauris. Quisque id lorem varius, ultricies nibh nec, dapibus diam. In posuere non orci in tincidunt. Phasellus in blandit ligula, ut blandit ipsum. Curabitur ac nisl porta, hendrerit arcu vel, ornare lacus. Curabitur vitae pulvinar est. Quisque nec leo in nulla lacinia rutrum nec id dolor. Nullam dapibus arcu ipsum, at venenatis justo ultricies quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam metus nunc, bibendum ut tincidunt in, pulvinar vel enim. Suspendisse tempus maximus mauris quis ultrices. Nunc dictum dui eget lorem lacinia congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut pulvinar elit eu aliquet venenatis.', 3, 9000000, 'Bandung', '971b8ec9-ad3c-4fa8-82d2-e2154342b401', '', '2019-11-08 01:54:06', '2019-11-08 04:40:55'),
('660fd5d6-f013-4051-ba4a-25e734bedbd3', 'Manager Produksi', 'asdsadasdasdasd', 4, 10000000, 'Bandung', 'b8399a49-c061-463f-ba9d-ed834c679d5e', '', '2019-11-08 13:54:22', '2019-11-08 13:54:22'),
('afc5b621-dc0a-48dc-8e30-1864eced192f', 'Back End Programmer', 'Role: Programmer\n\nKualifikasi Anda harus memenuhi:\n- Minimal lulusan S1\n- Minimal pengalaman kerja yang sejenis 3 tahun\n- Skill yang dibutuhkan: .Net, C# Language, Rest, XML, SQL Server Query, TFS/Gitlab\n- Pengetahuan tentang SDLC (Software Development LifeCycle) atau Devops Methodology, \n- Memiliki jiwa sebagai programmer aplikasi\n- Fokus dalam target pekerjaan dan mampu menghadapi beban dan target pekerjaan yang tinggi\n- Kemampuan akan menejemen waktu dan berorganisasi\n- Keinginan untuk berkolaborasi dan bekerja dalam team', 1, 10000000, 'Bandung', 'cbaaa2df-c0d7-49e1-a804-1d91b2ef759d', '', '2019-10-30 10:00:48', '2019-10-30 10:00:48'),
('b58ae0b0-7bbb-4c56-b9a4-47f44756125e', 'Manager', 'Job Responsibility :\n- Responsible for planning, execution and monitoring promotion activities\n- Create and implement marketing strategies and marketing research\n- Create and development branding strategy ATL and BTL\n- Product development on within branding scope through market research\n- Planning a marketing strategy by taking into account market trends and company resources\n- Planing a market opportunity analysis\n- Planing anticipatory actions in face of decline in orders\n- Plan the development of marketing networks\n\nRequirements :\n- Bachelor degree in any major from repuntable university\n- Min 5 years experience in same position, especially for food industry / FMCG / Beverage\n- Have knowledge and can implement about branding strategy ATL and BTL\n- Able to do marketing research\n- Strong ability to develop marketing strategy\n- Execellent comunication\n- Execution skill mind set with good planning\n- Initiave, critical thinker, result oriented, process driven and systematic\n- Willing to travel\n- Fluent in English written and conversation', 3, 8000000, 'Cirebon', 'b8399a49-c061-463f-ba9d-ed834c679d5e', '', '2019-10-30 09:55:59', '2019-11-14 23:10:22');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` varchar(255) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `level` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(50) NOT NULL,
  `role` varchar(4) NOT NULL DEFAULT 'user',
  `name` varchar(50) NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `born` date DEFAULT NULL,
  `gender` varchar(1) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `name`, `username`, `born`, `gender`, `address`, `avatar`, `email`, `password`) VALUES
('0367ce17-0476-4413-8858-888910212677', '', 'Nuku Malik Sanjaya Kusuma', 'nukumalik', '1996-07-07', 'l', 'Majalengka', '', 'nukumalik@gmail.com', '$2a$10$jO7mJmSR.gUuY6Xe3Vhi6eJvERD.q2sOdzLKXbkM41gxlrLA/9ici'),
('0edf0656-c7e7-40b3-8470-6dd3dd84d166', 'user', 'Nada Ayu Wardani', 'nada_ayu', '2019-11-01', 'p', 'Cirebon', NULL, 'nada@gmail.com', '$2a$10$novajbErZWsfHH8kEIyz9u.0NA68f0VU77zR93jDCWTJ9KZXz/jXW'),
('0f0209c9-b644-4b1c-9b2b-47da2739ce19', 'user', 'Zulkifli', 'zulkifli', '2019-11-01', 'l', 'Jonggol', NULL, 'zulkifli@gmail.com', '$2a$10$Htk6FblQeUK81nD2bCKYYuV0jZ.HDFxF2/JJvEk8UnWrh4x3dW1X2'),
('278f08e8-5779-4c1d-960e-04febc87ef9a', '', 'John Doe', 'john_doe', '1996-07-07', 'l', 'Jakarta', '', 'johndoe@gmail.com', '$2a$10$vlCYB0Gf.Y0WlUpTf8H3.Oexmo10oH4dCa29IvfuqJaQT.vr.IQlG'),
('57c61ae7-84a3-4ec3-b3af-ff10936400c7', 'user', 'Muhammad Fathul Hakim', 'hakim', '2019-10-01', 'l', 'bogor', NULL, 'hakim@gmail.com', '$2a$10$lSjBlFIZ5Qv5vAHJZ.GMvOGxQKrzYXAA6Iuvj8msF.wfxddoz9KSy'),
('5906afc7-4784-4a01-9af4-dea90c51cd42', 'user', 'Jaja Miharja', NULL, NULL, NULL, NULL, NULL, 'jajamiharja@gmail.com', '$2a$10$QrUyDyiW3ZO2a.024D4KOurxk2rwMWfbi4f2vHWpVJO2i5YIyHe2S'),
('62d9ae07-abe2-4c4a-bb1c-a96d49ec628f', 'user', 'jajan miharja', NULL, NULL, NULL, NULL, NULL, 'jajamiharja26@gmail.com', '$2a$10$j.RXdLgsnP82npeS9E8oVOD0.CDtptiTeIsJgypY7iQVUf750WDKO'),
('ce34710c-9912-4f2a-b985-a4a780305fdd', 'user', 'Maman Abdurahman', 'maman', '2019-11-01', '', 'Majalengka', NULL, 'maman@gmail.com', '$2a$10$LXsOULM2qz/ffU3JbFdEeucuixrt0xIhIcg8cP.ogL3yXmaN735bu'),
('fc21233d-5b82-4851-a956-dbc10204cf9c', 'user', 'Aura Putri Islami', 'auraputri', '2019-11-07', 'p', 'Gorontalo', NULL, 'aura@gmail.com', '$2a$10$AItUeahf5Kl7Mrbri1j34.VDH46BPlOAPjWYOUypFq67RcqnrEZvS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `educations`
--
ALTER TABLE `educations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experiences`
--
ALTER TABLE `experiences`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
