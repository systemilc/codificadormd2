let botao = document.querySelector('#enviarBtn')
let radioBtns = document.querySelectorAll("input[name='tipoCodificacao']");
let resultado = document.getElementById('enviarBtn')
let selecao = document.querySelector('.ocultarPasso').value

let radioSelecionado = () => {
    let selecionado = document.querySelector('input[name="tipoCodificacao"]:checked').value;
  resultado.textContent = `${selecionado}`
  botao.style.display = "block"

}

botao.addEventListener('click', function(event){
    event.preventDefault()


})

radioBtns.forEach(radioBtns => {
    radioBtns.addEventListener('change', radioSelecionado);
})
radioSelecionado()


var selecionar = document.addEventListener('change',  function(){

    
    if(selecao === "cifraDeCesar"){
        showPassos.style.display = "block"
        showPassos.style.flexDirection = 'column'
    
    }else{
        showPassos.style.display = 'none'
    }
    })