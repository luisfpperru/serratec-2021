package model.pedido;

import model.produto.Produto;
import model.cliente.Cliente;
import java.util.ArrayList;
import java.util.Random;
import java.util.Date;

public class Pedido{
    int numero;
    Date data;
    ArrayList<Produto> listaDeProdutos;
    Cliente cliente;
    double valorFrete;
    double desconto;
    FormaDePagamento formaDePagamento;
    double valorTotal;

    public Pedido(
        Cliente cliente,
        double valorFrete,
        double desconto,
        FormaDePagamento formaDePagamento
        ){
            Random random = new Random();
            this.numero = random.nextInt(1000);
            this.data = new Date();
            this.listaDeProdutos = new ArrayList<Produto>();
            this.cliente = cliente;
            this.valorFrete = valorFrete;
            this.desconto = desconto;
            this.formaDePagamento = formaDePagamento;
    }

    //#region Getters e Setters
    public int getNumero() {
        return this.numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public Date getData() {
        return this.data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public ArrayList<Produto> getListaDeProdutos() {
        return this.listaDeProdutos;
    }

    public void setListaDeProdutos(ArrayList<Produto> listaDeProdutos) {
        this.listaDeProdutos = listaDeProdutos;
    }

    public Cliente getCliente() {
        return this.cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public double getValorFrete() {
        return this.valorFrete;
    }

    public void setValorFrete(double valorFrete) {
        this.valorFrete = valorFrete;
    }

    public double getDesconto() {
        return this.desconto;
    }

    public void setDesconto(double desconto) {
        this.desconto = desconto;
    }

    public FormaDePagamento getFormaDePagamento() {
        return this.formaDePagamento;
    }

    public void setFormaDePagamento(FormaDePagamento formaDePagamento) {
        this.formaDePagamento = formaDePagamento;
    }
    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }
    //#endregion

    public void AdicionarProduto(Produto produto){
        this.listaDeProdutos.add(produto);
    }

    public double getValorTotal(){
        calcularValorTotal();
        return this.valorTotal;
    }

    public void calcularValorTotal(){
        this.valorTotal = 0.0;
        for (Produto produto:this.listaDeProdutos)
            this.valorTotal += produto.calcularValorDoProduto();
        this.valorTotal += this.valorFrete - this.desconto;
    }

}