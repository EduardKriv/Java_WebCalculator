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

    clearGraph(graphView, modelGraph, graphic);


    getGraphPoints(expr, min, max, step).then((resp) => {
        graphData.labels = roundDataX(resp[0], 3);

        graphData.datasets[0].data = resp[1];
        graphData.datasets[0].label = expr;

        graphOptions.scales.y.min = 0;
        graphOptions.scales.y.max = 100;

        graphic = new Chart(graphView, {
            type: 'line',
            data: graphData,
            options: graphOptions
        });
    });
}

function clearGraph(view, model, graph) {
    graphView.clearRect(0, 0, model.width, model.height);
    graph.destroy();
}

var graphCreditModel = document.getElementById('credit-graph');
var graphCreditView = graphCreditModel.getContext('2d');
var graphCredit = new Chart(graphCreditView);

function drawCreditGraph(yValues) {
    clearGraph(graphCreditView, graphCreditModel, graphCredit);
    creditData.datasets[0].data = yValues;

    graphCredit = new Chart(graphCreditView, {
      type: "pie",
      data: creditData,
      options: creditGraphOptions
    });
}


