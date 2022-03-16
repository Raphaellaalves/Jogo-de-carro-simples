const carro = document.getElementById("carro");
const obstaculo = document.getElementById("obstaculo");

// função de pular 

function pula() {
    if (carro.classList != "pula") {
        carro.classList.add("pula")
        setTimeout(function(){
            carro.classList.remove("pula"); 
        }, 400);
    }
}

document.addEventListener("click", function(event){
    pula();
})

let espaço = setInterval(function(){
    let carroTop = parseInt(window.getComputedStyle(carro).getPropertyValue("top"));
    let obstaculoEsquerda = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"));

    // bate ou nao
    if (obstaculoEsquerda <60 && obstaculoEsquerda > 0 && carroTop >= 100) {
        alert("Fim de jogo!");
        document.location.reload(true);
    }
}, 10);
