import model.cliente.Cliente;
import model.cliente.Endereco;
import model.empresa.Empresa;
import model.pedido.Pedido;
import model.pedido.FormaDePagamento;
import model.produto.Produto;
import model.produto.Categoria;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.Date;
import util.Utils;

public class App{
    public static void main(String[] args) throws Exception  {

        System.out.println("*************************************************************************");
        System.out.println("********************** SERRATEC LOJA VIRTUAL ****************************");
        System.out.println("*************************************************************************");

        // Base de dados

        var endereco1 = new Endereco("25970-570","torta",53,"Lugar Nenhum","Petrópolis","Rio de Janeiro","Próximo a Barraca de seu Zé");
        var endereco2 = new Endereco("54412-837","Principal",3033,"Boa Vista","São Gonçalo do Amarante","Rio Grande do Norte","Galpão 5");
        var endereco3 = new Endereco("58825-354","São Paulo",5292,"Planalto","Camaçari","Bahia","Terreo 1");
        var endereco4 = new Endereco("78456-759","Tiradentes",1651,"Centro","Ariquemes","Rondônia","Bloco 1");
        var endereco5 = new Endereco("65993-257","Quatorze",3423,"Boa Vista","Ariquemes","Rondônia","Terreo 10");
        var endereco6 = new Endereco("31936-766","Maranhão",6323,"Boa Vista","Serra","Espírito Santo","Cobertura 4");

        var enderecoEmpresa = new Endereco("28895-383","Cachoeira de Macacu",892,"Recreio","Rio das Ostras","","Próximo a soveteria Bombom Gelado");

        var cliente1 = new Cliente("Fulano da Silva","fulano@gmail.com","(31) 62123-6589","802.602.167-39",endereco1);
        var cliente2 = new Cliente("Cicrano da Silva","cicrano@gmail.com","(50) 36850-5407","613.175.077-70",endereco1);
        var cliente3 = new Cliente("Beltrano Amaral","beltrano@gmail.com","(69) 34441-3808","192.754.251-08",endereco2);
        var cliente4 = new Cliente("Mariana Amaral","mariamaral@gmail.com","(88) 19859-1267","10.140.162-15",endereco2);
        var cliente5 = new Cliente("José Luiz Couto","josecouto@gmail.com","(88) 14242-9687","166.318.607-33",endereco3);
        var cliente6 = new Cliente("Michel Baía Sardinha","michelsardinha@gmail.com","(84) 60360-0088","658.165.875-87",endereco4);
        var cliente7 = new Cliente("Lavinia Alcântara Palos","laviniapalos@hotmail.com","(70) 36554-3680","415.566.044-08",endereco5);
        var cliente8 = new Cliente("Aléxis Moreira Quintana","alexisquintana@hotmail.com","(15) 22790-8190","483.167.079-00",endereco6);
        
        var produtoA = new Produto("Microfone Gamer HyperX QuadCast, LED, Preto",Categoria.PROMOCAO,1,999.88,83.00);
        var produtoB = new Produto("Mouse Gamer HyperX Pulsefire Raid RGB 16000 DPI",Categoria.PROMOCAO,2,211.65,17.64);
        var produtoC = new Produto("Processador Intel Core i7-11700K 11ª Geração",Categoria.PROMOCAO,1,3294.00,274.50);
        var produtoD = new Produto("Placa de Vídeo Gigabyte NVIDIA GeForce GTX 1650 ",Categoria.IMPORTADOS,3,4117.53,343.13);
        var produtoE = new Produto("Console Microsoft Xbox Series S, 512GB, Branco",Categoria.IMPORTADOS,1,2799.90,0);
        var produtoF = new Produto("Console Sony PlayStation 4 Mega Pack 15, 1TB",Categoria.IMPORTADOS,2,2799.89,233.32);
        var produtoG = new Produto("Monitor Gamer LED Asus TUF Gaming 27´, Full HD",Categoria.NACIONAIS,4,1888.78,157.40);
        var produtoH = new Produto("Smartphone Samsung Galaxy S21, 256GB + 8GB RAM",Categoria.FRETEGRATIS,2,6399.00,0.00);
        var produtoI = new Produto("Cadeira Gamer ThunderX3 EC1 Black/Red",Categoria.NACIONAIS,5,988.78,82.40);
        var produtoJ = new Produto("Notebook Gamer Aspire Nitro, Intel Core I5 ",Categoria.NACIONAIS,3,5299.00,0.00);
        
        var pedido1 = new Pedido(cliente1,60.00,0.00,FormaDePagamento.CREDITO); 
        pedido1.setData(Utils.ConverteParaData("12/01/2021"));
        var pedido2 = new Pedido(cliente2,80.00,20.00,FormaDePagamento.DEBITO); 
        pedido2.setData(Utils.ConverteParaData("14/02/2021"));
        var pedido3 = new Pedido(cliente3,0.00,30.00,FormaDePagamento.PIX); 
        pedido3.setData(Utils.ConverteParaData("23/03/2021"));
        var pedido4 = new Pedido(cliente4,0.00,50.00,FormaDePagamento.PIX); 
        pedido4.setData(Utils.ConverteParaData("24/03/2021"));
        var pedido5 = new Pedido(cliente5,0.00,40.00,FormaDePagamento.BOLETO);
        pedido5.setData(Utils.ConverteParaData("03/04/2021"));
        var pedido6 = new Pedido(cliente6,0.00,40.00,FormaDePagamento.PICPAY); 
        pedido6.setData(Utils.ConverteParaData("04/04/2021")); 
        var pedido7 = new Pedido(cliente5,60.00,0.00,FormaDePagamento.CREDITO); 
        pedido7.setData(Utils.ConverteParaData("12/04/2021"));
        var pedido8 = new Pedido(cliente7,80.00,20.00,FormaDePagamento.DEBITO); 
        pedido8.setData(Utils.ConverteParaData("13/04/2021"));
        var pedido9 = new Pedido(cliente8,0.00,30.00,FormaDePagamento.PIX); 
        pedido9.setData(Utils.ConverteParaData("21/04/2021"));
        var pedido10 = new Pedido(cliente1,0.00,50.00,FormaDePagamento.PIX); 
        pedido10.setData(Utils.ConverteParaData("25/04/2021"));
        var pedido11 = new Pedido(cliente2,0.00,40.00,FormaDePagamento.BOLETO);
        pedido11.setData(Utils.ConverteParaData("03/05/2021"));
        var pedido12 = new Pedido(cliente3,0.00,40.00,FormaDePagamento.PICPAY); 
        pedido12.setData(Utils.ConverteParaData("04/05/2021")); 
        var pedido13 = new Pedido(cliente5,0.00,50.00,FormaDePagamento.PIX); 
        pedido13.setData(Utils.ConverteParaData("05/05/2021"));
        var pedido14 = new Pedido(cliente5,0.00,40.00,FormaDePagamento.BOLETO);
        pedido14.setData(Utils.ConverteParaData("13/05/2021"));
        var pedido15 = new Pedido(cliente6,0.00,40.00,FormaDePagamento.PICPAY); 
        pedido15.setData(Utils.ConverteParaData("15/05/2021")); 

        pedido1.AdicionarProduto(produtoA);
        pedido1.AdicionarProduto(produtoB);

        pedido2.AdicionarProduto(produtoA);
        pedido2.AdicionarProduto(produtoB);
        pedido2.AdicionarProduto(produtoC);

        pedido3.AdicionarProduto(produtoC);
        pedido3.AdicionarProduto(produtoD);

        pedido4.AdicionarProduto(produtoA);
        pedido4.AdicionarProduto(produtoG);
        pedido4.AdicionarProduto(produtoD);

        pedido5.AdicionarProduto(produtoD);
        pedido5.AdicionarProduto(produtoB);

        pedido6.AdicionarProduto(produtoA);
        pedido6.AdicionarProduto(produtoD);

        pedido7.AdicionarProduto(produtoH);
        pedido7.AdicionarProduto(produtoD);
        pedido7.AdicionarProduto(produtoJ);
        pedido7.AdicionarProduto(produtoA);

        pedido8.AdicionarProduto(produtoI);
        pedido8.AdicionarProduto(produtoB);
        pedido8.AdicionarProduto(produtoJ);
        pedido8.AdicionarProduto(produtoA);

        pedido9.AdicionarProduto(produtoH);
        pedido9.AdicionarProduto(produtoC);
        pedido9.AdicionarProduto(produtoF);
        pedido9.AdicionarProduto(produtoB);

        pedido10.AdicionarProduto(produtoH);
        pedido10.AdicionarProduto(produtoD);
        pedido10.AdicionarProduto(produtoJ);
        pedido10.AdicionarProduto(produtoA);

        pedido11.AdicionarProduto(produtoE);
        pedido11.AdicionarProduto(produtoI);
        pedido11.AdicionarProduto(produtoJ);
        pedido11.AdicionarProduto(produtoA);

        pedido12.AdicionarProduto(produtoA);
        pedido12.AdicionarProduto(produtoF);
        pedido12.AdicionarProduto(produtoG);
        pedido12.AdicionarProduto(produtoJ);

        pedido13.AdicionarProduto(produtoC);
        pedido13.AdicionarProduto(produtoB);
        pedido13.AdicionarProduto(produtoI);
        pedido13.AdicionarProduto(produtoA);

        pedido14.AdicionarProduto(produtoE);
        pedido14.AdicionarProduto(produtoJ);
        pedido14.AdicionarProduto(produtoG);
        pedido14.AdicionarProduto(produtoF);

        pedido15.AdicionarProduto(produtoE);
        pedido15.AdicionarProduto(produtoF);
        pedido15.AdicionarProduto(produtoG);
        pedido15.AdicionarProduto(produtoH);

        var empresa = new Empresa("Serratec Loja Virtual E-commerce",enderecoEmpresa);
        empresa.AdicionarPedido(pedido1);
        empresa.AdicionarPedido(pedido2);
        empresa.AdicionarPedido(pedido3);
        empresa.AdicionarPedido(pedido4);
        empresa.AdicionarPedido(pedido5);
        empresa.AdicionarPedido(pedido6);
        empresa.AdicionarPedido(pedido7);
        empresa.AdicionarPedido(pedido8);
        empresa.AdicionarPedido(pedido9);
        empresa.AdicionarPedido(pedido10);
        empresa.AdicionarPedido(pedido11);
        empresa.AdicionarPedido(pedido12);
        empresa.AdicionarPedido(pedido13);
        empresa.AdicionarPedido(pedido14);
        empresa.AdicionarPedido(pedido15);

        int opcao = 0;
        Scanner ler = new Scanner(System.in);
        do{
            System.out.println("Digite uma opção para prosseguir:");
            System.out.println("_________________________________________________________________");
            System.out.println(" (1) Valor total faturado");
            System.out.println(" (2) Valor faturado num periodo.");
            System.out.println(" (3) Métodos de pagamento mais utilizados");
            System.out.println(" (4) Valores dos métodos de pagamento");
            System.out.println(" (5) Gerar relatório de um pedido");
            System.out.println(" (0) Sair");
            System.out.println("_________________________________________________________________");
            opcao = ler.nextInt();

            // 1) A empresa deve ter um método que retorne o valor total faturado com base nos pedidos.
            if (opcao == 1){
                System.out.println("_________________________________________________________________");
                System.out.printf("\n O valor total faturado pela empresa %s é: R$ %.2f \n",empresa.getNome(),empresa.CalcularValorFaturado());
                System.out.println("_________________________________________________________________");
            }

            // 2) A empresa deve ter um método que retorne o valor faturado por período, inicial e final. 
            else if (opcao == 2){
                System.out.println("_________________________________________________________________");
                System.out.println("Informe a data inicial do faturamento:");
                Date dataInicio =  Utils.ConverteParaData(ler.next());
                System.out.println("Informe a data final do faturamento:");
                Date dataFinal = Utils.ConverteParaData(ler.next());
                System.out.printf("\n O valor total faturado pela empresa entre %s e %s é de R$ %.2f \n",Utils.formatarDataPadraoBrasil(dataInicio),Utils.formatarDataPadraoBrasil(dataFinal),empresa.CalculaValorFaturadoPorPeriodo(dataInicio,dataFinal));
                System.out.println("_________________________________________________________________");
            }

            // 3) Qual foi a forma de pagamento mais utilizada nos pedidos.
            else if (opcao == 3){
                System.out.println("\n O método de pagamento mais utilizado é: "+ empresa.ContarFormaDePagamento().getValor());
                System.out.println("_________________________________________________________________");
            }

            // 4) Retornar o valor de lucro separado por forma de pagamento
            else if (opcao == 4){
                ArrayList<Double> ganhos = empresa.CalcularLucroFormaDePagamento();
                System.out.println("_________________________________________________________________");
                System.out.println(" O lucro com os métodos de pagamento é: ");
                System.out.printf("  Crédito: R$ %.2f \n",ganhos.get(0));
                System.out.printf("  Débito: R$ %.2f \n",ganhos.get(1));
                System.out.printf("  Pix: R$ %.2f \n",ganhos.get(2));
                System.out.printf("  Boleto: R$ %.2f \n",ganhos.get(3));
                System.out.printf("  Picpay: R$ %.2f \n",ganhos.get(4));
                System.out.println("_________________________________________________________________");
            }
            else if (opcao == 5){
            // 5) A empresa deve ter uma método que imprima o relatório das vendas no formato de exemplo.
            System.out.println("Informe o número do pedido o qual deseja gerar o relatório:");
            System.out.println("|  Número |   Data   |     Cliente    |");
            for (Pedido pedido:empresa.getPedidos())
                System.out.println("    "+ pedido.getNumero() + "   "+ Utils.formatarDataPadraoBrasil(pedido.getData())+ "   "+ pedido.getCliente().getNome());
                try{
                    empresa.GerarRelatorioPedido(ler.nextInt());
                }catch (Exception e){
                    e.printStackTrace();
                }
            }else if (opcao == 0){
                System.out.println("Desligando o sistema...");
            }else{
                System.out.println("Opção inválida! Favor digitar outra opção.");
            }
        } while( opcao != 0);
        
        ler.close();
    }
}
