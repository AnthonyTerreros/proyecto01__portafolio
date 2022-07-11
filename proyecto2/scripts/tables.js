const cargarPersonajes = () => {
    fetch("http://localhost:5500/api/characters.json")
    .then(res => res.json())
    .then(content => {
        console.log(content.data)
        let arr = content.data
        let container = document.querySelector("#container_table_characters")
        let num = 1
        arr.forEach(character => {
            let { name, images, nicknames, about } = character
            console.log(images)
            
            let template = `<tr>
            <td> ${num} </td>
            <td class="">
                <img src="${images.jpg.image_url}" class="image h-1.5 w-1.5">
            </td>
            <td data-label="Name">${name}</td>
            <td data-label="Nickname">${nicknames[0] == undefined ? "No tiene." : nicknames[0]}</td>
            <td data-label="Height">${about.substring(0, 600)}...</td>
          </tr>`
          num++;
          container.innerHTML += template
        
        })
    })
    .catch(err => console.log(err))
}

document.addEventListener("DOMContentLoaded", () => {
    cargarPersonajes()
})
