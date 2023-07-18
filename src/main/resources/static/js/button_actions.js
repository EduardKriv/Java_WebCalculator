
document.querySelectorAll('[name="slide-group"]').forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('graph').checked = false;
    });
});

const out = document.querySelector('.disp2');
const outRez = document.querySelector('.disp1');

const dialog = document.getElementById('dialog');
const dialogOk = document.getElementById('dialog-ok');
const dialogCancel = document.getElementById('dialog-cancel');
const xValue = document.getElementById('input-x');


dialogOk.addEventListener('click', () => {
    dialog.close();
    request();
});

dialogCancel.addEventListener('click', () => {
    dialog.close();
});

const state = {
    isNum: false,
    isEq: false
};

function request() {
    getResult(outRez.textContent, xValue.value).then((resp) => {
        out.textContent = resp.toString();
        createHistoryRow(outRez.textContent);
        saveHistory(outRez.textContent);
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
    var minY = document.getElementById('input-minY').value;
    var maxY = document.getElementById('input-maxY').value;

    drawGraphPoints(outRez.textContent, minX, maxX, stepX, minY, maxY);
});
