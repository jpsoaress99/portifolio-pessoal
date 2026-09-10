const botaoContato = document.getElementById("botao-contato");

const contato = document.getElementById("contato");

botaoContato.addEventListener("click", function () {
    contato.scrollIntoView({
        behavior: "smooth"
    });
});
