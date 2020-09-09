function cadastraJogador(nome, cpf, nascimento, end, nº, bairro, cidade, cep, tel,
     email, posicao, salario, contratoAte, status){
    let novoJogador = {
        nome:nome.value,
        cpf:cpf.value,
        nascimento:nascimento.value,
        end:end.value,
        n:nº.value,
        bairro:bairro.value,
        cidade:cidade.value,
        cep: cep.value,
        tel: tel.value,
        email:email.value,
        posicao:posicao.value,
        contratoAte:contratoAte.value,
        status:status.value
    };
    alert(nome.value);
    if(typeof(Storage) !== "undefined"){
        let jogadores = localStorage.getItem("jogadores");
        if(jogadores == null) jogadores = []; // caso não exista jogadores criados, um vetor sera inicializado para aloca-los
        else jogadores = JSON.parse(jogadores);
        jogadores.push(novoJogador); 
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        alert("Cadastrado com Sucesso!");
    }
    else alert("Seu navegador opera em uma versão antiga, não é possivel carregar uma aplicação!");
}

function listarJogadores(){
    if(typeof(Storage) !== "undefined"){
        let jogadores = localStorage.getItem("jogadores");
     // document.write("<h1>Estoque: </h1>");
        if(jogadores == null){
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        }else{
            jogadores = JSON.parse(jogadores);
            jogadores.forEach(jogador => {
                document.getElementById("table").innerHTML += 
                "<tr>"+
                "<td>"+jogador.nome+"</td>"+
                "<td>"+jogador.cpf+"</td>"+
                "<td>"+jogador.nascimento+"</td>"+
                "<td>"+jogador.end+"</td>"+
                "<td>"+jogador.nº+"</td>"+
                "<td>"+jogador.bairro+"</td>"+
                "<td>"+jogador.cidade+"</td>"+
                "<td>"+jogador.cep+"</td>"+
                "<td>"+jogador.tel+"</td>"+
                "<td>"+jogador.email+"</td>"+
                "<td>"+jogador.posicao+"</td>"+
                "<td>"+jogador.contratoAte+"</td>"+
                "<td>"+jogador.status+"</td>"+
                "</tr>"
            });
        }
    }
}