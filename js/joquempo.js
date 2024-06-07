let maquina = 0;
let ju = 0;

function retornar(){
    Swal.fire({
        title: "Tem certeza que quer voltar? 🤨",
        text: "Joga uma partida aí, lek",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Quero voltar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Ok! Vamos embora",
                text: "Voltando para a página inicial. Você será redirecionada em alguns segundos",
                icon: "success"
            });
            setTimeout(function() {
                window.location.href = "../index.html"
            }, 5000)
        }
    });
}

function finalizar(){
    if(maquina == 0 && ju == 0){
        Swal.fire({
            title: "Tem certeza? 😔",
            text: "Você não jogou nenhuma partidinha. Fica aí, pô",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, eu quero ir embora"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Ok! Vamos embora",
                    text: "Voltando para a página inicial. Você será redirecionada em alguns segundos",
                    icon: "success"
                });
                setTimeout(function() {
                    window.location.href = "../index.html"
                }, 5000)
            }
        });
    }
    else if(maquina > ju) {
        Swal.fire({
            title: "Perdeu!",
            text: "Tá me devendo pelo menos uns 10 beijinhos 🥰",
            imageUrl: "../img/eu+ju.jpg",
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: "Marcos e Julia"
        });
        setTimeout(function() {
            window.location.href = "../index.html"
        }, 8000)
    } else if(maquina == ju) {
        Swal.fire("Empate! Que pena... Não ganhou, mas não perdeu nada também");
        setTimeout(function() {
            window.location.href = "../index.html"
        }, 8000)
    } else {
        Swal.fire({
            title: "Ganhou!",
            text: "Estou te devendo uma prenda agora 😒",
            imageUrl: "../img/eu+ju.jpg",
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: "Marcos e Julia"
        });
        setTimeout(function() {
            window.location.href = "../index.html"
        }, 8000)
    }
}

function aleatorio(min, max) {
    return( Math.random() * (max - min) + min).toFixed();
}
function reset(){
    document.getElementById("opcoesM").style.display = "none";
    document.getElementById("pedra").setAttribute("hidden", "")
    document.getElementById("papel").setAttribute("hidden", "")
    document.getElementById("tesoura").setAttribute("hidden", "")
}
function resultado(opcao, ma){
    if ((opcao == 0 && ma == 1) || (opcao==1 && ma==2) || (opcao==2 && ma==0)) {
        maquina = maquina + 1
        document.getElementById("ma").innerHTML = maquina
    } else if(opcao == ma) {
        Swal.fire("Empate!");
    } else {
        ju = ju + 1;
        document.getElementById("ju").innerHTML = ju
    }
}
function jogar(opcao){
    reset()
    let ma = aleatorio(0,2);
    let opcoes = ["pedra", "papel", "tesoura"]
    document.getElementById(opcoes[ma]).removeAttribute("hidden")
    document.getElementById("opcoesM").style.display = "flex"
    resultado(opcao, ma)
}