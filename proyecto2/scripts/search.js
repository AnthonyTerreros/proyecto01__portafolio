//container_animes
const cargarAnimes = () => {
  fetch("http://localhost:5500/api/top_anime.json")
    .then((data) => data.json())
    .then((content) => {
      let arr = content.data;
      const container = document.querySelector("#container_animes");
      arr.forEach((anime) => {
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
        container.innerHTML += template;
      });
    })
    .catch((err) => console.log(err));
};

const filtrador = () => {
  const buscador = document.querySelector("#buscador");
  buscador.addEventListener("keyup", (e) => {
    if (e.target.matches("#buscador")) {
      document.querySelectorAll("#card").forEach((el) => {
        el
          .querySelector("#card-content > a > h5")
          .textContent.toLowerCase()
          .includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter");
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  cargarAnimes();
  filtrador();
});
