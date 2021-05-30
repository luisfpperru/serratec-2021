DROP TABLE curso_feito;
DROP TABLE funcionario;
DROP TABLE curso;

CREATE TABLE public.funcionario
(
    cpf CHARACTER VARYING(11) PRIMARY KEY,
    nome text,
    salario double precision,
     id_empresa CHARACTER VARYING(5),
     id_setor CHARACTER VARYING(5),
	 id_cargo CHARACTER VARYING(5) 
);
ALTER TABLE public.funcionario  OWNER to postgres;

CREATE TABLE public.curso
(
    codigo CHARACTER VARYING(4) PRIMARY KEY,
    nome text,
    carga_horaria integer
);
ALTER TABLE public.curso  OWNER to postgres;

CREATE TABLE public.curso_feito
(
    id_funcionario CHARACTER VARYING(11),
    id_curso CHARACTER VARYING(4),
    data_conclusao date
);
ALTER TABLE public.curso_feito  OWNER to postgres;

INSERT INTO funcionario (cpf, nome, salario, id_empresa, id_setor, id_cargo)
VALUES
('1113567','Stephani',2000,01,02,01),
('1122264','Maicon',3000,01,03,05),
('1546222','Maria Regina',10000,02,01,03),
('2341999','Daniel',15000,03,01,03),
('4533871','Alice',12000,03,02,01),
('1234111','Mariana',5000,02,02,01);

INSERT INTO public.curso (codigo, nome, carga_horaria)
VALUES 
(0001,'Programação Delphi',60),
(0002,'Inglês Intermediário',30),
(0003,'Inglês Avançado',40),
(004,'Russo',30),
(005,'Programação Javascript',20);

INSERT INTO public.curso_feito (id_funcionario, id_curso, data_conclusao)
VALUES 
(1113567,004,'2020-01-01'),
(1113567,001,'2021-03-01'),
(1546222,002,'2021-03-01'),
(1234111,005,'2021-03-07');

SELECT 
funcionario.nome,
curso.nome,
curso_feito.data_conclusao
FROM curso_feito
JOIN funcionario ON funcionario.cpf = curso_feito.id_funcionario
JOIN curso ON curso.codigo = curso_feito.id_curso
WHERE curso_feito.data_conclusao BETWEEN '2020-01-01' AND '2020-12-31'
ORDER BY curso_feito.data_conclusao

SELECT * FROM funcionario
SELECT * FROM curso
SELECT * FROM curso_feito

ALTER TABLE curso_feito ADD COLUMN nota Integer;
UPDATE curso_feito SET nota = 70 WHERE id_funcionario = '1' AND id_curso = '4'
UPDATE curso_feito SET nota = 80 WHERE id_curso = '5'
ALTER TABLE curso_feito DROP COLUMN nota;
ALTER TABLE curso_feito ADD COLUMN id_funcionario Integer;
ALTER TABLE curso_feito ADD COLUMN id_curso Integer;
