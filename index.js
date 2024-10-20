var setaparaesquerda = window.document.getElementById("setaparaesquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")
var setaparadireita = window.document.getElementById("setaparadireita")

function rpd() {
   Leonardo.style = "display:none"
   Bruna.style = "display:flex"
   setaparadireita.style = "display:none"
   setaparaesquerda.style = "display:flex;magin-top:55px"
}

function rpe() {
Leonardo.style = "display:flex"
Bruna.style = "display:none"
setaparadireita.style = "display:flex;magin-top:55px"
setaparaesquerda.style = "display:none;magin-top:55px"
}
 
