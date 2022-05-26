
//Declarações de constantes e variáveis

let pageOne = document.querySelector(".page-one");
let pageTwo = document.getElementById("page-two").style.display = "none";
let pageThree = document.querySelector(".page-three").style.display = "none";
let adicionarPalavra = document.getElementById("adiciona");
// const maximoLetras = document.querySelector(".maximo-letras").style.display = "none";
// const salvarPalavra = document.querySelector(".salvar-palavra").style.display = "none";
// const cancelarJogo = document.querySelector(".cancelar").style.display = "none";
// const teaPalavra = document.querySelector(".textarea-palavra").style.display = "none";
const palavras = ["cahorro", "alura", "gato", "labora", "elefante",
 "thor", "scooby", "nenem", "oracle"];
 const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
 const letrasCertas = [];
 const letrasErradas = [];

 document.addEventListener("keydown", (event) => {
     const codigoLetra = event.keyCode; 
     if(isLetra(codigoLetra)){
         const letra = event.key;
         if(letrasErradas.includes(letra)){
             mostrarAvisoLetra();
         }else{
             if(palavraSecreta.includes(letra)){
                 letrasCertas.push(letra);
             }else{
                 letrasErradas.push(letra);
             }
         }
        atualizaJogo();
     }
 })

//Funções

function atualizaJogo(){
    mostraLetrasErradas();
    mostrarLetrasCertas();
    desenhaForca();

}

function mostraLetrasErradas(){
    const div = document.querySelector(".letras-erradas");
    div.innerHTML = "";
    letrasErradas.forEach(letra => {
        div.innerHTML += "  " + letra;
    });
}

function mostrarLetrasCertas() {
    const container = document.querySelector(".letras-certas");
    container.innerHTML = "";
    palavraSecreta.split("").forEach(letra => {
        if(letrasCertas.includes(letra)) {
            container.innerHTML += " " + letra;
            
        }else {
            container.innerHTML += "  " + " _" ;
            
        }
    })
}

function desenhaForca() {
    const parteCorpo = document.querySelectorAll(".forca-parte");
    for(let i = 0; i < letrasErradas.length; i++){
        parteCorpo[i].style.display = "block";
    }
}

function mostrarAvisoLetra(){
    const aviso = document.querySelector(".aviso");
    aviso.classList.add("show");
    setTimeout(() => {
        aviso.classList.remove("show");

    }, 1000);

}

function isLetra(codigo) {
    return codigo >= 65 && codigo <= 90;
}

    
function comecarJogo() {
    pageOne.style.display = "none";
    pageThree = document.querySelector(".page-three").style.display = "block";
    atualizaJogo();
    console.log(palavraSecreta);
    

    
}

function adicionaPalavra() {
    pageOne.style.display = "none";
    pageTwo = document.getElementById("page-two").style.display = "block";
    document.getElementById("texto").focus();
     
}

function cancelarPalavra() {
    //pageTwo.style.display = "none";
    pageTwo = document.getElementById("page-two").style.display = "none";
    pageOne.style.display = "block";
    
}

function desistir(){
    pageThree = document.querySelector(".page-three").style.display = "none";
    pageOne.style.display = "block";

}
