

var modelGraph = document.getElementById('graphic');
var graphView = modelGraph.getContext('2d');

function roundDataX(data, accuracy) {
    var coef = Math.pow(10, accuracy);
    for (var x in data) {
        data[x] = Math.round(data[x] * coef) / coef;
    }
    return data;
}
var graphic = new Chart(graphView);

function drawGraphPoints(expr, min, max, step) {
    if (expr == "") return;

    graphView.clearRect(0, 0, modelGraph.width, modelGraph.height);
//    graphView.restore();
    graphic.destroy();

    getGraphPoints(expr, min, max, step).then((resp) => {
        graphData.labels = roundDataX(resp[0], 3);
        graphData.datasets[0].data = resp[1];
        graphData.datasets[0].label = expr;

        graphic = new Chart(graphView, {
                          type: 'line',
                          data: graphData,
                          options: graphOptions
        });
    });


//    graphView.update();
//    document.getElementById('graph-area').appendChild(modelGraph);
}

function clearGraph() {
//    console.log("CLEAR!");
    graphView.clearRect(0, 0, modelGraph.width, modelGraph.height);
//    graphView.restore();
//
//    document.getElementById('graph-area').removeChild(modelGraph);
    graphic.destroy();
}
