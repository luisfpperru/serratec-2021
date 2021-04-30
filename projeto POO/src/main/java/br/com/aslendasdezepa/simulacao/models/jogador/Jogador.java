package src.main.java.br.com.aslendasdezepa.simulacao.models.jogador;

public class Jogador {
    String nick;
    PosicaoJogador posicao;
    Integer ranking; // quantificar a experiencia do jogador
    String personagem;

    public Jogador(String nick, PosicaoJogador posicao,Integer ranking){
        this.nick = nick;
        this.posicao = posicao;
        this.ranking = ranking;
    }

    public String getNick(){
        return this.nick;
    }

    public void setNick(String nick){
        this.nick = nick;
    }

    public PosicaoJogador getPosicao(){
        return this.posicao;
    }

    public void setPosicao(PosicaoJogador posicao){
        this.posicao = posicao;
    }

    public Integer getRanking(){
        return this.ranking;
    }

    public void setRanking(Integer ranking){
        this.ranking = ranking;
    }

    public String getPersonagem(){
        return this.personagem;
    }

    public void setPersonagem(String personagem){
        this.personagem = personagem;
    }

}
