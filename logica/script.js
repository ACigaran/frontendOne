function mostrarEstadisticas(){
    const divVisible = document.getElementById("visible");
    const divVisible1 = document.getElementById("visible1");
    const divOculto = document.getElementById("no-visible");
    const divOculto1 = document.getElementById("no-visible1");
    
    if (divVisible.style.display === "none" && divVisible1.style.display === "none") {
        divVisible.style.display = "block"; // Muestra el div visible
        divVisible1.style.display = "block"; // Muestra el div visible
        divOculto.style.display = "none";   // Oculta el div oculto
        divOculto1.style.display = "none";   // Oculta el div oculto
    } else {
        divVisible.style.display = "none";  // Oculta el div visible
        divVisible1.style.display = "none";  // Oculta el div visible
        divOculto.style.display = "block";  // Muestra el div oculto
        divOculto1.style.display = "block";  // Muestra el div oculto
    }
}