const cargarDatos = () => {
    fetch("https://api.jikan.moe/v4/top/anime")
    .then(res => res.json())
    .then(json => {
        console.log(json.data)
    })
    .catch(error => console.log(error))
}

document.addEventListener("DOMContentLoaded", () => {
    // alert("Hello, World!")
    // cargarDatos()
})

