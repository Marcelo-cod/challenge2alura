
//Declarações de constantes e variáveis

let pageOne = document.querySelector(".page-one");
let pageTwo = document.getElementById("page-two").style.display = "none";
let pageThree = document.querySelector(".page-three").style.display = "none";
let adicionarPalavra = document.getElementById("adiciona");
let palavras = ["cachorro", "alura", "gato", "labora", "elefante",
 "one", "java", "sprint", "oracle", "challenge", "casa", "carro"];
 let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

const letrasCertas = [];
const letrasErradas = [];

let display = document.getElementById("display");

function checaInput(letra){
    letra = letra.toLowerCase()
    if(letrasErradas.includes(letra)){
        
    }else{
        if(palavraSecreta.includes(letra)){
            letrasCertas.push(letra);
            
        }else{
            letrasErradas.push(letra);
            
        }
    }
   atualizaJogo();
}

function isLetra(codigo) {
    
    return codigo >= 65 && codigo <= 90;
}

function atualizaJogo(){
    
    mostraLetrasErradas();
    mostrarLetrasCertas();
    desenhaForca();
    verificaresultado();
}

function mostraLetrasErradas(){
    const conteinerErro = document.querySelector(".letras-erradas");
    conteinerErro.innerHTML = "";
    letrasErradas.forEach(letra => {
        conteinerErro.innerHTML += "  " + letra;
    });
}

function mostrarLetrasCertas() {
    
    const container = document.querySelector(".letras-certas");
    container.innerHTML ="";
    palavraSecreta.split("").forEach(letra => {
          
        if(letrasCertas.includes(letra)) {
            container.innerHTML += letra;
            
        }else {
            container.innerHTML +=" _" ;
            
        }
        
    })
}

function verificaresultado(){
    const container = document.getElementById("display").innerText;
    const parteCorpo = document.querySelectorAll(".forca-parte");
    
    let mensagem = "";
    
    if(palavraSecreta.toUpperCase() === container){
               
        document.querySelector(".page-three").style.display = "none";
        mensagem = "Você Venceu." +"<br><br>"+ " Parabéns!";
        document.getElementById("popu").style.color = "#15f409";
    }
   
    if(letrasErradas.length === parteCorpo.length){
        mensagem = "Fim de Jogo, você perdeu." + "<br><br>" + "A palavra secreta é: " + "<br><br>" + "[ "+ palavraSecreta.toLocaleUpperCase() + " ]";
        document.querySelector(".page-three").style.display = "none";
        document.getElementById("popu").style.color = "#bc1b68";
              
    }
       
    if(mensagem){
        document.querySelector("#mensagem").innerHTML = mensagem;
        document.querySelector(".mensagem-popup").style.display = "flex";
    }
}

function desenhaForca() {
    const parteCorpo = document.querySelectorAll(".forca-parte");
    for(let i = 0; i < letrasErradas.length; i++){
        parteCorpo[i].style.display = "block";
    }
}
    
function comecarJogo() {
    pageOne.style.display = "none";
    pageThree = document.querySelector(".page-three").style.display = "block";
    atualizaJogo();

    document.addEventListener("keydown", (event) => {
    if(isLetra(event.keyCode)){
            checaInput(event.key);
        }
     })

    const btn = document.querySelectorAll(".letras-teclado");

    btn.forEach(function(button) {
      button.addEventListener('click', function(){ 
        checaInput(button.innerHTML)
      });
    });
    console.log(palavras);
    console.log(palavraSecreta);
}

 function salvarPalavra(){
     
    let palavra = document.querySelector(".textarea-palavra");
    
    if(palavra.value == ""){
       alert("Digite uma palavra ou frase:"); 
    }else{
        palavras.push(palavra.value);
        document.getElementById("page-two").style.display = "none";
        document.querySelector(".page-three").style.display = "block";
        comecarJogo();
    }
}

function adicionaPalavra() {
    pageOne.style.display = "none";
    pageTwo = document.getElementById("page-two").style.display = "block";
    document.getElementById("texto").focus();
     
}

function cancelarPalavra() {
    pageTwo = document.getElementById("page-two").style.display = "none";
    pageOne.style.display = "block";
    
}

function desistir(){
    pageThree = document.querySelector(".page-three").style.display = "none";
    pageOne.style.display = "block";
    window.location.reload();
 
}

function novoJogo(){
    window.location.reload();
       
}
