import models.jogador.Jogador;
import models.equipe.Equipe;
import models.jogador.PosicaoJogador;
import models.partida.Partida;
import models.usuario.Aposta;
import models.partida.LadoEquipe;

public class App {
    public static void main(String[] args) {

        System.out.println("==================");
        System.out.println("==== ZEPABETS ====");
        System.out.println("==================");

        var jogador1 = new Jogador("Yasuzin123", PosicaoJogador.MAGO,1700);
        var jogador2 = new Jogador("DariusRei", PosicaoJogador.TANK,1700);
        var jogador3 = new Jogador("joãoDoMato", PosicaoJogador.SELVA,1500);
        var jogador4 = new Jogador("DinhoVirtuoso",PosicaoJogador.ATIRADOR,1400);
        var jogador5 = new Jogador("BabaDoADC",PosicaoJogador.SUPORTE,1350);

        var jogador6 = new Jogador("TaGarentido", PosicaoJogador.TANK,1600);
        var jogador7 = new Jogador("X1Lixo", PosicaoJogador.MAGO,1700);
        var jogador8 = new Jogador("BarackIbama", PosicaoJogador.SELVA,1500);
        var jogador9 = new Jogador("KaisandoTreta",PosicaoJogador.ATIRADOR,1400);
        var jogador10 = new Jogador("YuumiPlayer",PosicaoJogador.SUPORTE,1350);

        var jogador11 = new Jogador("Johnny Bravo" , PosicaoJogador.TANK, 1550);
        var jogador12 = new Jogador("Dexter" , PosicaoJogador.MAGO, 1750);
        var jogador13 = new Jogador("Frangolino" , PosicaoJogador.SELVA , 1300);
        var jogador14 = new Jogador("PernaLonga" , PosicaoJogador.SUPORTE , 1600);
        var jogador15 = new Jogador("Ben1000" , PosicaoJogador.ATIRADOR , 1450);

        var equipe1 = new Equipe("Caneta Gaming");
        
        equipe1.adicionarJogador(jogador1);
        equipe1.adicionarJogador(jogador2);
        equipe1.adicionarJogador(jogador3);
        equipe1.adicionarJogador(jogador4);
        equipe1.adicionarJogador(jogador5);

        var equipe2 = new Equipe("Framingu Esports");
        equipe2.adicionarJogador(jogador6);
        equipe2.adicionarJogador(jogador7);
        equipe2.adicionarJogador(jogador8);
        equipe2.adicionarJogador(jogador9);
        equipe2.adicionarJogador(jogador10);

        var equipe3 = new Equipe("Cabum Ninjas Esports");
        equipe3.adicionarJogador(jogador11);
        equipe3.adicionarJogador(jogador12);
        equipe3.adicionarJogador(jogador13);
        equipe3.adicionarJogador(jogador14);
        equipe3.adicionarJogador(jogador15);
        
        var partida1 = new Partida(001,equipe1,equipe2);
        var partida2 = new Partida(002,equipe1,equipe3);
        var partida3 = new Partida(003,equipe2,equipe3);

        System.out.println("=== Rodada 1 === \n" + partida1.escolherEquipeFavorita());
        System.out.println("=== Rodada 2 === \n" + partida2.escolherEquipeFavorita());
        System.out.println("=== Rodada 3 === \n" + partida3.escolherEquipeFavorita());

        var aposta1 = new Aposta(partida1,250.00,LadoEquipe.VERMELHO);
        var aposta2 = new Aposta(partida2,150.00,LadoEquipe.AZUL);
        var aposta3 = new Aposta(partida3,50.00,LadoEquipe.VERMELHO);

        partida1.simularResultado();
        partida2.simularResultado();
        partida3.simularResultado();

        System.out.println("O ganhador partida "+ partida1.getId() + " foi: " + partida1.getResultado());

        System.out.println("O valor recebido pelo apostador eh: "+ aposta1.calculaValorAposta());
    }  
}
