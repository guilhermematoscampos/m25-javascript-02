// criação e uso de funções

function fatorial (num){
    let ret = 1;
    while (num>1){
        ret=ret*num;
        num--;
    }
    return ret;
}
console.log(fatorial (3));

//arrow function
const fatorial_arrow = (numero) => {
    let ret =1;
    while (numero>1){
        ret=ret*numero;
        numero--;
    }
    return ret;
}
console.log(fatorial_arrow (3));