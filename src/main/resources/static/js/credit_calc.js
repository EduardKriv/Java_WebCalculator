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

function calcCredit() {
    tableHead.innerHTML = `
           <tr>
             <th>Месяц</th>
             <th>Сумма платежа</th>
             <th>Платеж по основному долгу</th>
             <th>Платеж по процентам</th>
             <th>Остаток долга</th>
           </tr>`;

    getCreditResult(sum.value, period.value, percent.value).then((resp) => {
        console.log(resp);

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

        pay.value = resp[0][1];
        totalSum.value = Math.round(resp.reduce((acc, num) => acc + num[1], 0.) * 100) / 100.;
        totalPercent.value = Math.round((totalSum.value - sum.value) * 100) / 100;

    }, () => {
        out.textContent = "Invalid input";
    });
}