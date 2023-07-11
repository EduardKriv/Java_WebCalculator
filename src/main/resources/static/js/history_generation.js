
var table = document.querySelector('.history-table');

function createHistoryRow(str) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.addEventListener('dblclick', () => {
        outRez.textContent = td.innerHTML;
        out.textContent = '';
    });

    td.textContent = str;
    tr.appendChild(td);
    table.prepend(tr);
}

getHistory().then((resp) => {
    resp.forEach((str) => {
        createHistoryRow(str);
    });
});
