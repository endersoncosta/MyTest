-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Dez-2019 às 02:21
-- Versão do servidor: 10.4.10-MariaDB
-- versão do PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mytest_tests`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `plan`
--

DROP TABLE IF EXISTS `plan`;
CREATE TABLE `plan` (
  `id` int(11) NOT NULL,
  `name` varchar(256) COLLATE utf8_bin NOT NULL,
  `params` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`params`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `plan`
--

INSERT INTO `plan` (`id`, `name`, `params`) VALUES
(1, 'test1575758344356', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(2, 'test1575758471346', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(3, 'test1575758584467', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(4, 'test1575758620171', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(5, 'test1575794970759', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(6, 'test1575794986957', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(7, 'test1575795129390', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(8, 'test1575795488393', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(9, 'test1575795500977', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(10, 'test1575795590780', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(11, 'test1575795933493', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(12, 'test1575796023296', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(13, 'test1575796248780', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(14, 'test1575796261330', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(15, 'test1575797719163', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(16, 'test1575797843686', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(17, 'test1575797896113', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(18, 'test1575798027186', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(19, 'test1575798130816', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(20, 'test1575799044756', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(21, 'test1575799086566', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(22, 'test1575799187332', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(23, 'test1575812850536', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(24, 'test1575812948644', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(25, 'test1575813028989', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(26, 'test1575851388863', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(27, 'test1575852426574', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(28, 'test1575852727766', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(29, 'test1575852810002', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(30, 'test1575852847937', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tariff`
--

DROP TABLE IF EXISTS `tariff`;
CREATE TABLE `tariff` (
  `id` int(11) NOT NULL,
  `origin` int(11) NOT NULL,
  `destiny` int(11) NOT NULL,
  `value` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `tariff`
--

INSERT INTO `tariff` (`id`, `origin`, `destiny`, `value`) VALUES
(1, 11, 16, 1.9),
(2, 16, 11, 2.9),
(3, 11, 17, 1.7),
(4, 17, 11, 2.7),
(5, 11, 18, 0.9),
(6, 18, 11, 1.9);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `plan`
--
ALTER TABLE `plan`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tariff`
--
ALTER TABLE `tariff`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_od` (`origin`,`destiny`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `plan`
--
ALTER TABLE `plan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de tabela `tariff`
--
ALTER TABLE `tariff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
