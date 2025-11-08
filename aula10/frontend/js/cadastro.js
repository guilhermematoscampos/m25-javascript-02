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
    //inibir o botão submit e reset contra impacientes
    document.getElementById("btnsubmit").disabled = true   
    //document.getElementById("btnreset").disabled = true   //desnecessário por causa do modal
    document.getElementById("id_modal").classList.add("show")

    // buscando os dados do form
    const id = document.querySelector("#id").value;
    const descricao = document.querySelector("#iddesc").value;
    const saldo = parseInt(document.querySelector("#idsaldo").value);
    const preco = parseFloat(document.querySelector("#idpreco").value);

    // montando o json para gravar
    maior_id().then((ret)=>{
        const dados = {
        "id" : ""+(id == "null" ? parseInt(ret)+1 : parseInt(id)),
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

const carregar = async() => {
    const parametros = new URLSearchParams(window.location.search); //search é indicado pelo ?
    const id = parametros.get("id");
    if (id) {
        document.getElementById("id").value = id;
        const res = await axios.get("http://localhost:3000/produtos/"+id);
        document.getElementById("iddesc").value = res.data.descricao;
        document.getElementById("idsaldo").value = res.data.saldo;
        document.getElementById("idpreco").value = res.data.preco;
    }
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

//colocando evento na pagina
document.addEventListener("DOMContentLoaded", function(){
    carregar();
})