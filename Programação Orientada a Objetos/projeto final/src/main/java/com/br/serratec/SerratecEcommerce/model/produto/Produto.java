package model.produto;

import java.util.Random;

public class Produto{
    int codigo;
    String descricao;
    Categoria categoria;
    int quantidade;
    double valorUnitario;
    double desconto;

    public Produto(
        String descricao,
        Categoria categoria,
        int quantidade,
        double valorUnitario,
        double desconto
        ){
            Random random = new Random();
            this.codigo = random.nextInt(100000);
            this.descricao = descricao;
            this.categoria = categoria;
            this.quantidade = quantidade;
            this.valorUnitario = valorUnitario;
            this.desconto = desconto;
        }

    //#region Getters e Setters
    public int getCodigo() {
        return this.codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Categoria getCategoria() {
        return this.categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public int getQuantidade() {
        return this.quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public double getValorUnitario() {
        return this.valorUnitario;
    }

    public void setValorUnitario(double valorUnitario) {
        this.valorUnitario = valorUnitario;
    }

    public double getDesconto() {
        return this.desconto;
    }

    public void setDesconto(double desconto) {
        this.desconto = desconto;
    }
    //#endregion

        public Double calcularValorDoProduto(){
            return this.quantidade*this.valorUnitario - this.desconto;
        }
}
