// trabalhando com vetores e matrizes

//vetor com 5 nomes
let nomes = ['Ande', 'ana', 'amarildo', 'alberto', 'bruno'];
nomes[5] = 'martiello';
let i = 0;
while (nomes[i]!=undefined){
    console.log(nomes[i]);
    i++;
}


let adjacencia = [[1,1,0,0,0,1],[1,1,0,0,1,0],[0,0,1,1,0,1],[0,0,1,1,1,0],[0,1,0,1,1,0],[1,0,1,0,0,1]];
let array=[];
for(let i=0; adjacencia[i]!=undefined; i++){
    for(let j=0; adjacencia[i][j]!=undefined; j++){
        array[j] = adjacencia[i][j];
    }
    console.log(array);
    if(adjacencia[i+1]!=undefined){
        console.log("--------------------");
    }
}