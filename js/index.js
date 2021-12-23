window.onload = function(){
    var nao_autorizado = window.localStorage.getItem("nao_autorizado");

    if(nao_autorizado == "true"){
        var name = localStorage.getItem("name");
        var cpf = localStorage.getItem("cpf");
        var email = localStorage.getItem("email");
        var phone = localStorage.getItem("phone");
        var serie = localStorage.getItem("serie");

        document.getElementById("dados_name").value = name;
        document.getElementById("dados_cpf").value = cpf;
        document.getElementById("dados_email").value = email;
        document.getElementById("dados_numero").value = phone;
        document.getElementById("installment").value = serie;

    }
}

function validateCPF(strCPF){
    var Soma;
    var Resto;
    Soma = 0;
    var i;
    if (strCPF == "00000000000") return false;
        
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
}

function getImputValue() {

    var nome = document.getElementById("dados_name").value;
    var cpf = document.getElementById("dados_cpf").value;
    var email = document.getElementById("dados_email").value;
    var numberPhone = document.getElementById("dados_numero").value;
    var serie = document.getElementById("installment").value;

    if(serie == 2)
        serie = "1° Série/Fundamental"
    if(serie == 3)
        serie = "2° Série/Fundamental"
    if(serie == 4)
        serie = "3° Série/Fundamental"
    if(serie == 5)
        serie = "4° Série/Fundamental"
    if(serie == 6)
        serie = "5° Série/Fundamental"
    if(serie == 7)
        serie = "6° Série/Fundamental"
    if(serie == 8)
        serie = "7° Série/Fundamental"
    if(serie == 9)
        serie = "8° Série/Fundamental"
    if(serie == 10)
        serie = "1° Ano/Médio"
    if(serie == 11)
        serie = "2° Ano/Médio"
    if(serie == 12)
        serie = "3° Ano/Médio"

    var obj = {
        nome: nome,
        cpf: cpf,
        email: email,
        phone: numberPhone,
        serie: serie
    }

    clientDb(obj)

    document.getElementById("formCadastro").remove();

    var pagForms = document.getElementById("pagForms")
    pagForms.innerHTML = `
    <div class="box">
    <p class="box__paragraph">Escolha a forma de pagamento:</p>

    <div class="payment">
        <div class="payment__box payment__box--active">
            <svg class="payment__icon payment__icon--active" xmlns="http://www.w3.org/2000/svg" width="32.933" height="22.433" viewBox="0 0 32.933 22.433">
                <path id="Caminho_23" data-name="Caminho 23" d="M138.259,185.25H111.174a2.927,2.927,0,0,0-2.924,2.924v16.585a2.927,2.927,0,0,0,2.924,2.924h27.086a2.927,2.927,0,0,0,2.924-2.924V188.174A2.927,2.927,0,0,0,138.259,185.25Zm1.492,19.509a1.494,1.494,0,0,1-1.492,1.492H111.174a1.494,1.494,0,0,1-1.492-1.492V188.174a1.494,1.494,0,0,1,1.492-1.492h27.086a1.494,1.494,0,0,1,1.492,1.492Z" transform="translate(-108.25 -185.25)" />
                <path id="Caminho_24" data-name="Caminho 24" d="M118.739,202.25h-4.773a.716.716,0,1,0,0,1.432h4.773a.716.716,0,1,0,0-1.432Z" transform="translate(-108.477 -186.022)" />
                <path id="Caminho_25" data-name="Caminho 25" d="M127.739,202.25h-4.773a.716.716,0,1,0,0,1.432h4.773a.716.716,0,1,0,0-1.432Z" transform="translate(-108.886 -186.022)" />
                <path id="Caminho_26" data-name="Caminho 26" d="M136.739,202.25h-4.773a.716.716,0,1,0,0,1.432h4.773a.716.716,0,1,0,0-1.432Z" transform="translate(-109.294 -186.022)" />
                <path id="Caminho_27" data-name="Caminho 27" d="M134.352,191.25a3.1,3.1,0,1,0,3.1,3.1A3.106,3.106,0,0,0,134.352,191.25Zm0,4.773a1.671,1.671,0,1,1,1.671-1.671A1.672,1.672,0,0,1,134.352,196.023Z" transform="translate(-109.294 -185.522)" />
            </svg>
           <p class="payment__text payment__text--active">Cartão</p>
        </div>

        <div class="payment__box payment__box--disabled" id="pix">
            <svg class="payment__icon" xmlns="http://www.w3.org/2000/svg"  fill="#069bff" width="22.477" height="22.452" viewBox="0 0 22.477 22.452">
                <g transform="translate(0)">
                  <path id="Caminho_41" data-name="Caminho 41" d="M131.751,409.753c.047-.219.069-.443.133-.659a3.289,3.289,0,0,1,.815-1.41c.853-.862,1.714-1.717,2.572-2.574a.148.148,0,0,1,.123-.063c.478.032.956,0,1.434.016a2.919,2.919,0,0,1,.749.086,2.365,2.365,0,0,1,1.042.61q1.652,1.654,3.306,3.305a1.656,1.656,0,0,0,1.178.53,1.579,1.579,0,0,0,1.183-.479c1.094-1.092,2.19-2.18,3.278-3.277a2.41,2.41,0,0,1,1.831-.759,8.511,8.511,0,0,0,1.035-.008.468.468,0,0,1,.425.18c.783.789,1.571,1.572,2.356,2.358a3.331,3.331,0,0,1,.974,1.9,3.248,3.248,0,0,1-.867,2.838c-.851.9-1.742,1.752-2.614,2.626a.159.159,0,0,1-.137.043c-.407-.011-.814-.01-1.222-.014a2.657,2.657,0,0,1-.566-.061,2.346,2.346,0,0,1-1.163-.653q-1.642-1.645-3.287-3.286a1.627,1.627,0,0,0-1.2-.5,1.592,1.592,0,0,0-1.159.476c-1.08,1.08-2.167,2.153-3.238,3.241a2.477,2.477,0,0,1-1.922.8,10.812,10.812,0,0,0-1.248.008.477.477,0,0,1-.424-.183q-1.128-1.135-2.264-2.262a3.545,3.545,0,0,1-1.019-1.723c-.04-.17-.067-.344-.1-.516Z" transform="translate(-131.751 -398.814)"/>
                  <path id="Caminho_42" data-name="Caminho 42" d="M168.06,379.106h-.387a3.239,3.239,0,0,0-2.371.987q-1.647,1.638-3.288,3.283a.636.636,0,0,1-1.006,0c-1.083-1.082-2.17-2.161-3.248-3.248a3.367,3.367,0,0,0-1.943-1,6.564,6.564,0,0,0-.941-.035h-.159a.235.235,0,0,1,.086-.114l4.1-4.1a3.374,3.374,0,0,1,2.578-1.043,3.212,3.212,0,0,1,2.225.927c1.438,1.415,2.859,2.848,4.287,4.274C168.013,379.045,168.025,379.063,168.06,379.106Z" transform="translate(-150.132 -373.827)"/>
                  <path id="Caminho_43" data-name="Caminho 43" d="M168.061,441.765c-.011.062-.053.084-.082.114q-2.071,2.07-4.143,4.14a3.337,3.337,0,0,1-2.469,1.022,3.23,3.23,0,0,1-2.315-.941c-1.42-1.4-2.828-2.819-4.241-4.23-.021-.021-.039-.046-.059-.072.056-.045.116-.024.17-.024a5.02,5.02,0,0,0,1.292-.1,3.285,3.285,0,0,0,1.492-.852q1.667-1.658,3.327-3.322a.647.647,0,0,1,1.02,0c1.116,1.113,2.226,2.232,3.348,3.339a3.2,3.2,0,0,0,2.263.928C167.795,441.767,167.926,441.765,168.061,441.765Z" transform="translate(-150.16 -424.588)"/>
                </g>
              </svg>
           <p class="payment__text payment__text--disabled">Pix</p>
        </div>
        
        <div class="payment__box payment__box--disabled" id="boleto">
            <svg xmlns="http://www.w3.org/2000/svg" class="payment__icon payment__icon--disabled" width="28.459" height="22.905" viewBox="0 0 28.459 22.905">
                <g class="payment_boleto" transform="translate(0 0)">
                  <rect id="Retângulo_203" data-name="Retângulo 203" width="2.765" height="14.266" rx="0.145" transform="translate(4.337 4.215)"/>
                  <rect id="Retângulo_204" data-name="Retângulo 204" width="2.765" height="14.266" rx="0.145" transform="translate(21.516 4.215)"/>
                  <rect id="Retângulo_205" data-name="Retângulo 205" width="2.765" height="14.266" rx="0.145" transform="translate(15.692 4.215)"/>
                  <rect id="Retângulo_206" data-name="Retângulo 206" width="1.382" height="14.266" rx="0.145" transform="translate(8.626 4.19)"/>
                  <rect id="Retângulo_207" data-name="Retângulo 207" width="1.382" height="14.266" rx="0.145" transform="translate(11.391 4.19)"/>
                  <path id="Caminho_56" data-name="Caminho 56" d="M-601.447-118.579h-7.225a.148.148,0,0,0-.147.148v7.225a.147.147,0,0,0,.147.147h1.18a.147.147,0,0,0,.148-.147v-5.751a.148.148,0,0,1,.148-.148h5.75a.148.148,0,0,0,.148-.148v-1.179A.148.148,0,0,0-601.447-118.579Z" transform="translate(608.819 118.579)"/>
                  <path id="Caminho_57" data-name="Caminho 57" d="M-580.9-118.579h-7.225a.148.148,0,0,0-.148.148v1.179a.148.148,0,0,0,.148.148h5.751a.148.148,0,0,1,.148.148v5.751a.146.146,0,0,0,.147.147h1.18a.147.147,0,0,0,.148-.147v-7.225A.148.148,0,0,0-580.9-118.579Z" transform="translate(609.208 118.579)"/>
                  <path id="Caminho_58" data-name="Caminho 58" d="M-601.447-97.435h-5.75a.148.148,0,0,1-.148-.148v-5.751a.147.147,0,0,0-.148-.147h-1.18a.147.147,0,0,0-.147.147v7.225a.148.148,0,0,0,.147.148h7.225a.148.148,0,0,0,.148-.148v-1.179A.148.148,0,0,0-601.447-97.435Z" transform="translate(608.819 118.865)"/>
                  <path id="Caminho_59" data-name="Caminho 59" d="M-580.9-103.48h-1.18a.146.146,0,0,0-.147.147v5.751a.148.148,0,0,1-.148.148h-5.751a.148.148,0,0,0-.148.148v1.179a.148.148,0,0,0,.148.148h7.225a.148.148,0,0,0,.148-.148v-7.225A.147.147,0,0,0-580.9-103.48Z" transform="translate(609.208 118.865)"/>
                </g>
            </svg>
           <p class="payment__text payment__text--disabled">Boleto</p>
        </div>
    </div><!--payment-->

    <span></span>
    `

    var element = document.getElementById("cadastro")
    element.innerHTML = 
        `
        <form class="dados__form">
            <label for="">Nome Completo: *</label>
            <input class="dados__name" type="text" name="text" placeholder="Digite seu nome" id="cardName">
            <label for="">Número do cartão*</label>
            <input class="dados__number" type="text" name="text" placeholder="Digite seu nome" id="cardNumber">

            <div class="dados__card">
                <div class="dados__card--espaco">
                    <label for="">Validade:</label>
                    <input 
                        class="dados__validated" 
                        type="text" 
                        name="text" 
                        placeholder="MM/AA" 
                        id="cardValidate"
                    >
                </div>

                <div class="dados__card--espaco">
                    <label for="">CVV:</label>
                    <input class="dados__validated" type="text" name="text" placeholder="cvv" id="cardCvv">
                </div>
                
                <div class="parcelas">
                    <label for="dados__option">Parcelas:</label>
                    <select class="novo" name="select" id="installment">
                        <option class="" value="1" selected>1x de R$1.070,00 sem juros</option>
                        <option value="2">2x de R$535,00 sem juros</option>
                        <option value="3">3x de R$356,66 sem juros</option>
                        <option value="4">4x de R$267,50 sem juros</option>
                        <option value="5">5x de R$214,00 sem juros</option>
                        <option value="6">6x de R$178,33 sem juros</option>
                        <option value="7">7x de R$152,85 sem juros</option>
                        <option value="8">8x de R$133,75 sem juros</option>
                        <option value="9">9x de R$118,88 sem juros</option>
                        <option value="10">10x de R$107,00 sem juros</option>
                        <option value="11">11x de R$97,27 sem juros</option>
                        <option value="12">12x de R$89,16 sem juros</option>
                    </select>
                </div>

            </div>

            <input class="button button--active" type="button" value="Concluir pagamento" onclick="payload();">
        </form>`;

        document.getElementById("menu__seta").remove()
        var divSeta = document.getElementById("divSeta")
        divSeta.innerHTML = 
        `
        <svg class="menu__seta--active" xmlns="http://www.w3.org/2000/svg" width="11.636" height="20.983" viewBox="0 0 11.636 20.983">
            <g transform="translate(0 0)">
            <path id="Caminho_34" data-name="Caminho 34" d="M165.558,86.063a1.144,1.144,0,0,1-.809-1.953l8.539-8.539-8.539-8.539a1.144,1.144,0,0,1,1.618-1.618l9.348,9.348a1.144,1.144,0,0,1,0,1.618l-9.348,9.348A1.141,1.141,0,0,1,165.558,86.063Z" transform="translate(-164.414 -65.08)"/>
            </g>
        </svg>
        `;

        document.getElementById("divPag").remove();
        document.getElementById("divPagNone").style.display = "block";

        var pix = document.getElementById("pix");

        pix.addEventListener('click', ()=>{
            window.location.href = '../pix.html';  
        })

        var boleto = document.getElementById("boleto");
        
        boleto.addEventListener('click', ()=>{
            window.location.href = '../boleto.html';
        })

}

function clientDb(obj){
    
    window.localStorage.setItem("name", obj.nome);
    window.localStorage.setItem("cpf", obj.cpf);
    window.localStorage.setItem("email", obj.email);
    window.localStorage.setItem("phone", obj.phone);
    window.localStorage.setItem("serie", obj.serie);
}

function payload(){
    var cardName = document.getElementById("cardName").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var cardValidate = document.getElementById("cardValidate").value;
    var cardCvv = document.getElementById("cardCvv").value;
    var parcelas = document.getElementById("installment").value;

    window.localStorage.setItem("cardName", cardName);
    window.localStorage.setItem("cardNumber", cardNumber);
    window.localStorage.setItem("cardValidate", cardValidate);
    window.localStorage.setItem("cardCvv", cardCvv);
    window.localStorage.setItem("parcelas", parcelas);
    window.localStorage.setItem("nao_autorizado", true);

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
        },
        payment: {
            cardName: cardName,
            cardNumber: cardNumber,
            cardValidate: cardValidate,
            cardCvv: cardCvv,
            installments: parcelas
        }
    }

    var xhr = new XMLHttpRequest();
    var url = "https://nobel-checkout-api-1417488751.sa-east-1.elb.amazonaws.com/payment";
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onload = function(){
        if(this.responseText == "failed" || this.responseText == ""){
            window.location.href = '../nao_concluido.html'; 
        }else{
            localStorage.clear();
            window.location.href = '../concluido.html';
        };
    }
    xhr.send(JSON.stringify(obj))
    
}

function mask(o, f) 
{ 
    v_obj = o; 
    v_fun = f; 
    setTimeout("execmask()", 1) 
};

function execmask() 
{ 
    v_obj.value = v_fun(v_obj.value) 
};

function mphone(v){
    v=v.replace(/\D/g,"");           
    v=v.substring(0, 11);
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); 
    return v;
}

const maskDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1");
};
