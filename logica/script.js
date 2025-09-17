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