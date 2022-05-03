
let botao = document.querySelector('#enviarBtn')
let radioBtns = document.querySelectorAll("input[name='tipoCodificacao']");
let resultado = document.getElementById('enviarBtn')
let showPassos = document.querySelector('.chaves')

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

function selecionado(value){
    var dadosLoja = document.getElementsByClassName('dadosLoja');
        if(value === "cifraDeCesar"){
            showPassos.style.display = "flex"
           showPassos.style.flexDirection = 'column'
      }else{
        showPassos.style.display = 'none'
      }
    }

