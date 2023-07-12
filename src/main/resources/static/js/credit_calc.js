var sum = document.getElementById('credit-sum');
var period = document.getElementById('credit-period');
var percent = document.getElementById('credit-percent');

var pay = document.getElementById('pay');
var totalPercent = document.getElementById('percent');
var totalSum = document.getElementById('totalSum');

var tableHead = document.querySelector('.table-scroll thead');
var tableBody = document.querySelector('.table-scroll tbody');


function clearTable() {
    var table = document.querySelector('.table-scroll tbody');
    table.innerHTML = '';
}

function tableHeadGenerate() {
    tableHead.innerHTML = `
        <tr>
            <th>Месяц</th>
            <th>Сумма платежа</th>
            <th>Платеж по основному долгу</th>
            <th>Платеж по процентам</th>
            <th>Остаток долга</th>
        </tr>`;
}

function tableBodyGenerate(resp) {
    tableBody.innerHTML = '';
        tableBody.innerHTML += resp
            .map(n => `
                <tr>
                    <td>${n[0]}</td>
                    <td>${n[1]}</td>
                    <td>${n[2]}</td>
                    <td>${n[3]}</td>
                    <td>${n[4]}</td>
                </tr>`)
            .join('');
}

function calcCredit() {
    const round = (num) => { return Math.round(num * 100) / 100.; };

    getCreditResult(sum.value, period.value, percent.value).then((resp) => {
        tableHeadGenerate();
        tableBodyGenerate(resp);

        pay.value = resp[0][1];
        totalSum.value = round(resp.reduce((acc, num) => acc + num[1], 0.));
        totalPercent.value = round(totalSum.value - sum.value);

        drawCreditGraph([sum.value, totalPercent.value]);
    }, () => {
        out.textContent = "Invalid input";
    });
}
