package model.cliente;

public class Cliente{
    String nome;
    String email;
    String celular;
    String cpfOuCnpj;
    Endereco endereco;

    public Cliente(
        String nome,
        String email,
        String celular,
        String cpfOuCnpj,
        Endereco endereco
        ){
            this.nome = nome;
            this.email = email;
            this.celular = celular;
            this.cpfOuCnpj = cpfOuCnpj;
            this.endereco = endereco;
    }

    //#region Getters e Setters
    public String getNome(){
        return this.nome;
    }

    public String getEmail(){
        return this.email;
    }

    public String getCelular(){
        return this.celular;
    }

    public String getCpfOuCnpj(){
        return this.cpfOuCnpj;
    }

    public Endereco getEndereco(){
        return this.endereco;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setEmail(String email){
        this.nome = email;
    }

    public void setCelular(String celular){
        this.celular = celular;
    }

    public void setCpfOuCnpj(String cpfOuCnpj){
        this.cpfOuCnpj = cpfOuCnpj;
    }

    public void setEndereco(Endereco endereco){
        this.endereco = endereco;
    }
    //#endregion

}