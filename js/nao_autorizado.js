var dados_pessoais = document.getElementById("dados_pessoais");
var pagamento = document.getElementById("pagamento");

dados_pessoais.addEventListener("click", ()=>{
    window.location.href = "index.html";
})

pagamento.addEventListener("click", ()=>{
    window.location.href = "cartao.html";
})

var voltar = document.getElementById("voltar");

voltar.addEventListener("click", ()=>{
    window.location.href = "cartao.html";
})