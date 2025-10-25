/**
 * codigo que vai demonstrar arrays em javascript
 *  */ 

// definindo o array
const vetor=[];
// push - adiciona como ultimo
vetor.push(1);
vetor.push(2);
vetor.push(3);
vetor.push(4);
vetor.push(5);

console.log(vetor);

//pop - remove o ultimo e retorna valor
console.log(vetor.pop()+"///"+vetor)

//splice(m,n) - remve n items a partir da posição m
vetor.splice(1,2);
console.log(vetor);

//vetor pde ser percorrido com um for
//txtobjeto - ver mais como funiciona