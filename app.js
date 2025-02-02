// Array que armazena os nomes dos amigos para o sorteio

let listaAmigos = [];

// Função que adiciona amigos a lista

function adicionarAmigo() {

    let nomeAmigo = document.getElementById('amigo').value;

    if(nomeAmigo != '' && nomeAmigo != ' '){

        listaAmigos.push(nomeAmigo);
        document.getElementById('amigo').value = '';
        exibirLista()

    } else {

        alert("Insira um nome ou apelido válido!")
    }
}


// Função que mostra para o usuário quem foi inserido na lista
function exibirLista() {

    let listaExibida = document.getElementById('listaAmigos');
    listaExibida.innerHTML = "";

    listaAmigos.forEach(amigo => {
        listaExibida.innerHTML += `<li>${amigo}</li>`;
    });
}

// Função que sorteia um amigo para aparecer na lista
function sortearAmigo() {
    let amigoSorteado = Math.floor(Math.random() * listaAmigos.length)

    document.getElementById('resultado').innerHTML = `<li>${listaAmigos[amigoSorteado]}</li>`;
}