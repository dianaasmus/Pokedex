let ctx = document.getElementById('myChart'); 

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HP', 'Attack', 'Defense', 'S Attack', 'S Defence', 'Speed'],
        datasets: [{
            label: '# of Votes',
            data: [statHPs[17], 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
    indexAxis: 'y',
  }
});