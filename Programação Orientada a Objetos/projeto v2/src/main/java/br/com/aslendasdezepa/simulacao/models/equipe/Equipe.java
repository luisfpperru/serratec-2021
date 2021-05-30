package models.equipe;
import models.jogador.Tank;
import models.jogador.Selva;
import models.jogador.Mago;
import models.jogador.Atirador;
import models.jogador.Suporte;

public class Equipe {
    String nome;
    Tank tank;
    Selva selva;
    Mago mago;
    Atirador atirador;
    Suporte suporte;

    public Equipe(String nome){
        this.nome = nome;
    }

    public Equipe(String nome, Tank tank, Selva selva,Mago mago,Atirador atirador,Suporte suporte){
        this.nome = nome;
        this.tank = tank;
        this.selva = selva;
        this.mago = mago;
        this.atirador = atirador;
        this.suporte = suporte;
    }

    public String getNome(){
        return this.nome;
    }

    public Tank getTank(){
        return this.tank;
    }

    public Selva getSelva(){
        return this.selva;
    }

    public Mago getMago(){
        return this.mago;
    }

    public Atirador getAtirador(){
        return this.atirador;
    }

    public Suporte getSuporte(){
        return this.suporte;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setTank(Tank tank){
        this.tank = tank;
    }

    public void setMago(Mago mago){
        this.mago = mago;
    }

    public void setSelva(Selva selva){
        this.selva = selva;
    }

    public void setAtirador(Atirador atirador){
        this.atirador = atirador;
    }

    public void setSuporte(Suporte suporte){
        this.suporte = suporte;
    }

    //#region Métodos

    public double calcularMediaRanking(){
        return (tank.getRanking() + selva.getRanking() + mago.getRanking() + atirador.getRanking() + suporte.getRanking())/5;
    }
    //#endregion Métodos
}
