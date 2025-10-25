//limitando o envio
const validar_envio = () => {
    const nome = document.querySelector("#idnome");
    if (nome.value != ""){
        console.log(nome.value);
        return true;
    }
    else{
        alert("preencha o nome");
        return false;
    }
}

//adicionando evento de submit
const form = document.querySelector("#idform");
form.addEventListener("submit",function(e){
    console.log("enviado");
    if (validar_envio()==false){ e.preventDefault()}
}
)
