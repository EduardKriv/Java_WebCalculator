var graphData = {
    datasets: [{
        borderColor: '#00FF7F',
        backgroundColor: 'lightblue',
//        pointBorderColor: '#00CED1',
    }]
};

var ticksOptions = { size: 13, color: '#EBECF4' };

var graphOptions = {
    plugins: { legend: { labels: { color: 'white' } } },
    scales: {
        x: { ticks: ticksOptions },
        y: { ticks: ticksOptions, offset: true },
    },
    spanGaps: false,
    maintainAspectRatio: false
};

var creditGraphOptions = {
    plugins: {
        legend: {
             display: true,
             position: 'right',
             labels: {
                 color: 'white'
             }
        }
    }
};

var creditData = {
    labels: ["Кредит", "Проценты"],
    datasets: [{
        backgroundColor: ["#00FF7F", "#00CED1"],
        borderWidth: 0
    }]
};




