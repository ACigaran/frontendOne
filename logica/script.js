function mostrarOcultar(prefijo) {
    const divsVisibles = document.getElementsByClassName(prefijo + "Visible");
    const divsOcultos = document.getElementsByClassName(prefijo + "No-visible");
    
    const visible = divsVisibles[0].style.display === "none"

    for (const div of divsVisibles) div.style.display = visible ? "block" : "none" 
    for (const div of divsOcultos) div.style.display = visible ? "none" : "block"
}

function scrollCentrado(event, id) {
  event.preventDefault(); 
  const element = document.getElementById(id);
  const mS = id === 'matiasSeccion' 
    element.scrollIntoView({
    behavior: "smooth", 
    block: mS ? "center" : "start"    
  });


}


let idEscribir

function escribirConDelay() {
  const texto = ("Nose que escribir aca la verdad pero queria meter alguna animacion asi que bueno...\n"+
    "— ¿Por qué los programadores siempre confunden la Navidad con Halloween?\n"+
    "— Porque null siempre es un regalo inesperado. 🎁💻\n"
  );
  const parrafo = document.getElementById("matias-parrafo");
  let index = 0;
  clearTimeout(idEscribir)
  parrafo.textContent = ""
  escribir(texto, parrafo, index)
}

function escribir(texto, parrafo, index){
    if (index < texto.length) {
        parrafo.textContent += texto[index];
        index++;
        idEscribir = setTimeout(() => escribir(texto, parrafo, index), 65)
    }
}

function formularioEnviado(){
    alert("Formulario enviado con éxito ✅");
}