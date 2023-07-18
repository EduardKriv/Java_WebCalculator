const graphData = {
    datasets: [{
        borderColor: '#00FF7F',
        backgroundColor: 'lightblue',
//        pointBorderColor: '#00CED1',
    }]
};

const ticksOptions = { size: 13, color: '#EBECF4' };

const graphOptions = {
    plugins: { legend: { labels: { color: 'white' } } },
    scales: {
        x: { ticks: ticksOptions },
        y: { ticks: ticksOptions, offset: true },
    },
    spanGaps: false,
    maintainAspectRatio: false
};

const creditGraphOptions = {
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

const creditData = {
    labels: ["Кредит", "Проценты"],
    datasets: [{
        backgroundColor: ["#00FF7F", "#00CED1"],
        borderWidth: 0
    }]
};




