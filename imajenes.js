let cartas = document.querySelectorAll("flex>img")

cartas.forEach(img =>{
    ima.addEventListener("click",() => {
        removeActiveClasses()
        img.classList.add("active")
    })
})
function removeActiveClasses(){
    imagenes.forEach(imagenes =>{
        imagenes.classList.remove("active")
    })
}



