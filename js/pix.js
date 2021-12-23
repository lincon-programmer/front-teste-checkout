window.onload = function(){
    var name = localStorage.getItem("name");
    var cpf = localStorage.getItem("cpf");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
    var serie = localStorage.getItem("serie");
    
    var obj = {
        client: {
            name: name,
            cpf: cpf,
            email: email,
            phone: phone,
            serie: serie
        }
    }

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/payment/pix";
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onload = function(){
        document.getElementById("QR_Pix").innerHTML = `
            <img src="${this.responseText}"></img>
        `;
    }
    xhr.send(JSON.stringify(obj))
}

var boleto = document.getElementById('boleto')

boleto.addEventListener('click', ()=>{
    window.location.href = '../boleto.html'; 
})

var card = document.getElementById('cartao')

card.addEventListener('click', ()=>{
    window.location.href = '../cartao.html'; 
})