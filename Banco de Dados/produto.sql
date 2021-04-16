DROP TABLE public.produto;
CREATE TABLE public.produto
(
    codigo character varying(5) NOT NULL,
    nome character varying(100) NOT NULL,
    descricao text,
    valor double precision,
	percentual_desconto double precision,
    categoria character varying(30) NOT NULL,
    CONSTRAINT produto_codigo_pkey PRIMARY KEY (codigo)
);
ALTER TABLE public.produto OWNER to postgres;

INSERT INTO produto (codigo, nome, valor, percentual_desconto, categoria)
 VALUES 
   ('AF56V', 'Geladeira Brastemp', 2220.90, 0.1, 'Eletro'),
   ('H5G56', 'Fogão Electrolux', 1605.20, 0.25,'Eletro'),
   ('J5G58', 'Cama Queen Size Ortobom', 1800.07, 0.30, 'Casa e Jardim'),
   ('U7445', 'Playstation 5', 7800.03, 0.15,'Entretenimento'),
   ('T9HJu', 'Playstation 5', 2800.03, 0.12,'Entretenimento');
   
SELECT 
  nome, 
  valor, 
  percentual_desconto,  
  (valor*(1 - percentual_desconto)) AS valor_final
FROM produto 
WHERE valor IS NOT NULL
ORDER BY percentual_desconto DESC