const table = document.querySelector('.history-table');

function createHistoryRow(str) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.addEventListener('dblclick', () => {
        outRez.textContent = td.innerHTML;
        out.textContent = '';
    });

    td.textContent = str;
    tr.appendChild(td);
    table.prepend(tr);
}

function fillHistoryTable() {
    getHistory().then((resp) => {
        resp.forEach((str) => {
            createHistoryRow(str);
        });
    });
}

function removeHistory() {
    document.querySelectorAll('.history-table tr').forEach((row) => {
        row.remove();
    });
}


const th = document.createElement('th');
th.addEventListener('click', () => {
    cleanHistory();
    removeHistory();
});
th.classList.add("head-item");
th.classList.add('head-but');
th.textContent = 'Clean';
table.append(th);

fillHistoryTable();
