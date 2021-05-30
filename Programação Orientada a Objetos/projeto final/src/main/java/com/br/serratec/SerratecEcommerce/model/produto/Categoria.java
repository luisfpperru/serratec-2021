package model.produto;

public enum Categoria {
    NACIONAIS("Nacionais"),
    IMPORTADOS("Importados"),
    PROMOCAO("Promocao"),
    FRETEGRATIS("Frete Gratis");

    String valor;

    private Categoria(String valor){
        this.valor = valor;
    }

    public String getValor(){
        return this.valor;
    }

}
