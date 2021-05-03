package models.partida;
import java.util.ArrayList;
import models.equipe.Equipe;
import java.util.Random;

public class Partida {
    Integer id;
    Equipe equipeLadoVermelho;
    Equipe equipeLadoAzul;
    double chancesLadoVermelho;
    double chancesLadoAzul;
    LadoEquipe resultado; // Variável guarda se a Equipe Vermelha venceu ou não.


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

    public double getChancesLadoVermelho(){
        return this.chancesLadoVermelho;
    }

    public double getChancesLadoAzul(){
        return this.chancesLadoAzul;
    }

    public LadoEquipe getResultado(){
        return this.resultado;
    }

    public String escolherEquipeFavorita(){
        var rankingMedioVermelho = this.equipeLadoVermelho.calcularMediaRanking();
        var rankingMedioAzul = this.equipeLadoAzul.calcularMediaRanking();
        if (rankingMedioVermelho > rankingMedioAzul){
            this.chancesLadoVermelho = 2.0;
            this.chancesLadoAzul = 5.0;
            return " As chances pra equipe "+ this.getEquipeLadoVermelho().getNome() + " sao: " + this.getChancesLadoVermelho() + " \n As chances pra equipe " + this.getEquipeLadoAzul().getNome() + " sao: " + this.getChancesLadoAzul();
        }else if (rankingMedioVermelho < rankingMedioAzul){
            this.chancesLadoVermelho = 5.0;
            this.chancesLadoAzul = 2.0;
            return " As chances pra equipe "+ this.getEquipeLadoVermelho().getNome() + " sao: " + this.getChancesLadoVermelho() + " \n As chances pra equipe " + this.getEquipeLadoAzul().getNome() + " sao: " + this.getChancesLadoAzul();
        }else{
            this.chancesLadoVermelho = 2.0;
            this.chancesLadoAzul = 2.0;
            return " As chances pra equipe "+ this.getEquipeLadoVermelho().getNome() + " sao: " + this.getChancesLadoVermelho() + " \n As chances pra equipe " + this.getEquipeLadoAzul().getNome() + " sao: " + this.getChancesLadoAzul();
        }

    }

    public void simularResultado(){
        var random = new Random();
        int valor = random.nextInt(2);
        if (valor == 0){
            this.resultado = LadoEquipe.VERMELHO;
        }else{
            this.resultado = LadoEquipe.AZUL;
        }
    }
}
