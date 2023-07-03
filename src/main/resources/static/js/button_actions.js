
document.querySelectorAll('[name="slide-group"]').forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('graph').checked = false;
    });
});

const out = document.querySelector('.disp2');
const outRez = document.querySelector('.disp1');

var dialog = document.getElementById('dialog');
var dialogOk = document.getElementById('dialog-ok');
var dialogCancel = document.getElementById('dialog-cancel');
var xValue = document.getElementById('input-x');


dialogOk.addEventListener('click', () => {
    dialog.close();
    request();
});

dialogCancel.addEventListener('click', () => {
    dialog.close();
});

var state = {
    isNum: false,
    isEq: false
};

function request() {
    getResult(outRez.textContent, xValue.value).then((resp) => {
            out.textContent = resp;
    }, () => {
            out.textContent = "Invalid input";
    });
}

document.querySelector('.ac').addEventListener('click', () => {
    out.textContent = "";
    outRez.textContent = "";
});

document.querySelector('.eq').addEventListener('click', () => {
    outRez.textContent += out.textContent;
    out.textContent = '';

    if (outRez.textContent.indexOf("x") > -1) {
        dialog.showModal();
    } else {
        request();
    }
});

document.querySelectorAll('.num').forEach((button) => {
    button.addEventListener('click', () => {
         if (!state.isNum) {
            outRez.textContent += out.textContent;
            out.textContent = '';
         }
         out.textContent += event.target.textContent;
         state.isNum = true;
    });
});

document.querySelectorAll('.oper').forEach((button) => {
    button.addEventListener('click', () => {
         if (state.isNum)
            outRez.textContent += out.textContent;
         out.textContent = event.target.textContent;
         state.isNum = false;
    });
});

document.querySelectorAll('.func').forEach((button) => {
    button.addEventListener('click', () => {
        outRez.textContent += out.textContent + event.target.textContent + "(";
        out.textContent = '';
    });
});

document.querySelectorAll('.other').forEach((button) => {
    button.addEventListener('click', () => {
        outRez.textContent += out.textContent + event.target.textContent;
        out.textContent = '';
    });
});

document.getElementById('draw-but').addEventListener('click', () => {
    outRez.textContent += out.textContent;
    out.textContent = '';

    var minX = document.getElementById('input-minX').value;
    var maxX = document.getElementById('input-maxX').value;
    var stepX = document.getElementById('input-step').value;

    drawGraphPoints(outRez.textContent, minX, maxX, stepX);
});

function calcCredit() {
    var sum = document.getElementById('credit-sum').value;
    var period = document.getElementById('credit-period').value;
    var percent = document.getElementById('credit-percent').value;

    var pay = document.getElementById('pay');
    var totalPercent = document.getElementById('percent');
    var totalSum = document.getElementById('totalSum');

    var table = document.querySelector('.table-scroll thead').innerHTML = `
           <tr>
             <th>Месяц</th>
             <th>Сумма платежа</th>
             <th>Платеж по основному долгу</th>
             <th>Платеж по процентам</th>
             <th>Остаток долга</th>
           </tr>`;

    getCreditResult(sum, period, percent).then((resp) => {
        console.log(resp);
        pay.value = resp.reduce((acc, num) => Math.round(acc + num[3] * 100) / 100., 0.);
//        totalPercent.value = resp[1];
//        totalSum.value = resp[2];

        var table = document.querySelector('.table-scroll tbody').innerHTML += resp
          .map(n => `
            <tr>
              <td>${n[0]}</td>
              <td>${n[1]}</td>
              <td>${n[2]}</td>
              <td>${n[3]}</td>
              <td>${n[4]}</td>
            </tr>`)
          .join('');

//            out.textContent = resp;
    }, () => {
            out.textContent = "Invalid input";
    });
}
