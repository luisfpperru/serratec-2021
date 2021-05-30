package util;

public class DoesntFindException extends RuntimeException {

        public DoesntFindException(){
            super("Resultado da busca não foi encontrado!");
        }
    
        public DoesntFindException(String mensagem){
            super(mensagem);
        }
    

}
