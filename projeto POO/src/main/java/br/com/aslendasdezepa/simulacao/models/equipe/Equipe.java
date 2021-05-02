package models.equipe;
import models.jogador.Jogador;
import java.util.ArrayList;
import java.util.InputMismatchException;

public class Equipe {
    String nome;
    ArrayList<Jogador> membros;

    public Equipe(String nome){
        this.nome = nome;
        this.membros = new ArrayList<Jogador>();
    }

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


    public void adicionarJogador(Jogador jogador){
        if (this.membros.size() < 5)
            for (Jogador jogador1 : membros){
                if (jogador1.getPosicao() == jogador.getPosicao())
                throw new NullPointerException("Nao pode haver 2 jogadores na mesma posicao.");
            }
        else
                throw new NullPointerException("Nao pode haver mais de 5 jogadores numa equipe.");
        this.membros.add(jogador);
    }

    public double calcularMediaRanking(){
        var soma = 0.0;
        for (Jogador jogador:membros){
            soma += jogador.getRanking();
        }
        return soma/membros.size();
    }

}
