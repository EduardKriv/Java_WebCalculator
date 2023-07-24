
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
        addHistoryRow(outRez.textContent);
        saveHistory(outRez.textContent);
    }, () => {
        out.textContent = "Invalid input";
    });
}

function clearDisplay() {
    out.textContent = "";
    outRez.textContent = "";
    state.isEq = false;
}

document.querySelector('.ac').addEventListener('click', () => {
    clearDisplay();
});

document.querySelector('.eq').addEventListener('click', () => {
    if (!state.isEq) {
        outRez.textContent += out.textContent;
        out.textContent = '';
    }

    if (outRez.textContent.indexOf("x") > -1) {
        dialog.showModal();
    } else {
        request();
    }
    state.isEq = true;
    state.isNum = false;
});

document.querySelectorAll('.num').forEach((button) => {
    button.addEventListener('click', () => {
        if (state.isEq) clearDisplay();
        if (button.textContent === "." && out.textContent.indexOf(".") !== -1) return;
        if (button.textContent === "e" && out.textContent.indexOf("e") !== -1) return;

        if (!state.isNum) {
            outRez.textContent += out.textContent;
            out.textContent = '';
        }
        out.textContent += button.textContent;
        state.isNum = true;
    });
});

document.querySelectorAll('.oper').forEach((button) => {
    button.addEventListener('click', () => {
        if (out.textContent.toLowerCase() === "invalid input") clearDisplay();

        if (state.isEq) {
            outRez.textContent = out.textContent;
            state.isEq = false;
        }
         if (state.isNum)
            outRez.textContent += out.textContent;

         out.textContent = button.textContent;
         state.isNum = false;
    });
});

document.querySelectorAll('.func').forEach((button) => {
    button.addEventListener('click', () => {
        if (state.isEq) clearDisplay();

        outRez.textContent += out.textContent + button.textContent + "(";
        out.textContent = '';
    });
});

document.querySelectorAll('.back').forEach((button) => {
    button.addEventListener('click', () => {
        if (out.textContent.length > 0)
            out.textContent = out.textContent.slice(0, -1);
        else
            outRez.textContent = outRez.textContent.slice(0, -1);
    });
});

document.querySelectorAll('.other').forEach((button) => {
    button.addEventListener('click', () => {
        if (state.isEq) clearDisplay();

        outRez.textContent += out.textContent + button.textContent;
        out.textContent = '';
    });
});

document.getElementById('draw-but').addEventListener('click', () => {
    outRez.textContent += out.textContent;
    out.textContent = '';

    const minX = document.getElementById('input-minX').value;
    const maxX = document.getElementById('input-maxX').value;
    const stepX = document.getElementById('input-step').value;
    const minY = document.getElementById('input-minY').value;
    const maxY = document.getElementById('input-maxY').value;

    drawGraphPoints(outRez.textContent, minX, maxX, stepX, minY, maxY);
});
