const cargarDatos = () => {
  fetch("https://api.jikan.moe/v4/top/anime")
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
        let { } = anime
      })
    })
    .catch((error) => console.log(error));
};

document.addEventListener("DOMContentLoaded", () => {
  // alert("Hello, World!")
  cargarDatos();
});


/*
<tr>
            <td class="image-cell">
              <div class="image">
                <img src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg" class="rounded-full">
              </div>
            </td>
            <td data-label="Name">Rebecca Bauch</td>
            <td data-label="Company">Daugherty-Daniel</td>
            <td data-label="City">South Cory</td>
            <td data-label="Progress" class="progress-cell">
              <progress max="100" value="79">79</progress>
            </td>
            <td data-label="Created">
              <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
            </td>
            <td class="actions-cell">
              
            </td>
          </tr>

*/