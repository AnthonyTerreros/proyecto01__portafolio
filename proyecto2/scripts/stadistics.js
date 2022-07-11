const cargarGraficos = () => {
    fetch("http://localhost:5500/api/top_anime.json")
    .then(res => res.json())
    .then(content => {
        let arr = content.data
        let animes_names = arr.slice(0,5).map(anime => anime.title)
        let popularities = arr.slice(0,5).map(anime => anime.popularity)
        const data = {
            labels: animes_names,
            datasets: [{
              label: "Popularidad",
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)'
              ],
              borderWidth: 1,
              data: popularities,
            }]
        };
        const config = {
            type: 'bar',
            data,
            options: {
              indexAxis: 'y',
              scales: {
                y: {
                  ticks: {
                    crossAlign: 'far',
                  }
                }
              }
            }
        };
        
        let chart1 = new Chart(
            document.querySelector("#mychart1"),
            config
        );

        //Chart2
        let num_episodios = arr.slice(0, 7).map(anime => anime.episodes)
        let names = arr.slice(0, 7).map(anime => anime.title)
        const data2 = {
            labels: names,
            datasets: [{
              label: "Episodios",
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(10, 182, 235, 0.2)',
                'rgba(40, 42, 210, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgba(10, 182, 235)',
                'rgba(40, 42, 210)'
              ],
              borderWidth: 1,
              data: num_episodios,
            }]
        };
        const config2 = {
            type: 'doughnut',
            data: data2,
        };

        let chart2 = new Chart(
            document.querySelector("#mychart2"),
            config2
        );
        //members
        let views = arr.slice(0, 7).map(anime => anime.members)
        const data3 = {
            labels: names,
            datasets: [{
              label: 'Espectadores',
              data: views,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            }]
          };
          const config3 = {
            type: 'bar',
            data: data3,
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            },
          };  
          let chart3 = new Chart(
            document.querySelector("#mychart3"),
            config3
        );
        //Chart4
        let num_productores = arr.slice(0, 5).map(anime => anime.producers.length)
        const data4 = {
            labels: animes_names,
            datasets: [{
              label: 'Productores',
              data: num_productores,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ]
            }]
          };
          const config4 = {
            type: 'polarArea',
            data: data4,
            options: {}
          };
          let chart4 = new Chart(
            document.querySelector("#mychart4"),
            config4
        );
    })
    .catch(error => console.log(error))
}

document.addEventListener("DOMContentLoaded", () => {
    cargarGraficos()
})