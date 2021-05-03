package models.usuario;
import models.partida.Partida;
import models.partida.LadoEquipe;

public class Aposta{
    Partida partida;
    double valorAposta;
    LadoEquipe equipeApostada;

    public Aposta(Partida partida, double valorAposta, LadoEquipe equipeApostada){
        this.partida = partida;
        this.valorAposta = valorAposta;
        this.equipeApostada = equipeApostada;
    }


    public double calculaValorAposta(){
        if (partida.getResultado().getValor() == equipeApostada.getValor()){
            if (partida.getResultado().getValor() == LadoEquipe.VERMELHO.getValor()){
                return valorAposta*partida.getChancesLadoVermelho();
            }else{
                return valorAposta*partida.getChancesLadoAzul();
            }      
        }else{
            return 0.0;
        }
    }
}
