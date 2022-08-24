let primerNumero = parseInt(prompt('Cual tabla de multiplicar quiere conocer?'))

if(isNaN(primerNumero)){
    do{
        primerNumero = parseInt(prompt('Digite un número válido'))
    } while(isNaN(primerNumero))
}

    for(let i=1;i<=10;i++){
        let resultado=primerNumero*i
        console.log(primerNumero+' x '+i+' = '+resultado)
    }

