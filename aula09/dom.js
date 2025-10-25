//manipulando html com javascript

const incluir = () => {
    const li = document.createElement("li");
    //const txtcomponent = document.getElementById("idtext") //(retorna todos)
    const txtcmp = document.querySelector("#idtext"); //usa "logica" do css (retorna o primeiro)
    
    //colocando o texto no li
    li.textContent = txtcmp.value;
    //colocando li no ul
    const ul = document.getElementById("idlist");
    ul.appendChild(li);
}

const remover = () => {
    const lis = document.querySelectorAll("#idlist li");
    const txtcmp = document.querySelector("#idtext");
    const ul = document.querySelector("#idlist");

    //percorrendo lis
    lis.forEach(it => {
        if(it.textContent == txtcmp.value){
            ul.removeChild(it) //remove li do ul
        }
    });
}

const btnadd = document.querySelector("#idadd");
const btnremove = document.querySelector("#idremove");
//adicionando eventos 
btnadd.addEventListener('click', incluir);
btnremove.addEventListener('click', remover);