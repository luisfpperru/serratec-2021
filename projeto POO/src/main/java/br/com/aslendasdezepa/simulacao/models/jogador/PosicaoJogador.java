package models.jogador;

public enum PosicaoJogador {
    TANK("Tank"),        
    SELVA("Selva"),
    MAGO("Mago"),
    ATIRADOR("Atirador"),
    SUPORTE("Suporte");


    public String valor;

    private PosicaoJogador(String valor){
        this.valor = valor;
    }
    
    public String getValor(){
        return this.valor;
    }
}
