let valor = 0;
let placar =0;
let placarM = 0;

function aleatorio(min, max) {
    return parseInt(( Math.random() * (max - min) + min).toFixed());
}

function comprar(){
    let n1 = aleatorio(1, 10);
    valor = valor + n1;
    document.getElementById("valor").innerHTML = valor;
    if (valor > 21) {
        Swal.fire(`Você estourou! Você comprou o número ${n1} e agora possui ${valor}`);
        document.getElementById("comprar").setAttribute("hidden", "");
        document.getElementById("parar").setAttribute("hidden", "");
        document.getElementById("novamente").removeAttribute("hidden", "");
        placarM = placarM + 1;
        document.getElementById("placarM").innerHTML = placarM;
        return
    } 
    Swal.fire(`Você comprou o número ${n1}`);
}

function parar(){
    let n1 = aleatorio(6,10);
    let n2 = aleatorio(6,10);
    let soma = n1+n2;
    document.getElementById("valorM").innerHTML = soma;
    document.getElementById("n1").innerHTML = n1;
    document.getElementById("n2").innerHTML = n2;
    console.log(n1 + n2)

    if(soma > valor){
        Swal.fire(`Perdeu! A máquina fez ${soma} e você ${valor}`);
        placarM = placarM + 1;
        document.getElementById("placarM").innerHTML = placarM;
    } else if(soma == valor){
        Swal.fire(`Empate! A máquina fez ${soma} e você também fez ${valor}`);
    } else{
        Swal.fire(`Ganhoou! A máquina fez ${soma} e você ${valor}`);
        placar = placar + 1;
        document.getElementById("placar").innerHTML = placar
    }
    document.getElementById("comprar").setAttribute("hidden", "");
    document.getElementById("parar").setAttribute("hidden", "");
    document.getElementById("novamente").removeAttribute("hidden", "");
}

function jogarNovamente() {
    valor = 0;
    document.getElementById("valorM").innerHTML = 0;
    document.getElementById("n1").innerHTML = "?"
    document.getElementById("n2").innerHTML = "?"
    document.getElementById("valor").innerHTML = valor;
    document.getElementById("comprar").removeAttribute("hidden");
    document.getElementById("parar").removeAttribute("hidden");
    document.getElementById("novamente").setAttribute("hidden", "");
}

function finalizar(){
    if(placarM == 0 && placar == 0){
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
    else if(placarM > placar) {
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
        }, 6500)
    } else if(placarM == placar) {
        Swal.fire("Empate! Que pena... Não ganhou, mas não perdeu nada também");
        setTimeout(function() {
            window.location.href = "../index.html"
        }, 6500)
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
        }, 6500)
    }
}

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