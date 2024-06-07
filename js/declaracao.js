const observador =new IntersectionObserver((entries)=>{
    entries.forEach((elemento)=>{
        if(elemento.isIntersecting){
            elemento.target.classList.add('show')
        } else {
            elemento.target.classList.remove('show')
        }
    })
});

const elementos = document.querySelectorAll('.particoes');

elementos.forEach((elemento)=>{
    observador.observe(elemento);
})

function voltar(){
    window.location.href = "../index.html";
}