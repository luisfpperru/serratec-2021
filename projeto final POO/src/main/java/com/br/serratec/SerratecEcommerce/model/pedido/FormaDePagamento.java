package model.pedido;

public enum FormaDePagamento {
    CREDITO("Cartão de Crédito"),
    DEBITO("Cartão de débito"),
    PIX("Pix"), 
    BOLETO("Boleto"),
    PICPAY("PicPay");

    String valor;

    private FormaDePagamento(String valor){
        this.valor = valor;
    }

    public String getValor(){
        return this.valor;
    }
}
