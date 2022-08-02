console.log("JavaScript funguje!");

let vizualniHlavniOdstavec = document.querySelector(".hlavni-odstavec");
vizualniHlavniOdstavec.textContent = "Domovská stránka"

let vizualniMojeFoto = document.querySelector(".moje-foto");
vizualniMojeFoto.src = "img/druhe-foto.jpeg"

let vzdelani = document.querySelector(".vzdelani")
vzdelani.textContent = "Školy"

let predstaveniSe = document.querySelector(".predstaveni-se")
predstaveniSe.style.color = "#0000FF"

function pridejZvyrazneni() {
    let vizualniTlacitko = document.querySelector("tlacitko1");
    vizualniTlacitko.classList.add("zvyrazneny")
}
