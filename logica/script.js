function mostrarOcultar(prefijo) {
    const divVisible = document.getElementById(prefijo + "Visible");
    const divVisible1 = document.getElementById(prefijo + "Visible1");
    const divOculto = document.getElementById(prefijo + "No-visible");
    const divOculto1 = document.getElementById(prefijo + "No-visible1");
    
    if (divVisible.style.display === "none" && divVisible1.style.display === "none") {
        divVisible.style.display = "block";
        divVisible1.style.display = "block";
        divOculto.style.display = "none";
        divOculto1.style.display = "none";
    } else {
        divVisible.style.display = "none";
        divVisible1.style.display = "none";
        divOculto.style.display = "block";
        divOculto1.style.display = "block";
    }
}