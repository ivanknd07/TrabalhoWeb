function cadastraJogador(nome, cpf, nascimento, end, n, bairro, cidade, cep, tel,
     email, posicao, salario, contratoAte, status){
    let novoJogador = {
        nome:nome.value,
        cpf:cpf.value,
        nascimento:nascimento.value,
        end:end.value,
        n:n.value,
        bairro:bairro.value,
        cidade:cidade.value,
        cep: cep.value,
        tel: tel.value,
        email:email.value,
        posicao:posicao.value,
        salario:salario.value,
        contratoAte:contratoAte.value,
        status:status.value
    };
    let hoje = new Date();
    let dat = new Date(contratoAte.value);
    let dat2 = new Date(nascimento.value);
    if(!nome.value || !cpf.value || !nascimento.value || !end.value || !n.value || !bairro.value || !cidade.value || !cep.value || !tel.value 
        || !email.value || !posicao.value || !salario.value || !contratoAte.value || !status.value){
        alert("Algum campo não preenchido! Preencha");
    }else if(isNaN(cpf.value) || (cpf.value.length != 11)){
        alert("Você digitou o CPF de forma incorreta, digite somente numeros!");
    }else if(isNaN(tel.value) || tel.value.length != 12 ){
        alert("Você digitou o numero de telefone errado, digite numero(9 digs) mais o DDD(3 digs)");
    }else if(isNaN(cep.value) || cep.value.length != 8){
        alert("Você digitou o numero do cep errado, digite somente os numeros.");
    }else if(isNaN(salario.value)){
        alert("Você digitou o numero do salario de forma incorreta, tente digitar só numeros");
    }else if(isNaN(n.value)){
        alert("Você digitou o numero da rua de forma incorreta")
    }else if(hoje > dat){
        alert("O jogogador não pode ser contratado, pois o vencimento do contrato informado ja passou.");
    }else if(dat2 > hoje){
        alert("Seu jogador é um viajante do tempo? Pois ele nasceu no futuro")
    }else if(dat2 > dat){
        alert("você não pode contratar um jogador que não nasceu ainda, verifique sua data de nascimento");
    }else{
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
                "<td>"+jogador.n+"</td>"+
                "<td>"+jogador.bairro+"</td>"+
                "<td>"+jogador.cidade+"</td>"+
                "<td>"+jogador.cep+"</td>"+
                "<td>"+jogador.tel+"</td>"+
                "<td>"+jogador.email+"</td>"+
                "<td>"+jogador.posicao+"</td>"+
                "<td>"+jogador.salario+"</td>"+
                "<td>"+jogador.contratoAte+"</td>"+
                "<td>"+jogador.status+"</td>"+
                "</tr>"
            });
        }
    }
}