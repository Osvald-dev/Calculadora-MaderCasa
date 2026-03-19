function calcular() {

    var metrosCubiertos = parseFloat(document.getElementById("metrosCubiertos").value) || 0;
    var metrosGaleria = parseFloat(document.getElementById("metrosGaleria").value) || 0;
    var metrosPergola = parseFloat(document.getElementById("metrosPergola").value) || 0;

    // ===== LINEA BASE =====
    var obraGris = 
        (metrosCubiertos * 300000) +
        (metrosPergola * 80000) +
        (metrosGaleria * 120000);

    var llaveEnMano = 
        (metrosCubiertos * 600000) +
        (metrosPergola * 200000) +
        (metrosGaleria * 350000);

    // ===== WOODFRAME 2x4 =====
    var woodframeGris = 
        (metrosCubiertos * 550000) +
        (metrosPergola * 80000) +
        (metrosGaleria * 120000);

    var woodframeLlave = 
        (metrosCubiertos * 800000) +
        (metrosPergola * 200000) +
        (metrosGaleria * 350000);

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