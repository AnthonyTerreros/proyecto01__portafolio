const cargarDatos = () => {
  fetch("http://localhost:5500/api/top_anime.json")
    .then((res) => res.json())
    .then((content) => {
      let arr = content.data;
      let cont_anime = document.querySelector("#num_top");
      cont_anime.textContent = arr.length.toString();
      let viewers = document.querySelector("#views");
      viewers.textContent = arr
        .map((elem) => elem.members)
        .reduce((acu, sum) => acu + sum);
      document.querySelector("#num_esp").textContent = arr.map(elem => elem.episodes).reduce((acu, sum) => acu + sum)
      let ratings = []
      let names_anims = [] //title_english
      ratings = arr.slice(0, 5).map(elem => elem.score)
      names_anims = arr.slice(0, 5).map(elem => elem.title_english)
      const data = {
        labels: names_anims,
        datasets: [
          {
            label: "Rating",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: ratings,
          },
        ],
      };
      const config = {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 2
                }
            }
          }
        },
      };
      const myChart = new Chart(
        document.querySelector("#mychart1"),
        config
      );
      let container_table = document.querySelector("#content_table")
      arr.forEach(anime => {
        let { images, title, score, studios, episodes, aired, genres, rank } = anime
        let template = `
        <tr>
            <td data-label="Name">${rank}</td>
            <td class="image-cell">
              <img src="${images.jpg.small_image_url}" alt="${title}" class="h-1.5 w-1.5">
            </td>
            <td data-label="Name">${title}</td>
            <td data-label="Company">${studios[0].name}</td>
            <td data-label="City">${genres[0].name}</td>
            <td data-label="Progress" class="progress-cell">
              ${score}
            </td>
            
            <td class="actions-cell">
              ${episodes}
            </td>
            <td data-label="Created">
              <small class="text-gray-500">${aired.from.split("T")[0]}</small>
            </td>
          </tr>
        `
        container_table.innerHTML += template;
      })
    })
    .catch((error) => console.log(error));
};

document.addEventListener("DOMContentLoaded", () => {
  // alert("Hello, World!")
  cargarDatos();
});


/*


*/