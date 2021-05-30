package models.aposta;
import models.partida.Partida;
import models.equipe.Equipe;

public class Aposta{
    //#region Atributos
    Partida partida;
    double valorAposta;
    Equipe equipeApostada;
    //#endregion Atributos

    //#region Construtores
    public Aposta(Partida partida, double valorAposta,Equipe equipeApostada){
        this.partida = partida;
        this.valorAposta = valorAposta;
        this.equipeApostada = equipeApostada;
    }
    //#endregion Construtores

    //#region Getters e Setters
    public Partida getPartida(){
        return this.partida;
    }
    public double getValorAposta(){
        return this.valorAposta;
    }
    public Equipe getEquipeApostada(){
        return this.equipeApostada;
    }
    public void setPartida(Partida partida){
        this.partida = partida;
    }
    public void setValorAposta(double valorAposta){
        this.valorAposta = valorAposta;
    }
    public void setEquipeApostada(Equipe equipeApostada){
        this.equipeApostada = equipeApostada;
    }

    //#endregion

    //#region Métodos
    public double calculaValorAposta(){
        if (partida.getEquipeVencedora().getNome() == equipeApostada.getNome()){
            if (partida.getEquipeVencedora().getNome() == partida.getEquipeLadoVermelho().getNome()){
                return valorAposta*partida.getChancesLadoVermelho();
            }else{
                return valorAposta*partida.getChancesLadoAzul();
            }      
        }else{
            return 0.0;
        }
    }
    //#endregion Métodos
}
