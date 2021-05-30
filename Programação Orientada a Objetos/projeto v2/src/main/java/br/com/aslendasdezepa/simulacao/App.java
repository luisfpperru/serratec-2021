import models.aposta.Aposta;
import models.equipe.Equipe;
import models.partida.Partida;
import models.jogador.Tank;
import models.jogador.Selva;
import models.jogador.Mago;
import models.jogador.Atirador;
import models.jogador.Suporte;


public class App {
    public static void main(String[] args) {

        System.out.println("==================");
        System.out.println("==== ZEPABETS ====");
        System.out.println("==================");

        var mago1 = new Mago("Yasuzin123",1700);
        var tank1 = new Tank("DariusRei",1700);
        var selva1 = new Selva("joãoDoMato",1500);
        var atirador1 = new Atirador("DinhoVirtuoso",1400);
        var suporte1 = new Suporte("BabaDoADC",1350);

        var tank2 = new Tank("TaGARENtido",1600);
        var mago2 = new Mago("X1Lixo",1700);
        var selva2 = new Selva("BarackIbama",1500);
        var atirador2 = new Atirador("Kai'sandoTreta",1400);
        var suporte2 = new Suporte("YuumiLover",1350);

        var tank3 = new Tank("Johnny Bravo", 1550);
        var mago3 = new Mago("Dexter", 1750);
        var atirador3 = new Atirador("Frangolino", 1300);
        var selva3 = new Selva("PernaLonga", 1600);
        var suporte3 = new Suporte("Ben1000", 1450);

        var equipe1 = new Equipe("Pain Gaming", tank1,selva1,mago1,atirador1,suporte1);
        var equipe2 = new Equipe("Flamengo Esports", tank2,selva2,mago2,atirador2,suporte2);
        var equipe3 = new Equipe("Kabum Ninjas Esports",tank3,selva3,mago3,atirador3,suporte3);
       
        var partida1 = new Partida(001,equipe1,equipe2);
        var partida2 = new Partida(002,equipe1,equipe3);
        var partida3 = new Partida(003,equipe2,equipe3);

        System.out.println("=== Rodada 1 === \n" + partida1.escolherEquipeFavorita());
        System.out.println("=== Rodada 2 === \n" + partida2.escolherEquipeFavorita());
        System.out.println("=== Rodada 3 === \n" + partida3.escolherEquipeFavorita());
        System.out.println("================");

        var aposta1 = new Aposta(partida1,250.00,partida1.getEquipeLadoVermelho());
        var aposta2 = new Aposta(partida2,150.00,partida2.getEquipeLadoVermelho());
        var aposta3 = new Aposta(partida3,50.00,partida2.getEquipeLadoAzul());

        partida1.simularResultado();
        partida2.simularResultado();
        partida3.simularResultado();

        System.out.println("O ganhador da partida "+ partida1.getId() + " foi: " + partida1.getEquipeVencedora().getNome());
        System.out.println("O valor recebido pelo apostador é: R$"+ aposta1.calculaValorAposta());
        System.out.println("================");
        System.out.println("O ganhador da partida "+ partida2.getId() + " foi: " + partida2.getEquipeVencedora().getNome());
        System.out.println("O valor recebido pelo apostador é: R$"+ aposta2.calculaValorAposta());
        System.out.println("================");
        System.out.println("O ganhador da partida "+ partida3.getId() + " foi: " + partida3.getEquipeVencedora().getNome());
        System.out.println("O valor recebido pelo apostador é: R$"+ aposta3.calculaValorAposta());
        System.out.println("================");
    }  
}
