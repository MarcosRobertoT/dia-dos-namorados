let secao = 1;
const secoes = document.querySelectorAll(".partes")
const download = ()=>{
    const a =document.createElement("a");
    a.style.display="none";
    document.body.appendChild(a);
    return (nome)=>{
        a.href = "../certificado.pdf";
        a.download = nome;
        a.click();
    }
}

secoes.forEach((entry)=>{
    if(entry.id == (`p${secao}`)){
        entry.classList.add("aparecer")
    } else{
        entry.classList.remove("aparecer")
    }
})

function atualiza(){
    secoes.forEach((entry)=>{
        if(secao < 5){
            if(entry.id == (`p${secao}`)){
                entry.classList.add("aparecer")
                Swal.fire("Acertou!! bora para a próxima");
            } else{
                entry.classList.remove("aparecer")
            }
        } else {
            entry.classList.remove("aparecer")
            document.querySelector("button").removeAttribute("hidden")
            document.getElementById("certificadoD").style.display = "flex";
            Swal.fire("Acabou! Você venceu. Pegue seu premio");
        } 
    })
}

function errou(){
    Swal.fire("Errou! Tente novamente");
}

function premio(){
    download()("certificado")
}

function acertou(){
    secao = secao + 1;
    atualiza()
}

