/*
O sistema deverá ter no mínimo as seguintes tabelas:
 - Filme
 - Ator
 - Cliente

Definições do negócio:

 - Um cliente pode alugar vários filmes
 - Um ator pode participar de vários filmes
 - Um filme possui uma categoria

O projeto consiste em entregar 3 comandos em diferentes pontos de vista, por exemplo:
 - Quais filmes cada cliente já alugou
 - Quais filmes cada ator já participou
 - Quais atores tem em um determinado filme
 - Quais os filmes de uma determinada categoria

*/
 -- CRIAÇÃO DE TABELAS
CREATE TABLE filme(
	id serial,
	nome char varying(60),
	ano integer,
	duracao integer,
	categoria char varying(30)
);

CREATE TABLE ator(
	id serial,
	nome char varying(30),
	cpf char varying(11)
);

CREATE TABLE cliente(
	id serial,
	nome char varying(30),
	cpf char varying(11)
);

CREATE TABLE ator_atuou(
	id_ator serial,
	id_filme serial,
	salario double precision
);

CREATE TABLE cliente_alugou(
	id_cliente serial,
	id_filme serial,
	inicio_aluguel date,
	entrega date
);

-- INSERÇÃO DE DADOS
INSERT INTO filme(nome, categoria, ano, duracao)
VALUES 
('Freddy X Jason','Terror',2003,98),
('Jurassic Park - Parque dos Dinossauros','Ficção',1993, 128),
('Jurassic Park 2 - O Mundo Perdido','Ficção',1997,129),
('Jurassic Park 3','Ficção',2001,94),
('Harry Potter e a Pedra Filosofal','Fantasia',2001,159),
('Harry Potter e a Câmara Secreta','Fantasia',2002,174),
('Harry Potter e o Prisioneiro de Askaban','Fantasia',2004, 142),
('Senhor dos Anéis, a Sociedade do Anel','Fantasia',2001,228),
('Senhor dos Anéis, as Duas Torres','Fantasia',2002, 223),
('Senhor dos Anéis, o Retorno do Rei','Fantasia',2003, 255),
('Piratas do Caribe: A Maldição do Pérola Negra','Ação',2003,143),
('Piratas do Caribe: O Baú da Morte','Ação',2006,151);

INSERT INTO ator(nome, cpf)
VALUES 
('Robert Englund','17556730000'),
('Sam Neill','18282963097'),
('Daniel Radcliffe','70940078090'),
('Elijah Wood','08491082093'),
('Johnny Depp','87368427028');

INSERT INTO cliente(nome, cpf)
VALUES 
('Raphael Rapozo','28253556071'),
('Luiz Luca','50860835081'),
('João Victor','75541685095'),
('Luís Filipe','07613647064'),
('Maicon','42493010019');

INSERT INTO ator_atuou(id_ator,id_filme,salario)
VALUES 
(1,1,10000),
(2,2,10000),
(2,3,15000),
(2,4,20000),
(3,5,5000),
(3,6,12000),
(3,7,18000),
(4,8,8000),
(4,9,11000),
(4,10,17000),
(5,11,16000),
(5,12,22000);

INSERT INTO cliente_alugou(id_cliente,id_filme,inicio_aluguel,entrega)
VALUES
(1,1,'2021-04-20','2021-04-22'),
(1,2,'2021-03-13','2021-03-15'),
(2,3,'2021-03-11','2021-03-14'),
(3,1,'2021-03-06','2021-03-11'),
(3,2,'2021-03-07','2021-03-11'),
(3,3,'2021-02-02','2021-02-11'),
(4,4,'2021-02-03','2021-02-06'),
(4,2,'2021-02-28','2021-03-02'),
(5,4,'2021-02-16','2021-02-18'),
(5,7,'2021-01-08','2021-03-10');

--CONSULTAS
-- Quais filmes cada cliente já alugou
SELECT 
filme.nome
FROM cliente_alugou
JOIN cliente ON cliente.id = cliente_alugou.id_cliente
JOIN filme ON filme.id = cliente_alugou.id_filme
WHERE cliente.nome = 'Luís Filipe';

--Quais filmes cada ator já participou
SELECT 
filme.nome
FROM ator_atuou
JOIN ator ON ator.id = ator_atuou.id_ator
JOIN filme ON filme.id = ator_atuou.id_filme
WHERE ator.nome = 'Johnny Depp';

--Quais atores tem em um determinado filme
SELECT 
ator.nome
FROM ator_atuou
JOIN ator ON ator.id = ator_atuou.id_ator
JOIN filme ON filme.id = ator_atuou.id_filme
WHERE filme.nome ILIKE '%harry%';

--Quais os filmes de uma determinada categoria
SELECT nome FROM filme
WHERE categoria ILIKE '%fantasia%';