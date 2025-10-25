let num1 = [] , num2 = [], num3 = [], i;

for (i = 0; i<10; i++){
    num1[i]=i+1;
}
console.log("contador 'for': " + num1);

i=0;
while (i<10){
    num2[i]=i+1;
    i++;
}
console.log("contador 'while': " + num2);

i=0;
do {
    num3[i]=i+1;
    i++;
} while (i<10)
console.log("contador 'do while': " + num3);