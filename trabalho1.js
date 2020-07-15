/*
 listar todos os números primos menores ou igual a
um determinado número.
1- Criar um variável número
2- criar uma lista com todos os numeros menores q n
3- criar uma lista com numeros primos

*/
var n = 70;

for (let num = 2 ; num <= n ; num++ ) {
        let primo = true;

        for(let div = 2; div < num; div++){
            if(num%div === 0){
                primo = false;
                break;
            }
        }
        if(primo)console.log(num);
        
}
