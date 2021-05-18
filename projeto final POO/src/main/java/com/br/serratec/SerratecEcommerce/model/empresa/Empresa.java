package model.empresa;

import model.cliente.Endereco;
import model.pedido.Pedido;
import java.util.ArrayList;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.stream.Collectors;
import util.Utils;
import model.pedido.FormaDePagamento;


public class Empresa {
    String nome;
    Endereco endereco;
    ArrayList<Pedido> pedidos;

    public Empresa(String nome, Endereco endereco){
        this.nome = nome;
        this.endereco = endereco;
        this.pedidos = new ArrayList<Pedido>();
    }

    //#region Getters e Setters
    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Endereco getEndereco() {
        return this.endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public ArrayList<Pedido> getPedidos() {
        return this.pedidos;
    }

    public void setPedidos(ArrayList<Pedido> pedidos) {
        this.pedidos = pedidos;
    }
    //#endregion

    public void AdicionarPedido(Pedido pedido){
        this.pedidos.add(pedido);
    }

    public double CalcularValorFaturado(){
        //var soma = 0.0;
        //for (Pedido pedido:this.pedidos)
        //    soma += pedido.getValorTotal();
        //return soma;
        return this.pedidos.stream()
                        .collect(Collectors.summingDouble(pedido -> pedido.getValorTotal()));
    }

    public double CalculaValorFaturadoPorPeriodo (Date dataInicio, Date dataFinal) {
        return this.pedidos.stream()
                            .filter(pedido -> pedido.getData().after(dataInicio) && pedido.getData().before(dataFinal))
                            .collect(Collectors.summingDouble(pedido -> pedido.getValorTotal()))
                            .doubleValue();
    }

    public FormaDePagamento ContarFormaDePagamento(){

        var listaFormasDePagamento = new ArrayList<FormaDePagamento>();
        listaFormasDePagamento.add(FormaDePagamento.CREDITO);
        listaFormasDePagamento.add(FormaDePagamento.DEBITO);
        listaFormasDePagamento.add(FormaDePagamento.PIX);
        listaFormasDePagamento.add(FormaDePagamento.BOLETO);
        listaFormasDePagamento.add(FormaDePagamento.PICPAY);

        int maxCount = 0, count;
        FormaDePagamento maxFormaDePagamento = FormaDePagamento.CREDITO;

        for (FormaDePagamento forma:listaFormasDePagamento){
            count = this.pedidos.stream()
                                .filter(pedido -> pedido.getFormaDePagamento().equals(forma))
                                .collect(Collectors.counting())
                                .intValue();
            if (count > maxCount){
                maxCount = count;
                maxFormaDePagamento = forma;
            }
        }
        return maxFormaDePagamento; 
    }
    public ArrayList<Double> CalcularLucroFormaDePagamento(){

        var listaFormasDePagamento = new ArrayList<FormaDePagamento>();
        var GanhosFormasDePagamento = new ArrayList<Double>();
        listaFormasDePagamento.add(FormaDePagamento.CREDITO);
        listaFormasDePagamento.add(FormaDePagamento.DEBITO);
        listaFormasDePagamento.add(FormaDePagamento.PIX);
        listaFormasDePagamento.add(FormaDePagamento.BOLETO);
        listaFormasDePagamento.add(FormaDePagamento.PICPAY);

        double valor;
        for (FormaDePagamento forma:listaFormasDePagamento){
            valor = this.pedidos.stream()
                            .filter(pedido -> pedido.getFormaDePagamento().equals(forma))
                            .collect(Collectors.summingDouble(pedido -> pedido.getValorTotal()))
                            .doubleValue();
            GanhosFormasDePagamento.add(valor);
        }
        return GanhosFormasDePagamento; 
    }
    

    public void GerarRelatorioPedido(int numero) throws Exception{
        var pedido = this.pedidos.stream()
                                   .filter(p -> p.getNumero() == numero)
                                   .findAny()
                                   .orElseThrow(Exception::new);
                                    

        System.out.println("*************************************************************************");
        System.out.println("******************* "+ this.getNome()+" ********************");
        System.out.println("*************************************************************************");
        System.out.println("Data e hora da geração: " + Utils.formatarDataHoraPadraoBrasil(new Date()));
        System.out.println("Cliente");
        System.out.println("___________________________________________________");
        System.out.println("Nome: " + pedido.getCliente().getNome()); 
        System.out.println("Cep: " + pedido.getCliente().getEndereco().getCep());
        System.out.println("Endereço: Rua: "+ pedido.getCliente().getEndereco().getRua() + ", N°"+ pedido.getCliente().getEndereco().getNumero() +", Bairro: "+ pedido.getCliente().getEndereco().getBairro());
        System.out.println("Referência: " + pedido.getCliente().getEndereco().getReferencia()); 
        System.out.println("_________________________________________________________________");
        System.out.println(" Código |                  Descrição                 | Quantidade | Valor Unitário | Valor total |");
        System.out.println("_________________________________________________________________");
        pedido.getListaDeProdutos()
                .forEach( produto -> System.out.println(" "+ produto.getCodigo()+"    " + produto.getDescricao() +"       " + produto.getQuantidade() +"         R$ " + produto.getValorUnitario()+"         R$ "+ produto.calcularValorDoProduto()));
        System.out.println("_________________________________________________________________");
        System.out.printf("\n Frete: R$ %.2f",pedido.getValorFrete());
        System.out.printf("\n Desconto: R$ %.2f",pedido.getDesconto());
        System.out.printf("\n Valor total: R$ %.2f \n",pedido.getValorTotal());
        System.out.println("*************************************************************************");
        System.out.println("*************************************************************************");

    }

    
}
