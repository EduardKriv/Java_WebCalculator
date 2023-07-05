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

var creditGraphOptions = {
    legend: {
        display: true,
        position: 'right',
        labels: {
            boxWidth: 20,
            fontSize: 14,
            fontColor: '#EBECF4'
        }
    },
    scales: {
        xAxes: [{
            gridLines: { display: false },
            ticks: { display: false }
        }],
        yAxes: [{
            gridLines: { display: false },
            ticks: { display: false }
        }]
    }
};

var creditData = {
    labels: ["Кредит", "Проценты"],
    datasets: [{
        backgroundColor: ["#00FF7F", "#00CED1"],
        borderWidth: 0
    }]
};