package models.partida;

public enum LadoEquipe {
    VERMELHO("Vermelho"),
    AZUL("Azul");

    public String valor;

    private LadoEquipe(String valor){
        this.valor = valor;
    }

    public String getValor(){
        return this.valor;
    }
}