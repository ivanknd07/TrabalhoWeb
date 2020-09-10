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
    }else if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 
        || email.value.indexOf("com") == -1 || email.value == "" || email.value.indexOf("@.") != -1) {
        alert("Email inválido!");
        email.focus();
        return false;
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
        window.location="listJogadores.html";
    }     
}

function listarJogadores(){
    if(typeof(Storage) !== "undefined"){
        let jogadores = localStorage.getItem("jogadores");
        if(jogadores == null){
            alert("sem jogadores cadastrados!");
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

function login(){
    var log = document.getElementById("emailSenha");

    var veri = 0;
    var i;
    //pegando os valores dos dados
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;


    if (email=="admin@gmail.com" && senha=="12345678") {
        window.location="adm.html";
        done = 1;
    }
    else if(veri == 0){
        alert("Usuario não existe");
    }
}


function validacao(f){
    //Verificação de email valido
    if(f.email.value.indexOf("@") == -1 || f.email.value.indexOf(".") == -1 
        || f.email.value.indexOf("com") == -1 || f.email.value == "" || f.email.value.indexOf("@.") != -1) {
   
        alert("Email ou senha inválido!");
        f.email.focus();
        return false;
    }

    else if(f.senha.value.length < 8){
        alert("Email ou senha inválido!");
        f.senha.focus();
        return false;
    }
    else{
        login();
    }

}


function cadastraTorcedor(nome, sexo, nascimento, cpf, email, tel, end, bairro, cidade){
    let novoTorcedor = {
        nome:nome.value,
        sexo:sexo.value,
        nascimento:nascimento.value,
        cpf:cpf.value,
        email:email.value,
        tel: tel.value,
        end:end.value,
        bairro:bairro.value,
        cidade:cidade.value,
        
    };
    alert("Torcedor: "+nome.value+" cadastrado!");
    if(typeof(Storage) !== "undefined"){
        let torcedores = localStorage.getItem("torcedores");
        if(torcedores == null) torcedores = []; // caso não exista torcedores criados, um vetor sera inicializado para aloca-los
        else torcedores = JSON.parse(torcedores);
        torcedores.push(novoTorcedor); 
        localStorage.setItem("torcedores", JSON.stringify(torcedores));
        alert("Cadastrado com Sucesso!");
    }
    else alert("Seu navegador opera em uma versão antiga, não é possivel carregar uma aplicação!");

    window.location="listTorcedores.html";
}

function listarTorcedores(){
    if(typeof(Storage) !== "undefined"){
        let torcedores = localStorage.getItem("torcedores");
        if(torcedores == null){
            alert("ainda não ha torcedores cadastrados.");
        }else{
            torcedores = JSON.parse(torcedores);
            torcedores.forEach(torcedor => {
                document.getElementById("table").innerHTML += 
                "<tr>"+
                "<td>"+torcedor.nome+"</td>"+
                "<td>"+torcedor.sexo+"</td>"+
                "<td>"+torcedor.nascimento+"</td>"+
                "<td>"+torcedor.cpf+"</td>"+
                "<td>"+torcedor.email+"</td>"+
                "<td>"+torcedor.tel+"</td>"+
                "<td>"+torcedor.end+"</td>"+
                "<td>"+torcedor.bairro+"</td>"+
                "<td>"+torcedor.cidade+"</td>"+
                "</tr>"
           
            });
        }
    }
}


function validaTorcedor(f){

    //Verifica se o nome tem pelo menos 3 letras
    if(f.nome.value.length < 3){
        alert("Não existe nome com menos de 3 letras!");
        f.nome.focus();
        return false;
    }

    //Verifica se CPF é válido
    var verificaCpf = cpf.value;
    var soma;
    var resto;
    soma = 0;
    
    if (verificaCpf.length > 11 || verificaCpf.length < 11 ) {
        alert("CPF invalido!");
        return false;
    }

    if (verificaCpf == "00000000000"){ 
        alert("CPF invalido!");
        return false;
        
    }

    for (i=1; i<=9; i++) 
        soma = soma + parseInt(verificaCpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  
        resto = 0;
    
    if (resto != parseInt(verificaCpf.substring(9, 10)) ){
        alert("CPF inválido!");
        return false;
        
    }

    soma = 0;
    for (i = 1; i <= 10; i++) 
        soma = soma + parseInt(verificaCpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  
        resto = 0;
    
    if (resto != parseInt(verificaCpf.substring(10, 11) ) ){
        alert("CPF inválido!")
        return false;
        
    } 
     
    //Verificação de telefone válido
    if(f.telefone.value.length < 13 || f.telefone.value.length > 13){
        alert("Telefone inválido");
        return false;
    }

    else if (f.telefone.value.indexOf("()") != -1) {
        alert("Telefone inválido!");
        return false;
    }

    //Verificação de Nascimento
    let hoje = new Date();
    let verificaData = new Date(f.data.value);
    if(verificaData > hoje ){
        alert("Você não nasceu no futuro!");
        return false;
    }
            
    


    //Verificação de email valido
    if(f.email.value.indexOf("@") == -1 || f.email.value.indexOf(".") == -1 
        || f.email.value.indexOf("com") == -1 || f.email.value == "" || f.email.value.indexOf("@.") != -1) {
   
        alert("Email inválido!");
        f.email.focus();
        return false;
    }

    //Verificação se campos estao vazios
    if(f.endereco.value == "" || f.bairro.value == "" || f.cidade.value == "" || f.data.value == ""){
        alert("Não pode ter campos vazios!");
        return false;
    }

   
    else{
        cadastraTorcedor(f.nome, f.sexo, f.data, f.cpf, f.email, f.telefone, f.endereco, f.bairro, f.cidade);
    }

}



function jogadoresPublico(){
    if(typeof(Storage) !== "undefined"){
        let jogadores = localStorage.getItem("jogadores");
        if(jogadores == null){
            alert("sem jogadores cadastrados!");
        }else{
            jogadores = JSON.parse(jogadores);
            jogadores.forEach(jogador => {
                document.getElementById("table").innerHTML += 
                "<tr>"+
                "<td>"+jogador.nome+"</td>"+
                "<td>"+jogador.nascimento+"</td>"+
                "<td>"+jogador.end+"</td>"+
                "<td>"+jogador.bairro+"</td>"+
                "<td>"+jogador.cidade+"</td>"+
                "<td>"+jogador.posicao+"</td>"+
                "<td>"+jogador.contratoAte+"</td>"+
                "<td>"+jogador.status+"</td>"+
                "</tr>"
                
            });
        }
    }
}

function limpar(){
    alert("seus cadastros foram apagados!");
    localStorage.clear();
    document.location.reload(true);
    
}
