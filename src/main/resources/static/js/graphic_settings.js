var graphData = {
    datasets: [{
        lineTension: 0,
        fill: false,
        borderColor: '#00FF7F',
        backgroundColor: 'lightblue',
        pointBorderColor: '#00CED1',
        pointRadius: 2,
        pointHoverRadius: 5,
        pointHitRadius: 10,
        pointBorderWidth: 5,
        pointStyle: 'rectRounded'
    }]
};

var graphOptions = {
    legend: {
        display: true,
        position: 'top',
        labels: {
            boxWidth: 10,
            fontSize: 15,
            fontColor: '#EBECF4'
        }
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: "grey"
            },
            ticks: {
                fontSize: 13,
                fontColor: '#EBECF4',
                maxTicksLimit: 10
            }
        }],
        yAxes: [{
            gridLines: {
                color: "grey",
                borderDash: [2, 5],
            },
            ticks: {
                fontSize: 13,
                fontColor: '#EBECF4',
                display: true
            }
        }]
    },
    spanGaps: true,
    responsive: true,
    maintainAspectRatio: false
};