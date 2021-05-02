import models.jogador.Jogador;
import models.equipe.Equipe;
import models.jogador.PosicaoJogador;
import models.partida.Partida;

public class App {
    public static void main(String[] args) {
        var jogador1 = new Jogador("Yasuzin123", PosicaoJogador.MAGO,1600);
        var jogador2 = new Jogador("DariusRei", PosicaoJogador.TANK,1700);
        var jogador3 = new Jogador("joãoDoMato", PosicaoJogador.SELVA,1500);
        var jogador4 = new Jogador("DinhoVirtuoso",PosicaoJogador.ATIRADOR,1400);
        var jogador5 = new Jogador("BabaDoADC",PosicaoJogador.SUPORTE,1350);

        var jogador6 = new Jogador("TaGarentido", PosicaoJogador.TANK,1600);
        var jogador7 = new Jogador("X1Lixo", PosicaoJogador.MAGO,1700);
        var jogador8 = new Jogador("BarackIbama", PosicaoJogador.SELVA,1500);
        var jogador9 = new Jogador("KaisandoTreta",PosicaoJogador.ATIRADOR,1400);
        var jogador10 = new Jogador("YuumiPlayer",PosicaoJogador.SUPORTE,1350);

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
        
        var partida = new Partida(001,equipe1,equipe2);

        System.out.println(equipe1.calcularMediaRanking());
        System.out.println(equipe2.calcularMediaRanking());
        System.out.println(partida.escolherEquipeFavorita());

    }
}
