
(() => {
  'use strict'
  /* globals Chart:false, feather:false */

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  const ctx = document.getElementById('myChart')

  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'column',
    data: {
        labels:[1,2,3,4,5,6,7],
        datasets: [{
          data: [
              
              21345,
              18483,
              24003,
              23489,
              24092,
              12034
            ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        },
      {
        data: [
          50000,
          25345,
          12483,
          29003,
          28489,
          21092,
          22034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#F56B26',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: true
      }
    }
  })
})()
