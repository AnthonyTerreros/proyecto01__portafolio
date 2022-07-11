const cargarGraficos = () => {
    fetch("http://localhost:5500/api/generos.json")
    .then(res => res.json())
    .then(content => {
        let arr = content.data
        console.log(arr)
    })
    .catch(error => console.log(error))
}

document.addEventListener("DOMContentLoaded", () => {
    cargarGraficos()
})