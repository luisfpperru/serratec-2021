package models.partida;
import java.util.ArrayList;
import models.equipe.Equipe;

public class Partida {
    Integer id;
    Equipe equipeLadoVermelho;
    Equipe equipeLadoAzul;
    Integer duracao;
    //jogador.tipo = TipoJogador.TANK;

    public Partida(Integer id,Equipe equipeLadoVermelho, Equipe equipeLadoAzul){
        this.id = id;
        this.equipeLadoVermelho = equipeLadoVermelho;
        this.equipeLadoAzul = equipeLadoAzul;
    }

    public Integer getId(){
        return this.id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public Equipe getEquipeLadoVermelho(){
        return this.equipeLadoVermelho;
    }

    public void setEquipeLadoVermelho(Equipe equipeLadoVermelho){
        this.equipeLadoVermelho = equipeLadoVermelho;
    }

    public Equipe getEquipeLadoAzul(){
        return this.equipeLadoAzul;
    }

    public void setEquipeLadoAzul(Equipe equipeLadoAzul){
        this.equipeLadoAzul = equipeLadoAzul;
    }

    public Integer getDuracao(){
        return this.duracao;
    }

    public void setDuracao(Integer duracao){
        this.duracao = duracao;
    }

    public String escolherEquipeFavorita(){
        var mmrVermelho = this.equipeLadoVermelho.calcularMediaRanking();
        var mmrAzul = this.equipeLadoAzul.calcularMediaRanking();
        if (mmrVermelho > mmrAzul){
            return "Equipe favorita a ganhar: " + this.equipeLadoVermelho.getNome();
        }else if (mmrVermelho < mmrAzul){
            return "Equipe favorita a ganhar: " + this.equipeLadoAzul.getNome();
        }else{
            return "Não existe equipe favorita.";
        }
    }
}
