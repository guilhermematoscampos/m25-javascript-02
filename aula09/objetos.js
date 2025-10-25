/*
nesse codigo, veremos objetos em js
*/ 
//JSON (javascript object notation)

const obejeto = {
    "nome" : "gm",
    "endereco" : "rua dos bobos",
    "numero" : 0,
    "fumante" : false,
    "oi":() => {
        console.log("oi.");
    },
    "telefones" : {
        "residencial" : "14 123243567",
        "celular" : "18 762936168",
    }
}

obejeto.oi();
console.log(obejeto);
console.log(obejeto.nome);