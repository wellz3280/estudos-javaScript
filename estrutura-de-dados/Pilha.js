class Pilha
{
    constructor(empilhar =  [])
    {
        this.empilhar = empilhar;
    } 

    pushPratos(pratos)
    {    

      this.empilhar.push(pratos);
        
        console.log(this.empilhar);
    }

    popPratos()
    {
        
       this.empilhar.pop();
        console.log(this.empilhar);   
    }   

 
}

const teste = new Pilha();
teste.pushPratos(1)
teste.pushPratos(2)
teste.pushPratos(3)

teste.popPratos();

teste.pushPratos(4)
teste.popPratos();
teste.pushPratos(5)
teste.pushPratos(6)
teste.pushPratos(7)
teste.popPratos();
teste.popPratos();
teste.popPratos();