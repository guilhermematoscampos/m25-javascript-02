const carregar = () => {
    const tbody = document.querySelector("#id_table_prod_dados");
    axios.get("http://localhost:3000/produtos").then((ret) => {
        ret.data.forEach((item, idx) => {
            const tr = document.createElement('tr');
            const td_id = document.createElement('td');
            const td_desc = document.createElement('td');
            const td_saldo = document.createElement('td');
            const td_preco = document.createElement('td');
            const td_acoes = document.createElement('td');
            //adicionando tds nos trs
            tr.appendChild(td_id);
            tr.appendChild(td_desc);
            tr.appendChild(td_saldo);
            tr.appendChild(td_preco);
            tr.appendChild(td_acoes);
            //adicionando ao tbody
            tbody.appendChild(tr)
            // colocando valores
            td_id.textContent = item.id;
            td_desc.textContent = item.descricao;
            td_saldo.textContent = item.saldo;
            td_preco.textContent = item.preco;
            td_acoes.innerHTML = `<a href="cadastro.html?id=${item.id}"><img src="images/edit.svg" class=img-edit></a> | <img src="images/delete.svg" class=img-delete onclick="apagar(${item.id});">`;
        })
    })
}

const apagar = async(id) => {
    const op = confirm("Tem certeza que quer excluir o registro "+id+"?");
    if (op) {
        await axios.delete("http://localhost:3000/produtos/"+id);
        window.location.reload();
    }
    else{
        console.log("deleção cancelada");
    }
}

carregar(); 