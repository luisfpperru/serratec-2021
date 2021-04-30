package src.main.java.br.com.aslendasdezepa.simulacao.models.equipe;
import models.jogador.Jogador;
import java.util.ArrayList;
import java.util.InputMismatchException;

public class Equipe {
    String nome;
    ArrayList<Jogador> membros;

    public Equipe(String nome,ArrayList<Jogador> membros){
        this.nome = nome;
        this.membros = membros;
    }
    public String getNome(){
        return this.nome;
    }

    public ArrayList<Jogador> getMembros(){
        return this.membros;
    }
    public void setNome(String nome){
        this.nome = nome;
    }
    public void setMembros(ArrayList<Jogador> membros){
        this.membros = membros;
    }


    public void AdicionarJogador(Jogador jogador){
        if (this.membros.size() < 5)
            for (Jogador jogador1 : membros){
                if (jogador1.posicao == jogador.posicao)
                throw new NullPointerException("Não pode haver 2 jogadores na mesma posição.");
            }
        else
                throw new NullPointerException("Não pode haver mais de 5 jogadores numa equipe.");
        this.membros.add(jogador);
    }
}
