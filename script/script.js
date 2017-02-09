/**
 * Created by Mamun Morshed on 2/9/2017.
 */


var chartone = document.querySelectorAll('.chartone')[0];
new Chart(chartone, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[{
            label: '# of votes',
            data: [12, 19, 2, 5, 3, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            bordeWidth: 1
        }]
    },
    options: {
        responsive: true,
        legend: {
            labels:{
                fontStyle: "italic"
            }
        },
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var charttwo = document.querySelectorAll('.charttwo')[0];
new Chart(charttwo, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[{
            label: '# of votes',
            data: [12, 19, 2, 5, 3, 3],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2
        }]
    },
    options: {
        title:{
            display: true,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: false,
            position:'bottom'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartthree = document.querySelectorAll('.chartthree')[0];
new Chart(chartthree, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[{
            label: '# of votes',
            data: [12, 19, 2, 5, 3, 3],
            fill: false,
            pointRadius: 0,
            borderColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 3
        }]
    },
    options: {
        title:{
            display: true,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: false,
            position:'bottom'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

var chartfour = document.querySelectorAll('.chartfour')[0];
new Chart(chartfour, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[{
            label: '# of votes',
            data: [12, 19, 2, 5, 3, 3],
            fill: true,
            pointRadius: 0,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 0)',
            borderWidth: 1
        }]
    },
    options: {
        title:{
            display: true,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: false,
            position:'bottom'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

