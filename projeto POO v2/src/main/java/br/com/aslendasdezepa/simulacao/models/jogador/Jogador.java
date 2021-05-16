package models.jogador;
import java.util.ArrayList;

public abstract class Jogador {
    protected String nick;
    protected Integer ranking; // quantificar a experiencia do jogador
    protected ArrayList<Estatistica> historico;

    public Jogador(String nick,Integer ranking){
        this.nick = nick;
        this.ranking = ranking;
        this.historico = new ArrayList<Estatistica>();
    }

    public String getNick(){
        return this.nick;
    }

    public void setNick(String nick){
        this.nick = nick;
    }
    
    public Integer getRanking(){
        return this.ranking;
    }

    public void setRanking(Integer ranking){
        this.ranking = ranking;
    }

}
