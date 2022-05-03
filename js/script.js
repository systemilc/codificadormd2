var showPassos = document.querySelector(".chaves")
var entradaDeTexto = document.querySelector('#entradaDeTexto')
var saidadaDeTexto = document.querySelector('#saida')
var radio = document.querySelectorAll('.codificar')
var passos = document.getElementById("passos")
var botao = document.getElementById('botao')
let radioBtns = document.querySelectorAll("input[name='tipo_acao']");
let radioSelecionado = () => {
    let selecionado = document.querySelector('input[name="tipo_acao"]:checked').value;
    botao.textContent = `${selecionado}`
    botao.style.display = "block"
}

botao.addEventListener('click', function(event){
    event.preventDefault()
    var tipoCodigo = document.querySelector("#tipoCodigo").value


    if(radio[0].checked && tipoCodigo == 'asci'){
        var valTexto = entradaDeTexto.value.split('')
        var valPassos = parseInt(passos.value)
        saidadaDeTexto.value = encriptar(valTexto, valPassos) 
       
    }else if(radio[1].checked && tipoCodigo == 'asci'){
        var valTexto = entradaDeTexto.value.split('')
        var valPassos = parseInt(passos.value)
        saidadaDeTexto.value = descriptar(valTexto, valPassos)
    }
    
    else if(radio[0].checked && tipoCodigo == "base64"){
        var valTexto = entradaDeTexto.value
        saidadaDeTexto.value = btoa(valTexto)
    }else if(radio[1].checked && tipoCodigo == "base64"){
        var valTexto = entradaDeTexto.value
        saidadaDeTexto.value = atob(valTexto)
    }
    

})
    


selecionar = document.addEventListener('change',  function(){

var selecao = document.querySelector('#tipoCodigo').value
if(selecao === "asci"){
    showPassos.style.display = "flex"
    showPassos.style.flexDirection = 'column'

}else{
    showPassos.style.display = 'none'
}
})


function encriptar(entrada, passos){
    return entrada.map((str)=>{
        var codificador = str.charCodeAt()
        if(codificador >=65 && codificador <=90){
                return String.fromCharCode(((codificador-65 +passos)%26)+65)
        }else if(codificador >=97 && codificador <=122){
            return String.fromCharCode(((codificador-97 +passos)%26)+97)
        }else{
            return str
        }
   
    }


    ).join('')
}

function descriptar(entrada, passos){
    return entrada.map((str)=>{
        var codificador = str.charCodeAt()
        if(codificador >=65 && codificador <=90){
                return String.fromCharCode(((codificador-90 -passos)%26)+90)
        }else if(codificador >=97 && codificador <=122){
            return String.fromCharCode(((codificador-122 -passos)%26)+122)
        }else{
            return str
        }
   
    }


    ).join('')
}


radioBtns.forEach(radioBtns => {
    radioBtns.addEventListener('change', radioSelecionado);
})

function selecionado(value){
    var dadosLoja = document.getElementsByClassName('dadosLoja');
        if(value === "asci"){
            showPassos.style.display = "flex"
           showPassos.style.flexDirection = 'column'
      }else{
        showPassos.style.display = 'none'
      }
    }
