/**
 * js responsavel pelo cadastro
*/
const maior_id = () => {
    //buscando dados
    return axios.get('http://localhost:3000/produtos').then((ret)=>{
        return ret.data.reduce((a,b) => (a>b?.id ? a : b?.id),0); //retorna o maior id
    }) //faz chamada e pega um retorno (proesso sincrono)
}

const gravar = () => {
    // buscando os dados do form
    const id = document.querySelector("#id").value;
    const descricao = document.querySelector("#iddesc").value;
    const saldo = document.querySelector("#idsaldo").value;
    const preco = document.querySelector("#idpreco").value;

    // montando o json para gravar
    maior_id().then((ret)=>{
        const dados = {
        "id" : (id == "null" ? ret+1 : id),
        "descricao" : descricao,
        "saldo" : saldo,
        "preco" : preco
        }

        if (id=="null"){
            axios.post("http://localhost:3000/produtos",dados).then((ret)=>console.log("produto criado"));
        }
        else {
            axios.put("http://localhost:3000/produtos/"+id,dados).then((ret)=>console.log("produto gravado"));
        }
    })  
}

// colocando os eventos no form
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    //tirar o post 
    e.preventDefault();
    //chamando a gravação
    gravar();
    //voltando para a pagina inicial
    setTimeout(()=>{
        window.location.href = "index.html";
    }, 3000);
})