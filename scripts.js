function calcular() {

    var metrosCubiertos = parseFloat(document.getElementById("metrosCubiertos").value) || 0;
    var metrosGaleria = parseFloat(document.getElementById("metrosGaleria").value) || 0;
    var metrosPergola = parseFloat(document.getElementById("metrosPergola").value) || 0;

    // ===== LINEA BASE =====
    var obraGris = 
        (metrosCubiertos * 400000) +
        (metrosPergola * 120000) +
        (metrosGaleria * 250000);

    var llaveEnMano = 
        (metrosCubiertos * 750000) +
        (metrosPergola * 250000) +
        (metrosGaleria * 450000);

    // ===== WOODFRAME 2x4 =====
    var woodframeGris = 
        (metrosCubiertos * 500000) +
        (metrosPergola * 120000) +
        (metrosGaleria * 250000);

    var woodframeLlave = 
        (metrosCubiertos * 900000) +
        (metrosPergola * 250000) +
        (metrosGaleria * 450000);

    // Mostrar resultados
    document.getElementById("resultadoObraGris").innerText = "$ " + obraGris.toLocaleString('es-AR');
    document.getElementById("resultadoLlaveEnMano").innerText = "$ " + llaveEnMano.toLocaleString('es-AR');
    document.getElementById("resultadoWoodframeGris").innerText = "$ " + woodframeGris.toLocaleString('es-AR');
    document.getElementById("resultadoWoodframeLlave").innerText = "$ " + woodframeLlave.toLocaleString('es-AR');
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
}