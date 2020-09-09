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
        document.write("<h1>Estoque: </h1>");
        if(jogadores == null){
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        }else{
            jogadores = JSON.parse(jogadores);
            jogadores.forEach(jogador => {
                document.write("<ul>");
                document.write("<li>Nome: "+jogador.nome+"</li>");
                document.write("<li>CPF : "+jogador.cpf+"</li>");
                document.write("<li>nascimento: "+jogador.nascimento+"</li>");
                document.write("<li>end: "+jogador.end+"</li>");
                document.write("<li>n: "+jogador.nº+"</li>");
                document.write("<li>bairro: "+jogador.bairro+"</li>");
                document.write("<li>cidade: "+jogador.cidade+"</li>");
                document.write("<li>cep: "+jogador.cep+"</li>");
                document.write("<li>tel: "+jogador.tel+"</li>");
                document.write("<li>email: "+jogador.email+"</li>");
                document.write("<li>posicao: "+jogador.posicao+"</li>");
                document.write("<li>contrato até: "+jogador.contratoAte+"</li>");
                document.write("<li>status: "+jogador.status+"</li>");
                document.write("</ul>");
            });
        }
    }
}