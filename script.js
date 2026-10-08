function mostrar(id) {
    document.querySelectorAll(".tela").forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}

function entrar() {
    var nome = document.getElementById("usuario").value;

    if (nome === "") {
        nome = "Aluno";
    }

    document.getElementById("nomePerfil").textContent = nome;

    document.querySelectorAll(".tela").forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    document.getElementById("site").classList.add("ativo");
    mostrarTela("inicio");
}

function mostrarTela(id) {
    document.querySelectorAll(".pagina").forEach(function(pagina) {
        pagina.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}

function sair() {
    document.getElementById("site").classList.remove("ativo");
    mostrar("login");
}
