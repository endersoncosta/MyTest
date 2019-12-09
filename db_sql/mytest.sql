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
-- Banco de dados: `mytest`
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
(1, 'FaleMais 30', '{\"quantity\":30,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(2, 'FaleMais 60', '{\"quantity\":60,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}'),
(3, 'FaleMais 120', '{\"quantity\":120,\"promotionalValueInPercent\":0,\"afterPromotionValueInPercent\":110}');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tariff`
--
ALTER TABLE `tariff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
