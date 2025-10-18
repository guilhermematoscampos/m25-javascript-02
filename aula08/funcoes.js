// criação e uso de funções

function fatorial (num){
    let ret = 1;
    while (num>1){
        ret=ret*num;
        num--;
    }
    return ret;
}
console.log(fatorial (0));