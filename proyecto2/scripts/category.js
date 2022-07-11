const cargarSelect = () => {
    fetch("http://localhost:5500/api/generos.json")
    .then(res => res.json())
    .then(content => {
        const selector = document.querySelector("#selector_anime")
        let arr = content.data
        arr.forEach(genero => {
            let { name, mal_id } = genero
            let template = `
            <option id="${mal_id}"> ${name} </option>
            `
            selector.innerHTML += template
        })
    })
    .catch(error => console.log(error))
}

document.querySelector("#selector_anime").addEventListener("change", () => {
    fetch("http://localhost:5500/api/top_anime.json")
    .then((data) => data.json())
    .then((content) => {
        let arr = content.data
        const container_data = document.querySelector("#container_data") 
        container_data.innerHTML = ""
        arr.forEach(anime => {
            let { genres } = anime
            let results = genres.map(genre => genre.name)
            if(results.includes(document.querySelector("#selector_anime").value)) {
                let { title, images, title_synonyms, duration, rating } = anime;
                let template = `
                <div id="card" class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="h-64 mt-4 mx-auto" src="${
                        images.jpg.image_url
                    }" alt="${title}" />
                </a>
                <div id="card-content" class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
                    </a>
                    <p class="font-normal text-gray-700 dark:text-gray-400">${
                        title_synonyms ? " " : title_synonyms
                    }</p>
                    <div class="mt-2 flex justify-around gap-3">
                    <span class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        ${duration}
                    </span>
                    <span class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        ${rating}
                    </span>
                    </div>
                </div>
                </div>
                `;
                container_data.innerHTML += template
            }
            if(document.querySelector("#container_data").children.length < 1) {
                let template = `<h4 class="text-center text-2xl text-blue-500"> No se encontro resultados :(. <h4>`
                document.querySelector("#message_data").innerHTML = template
            }else {
                document.querySelector("#message_data").textContent = "" 
            }
            
        })
    })
    .catch(err => console.log(err))
})

document.addEventListener("DOMContentLoaded", () => {
    cargarSelect()
})