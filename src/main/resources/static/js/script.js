
    const out = document.querySelector('.disp2');
    const outRez = document.querySelector('.disp1');
    var isNum = false;

    document.querySelector('.ac').addEventListener('click', () => {
        out.textContent = "";
        outRez.textContent = "";
    });

    document.querySelector('.eq').addEventListener('click', () => {
        outRez.textContent += out.textContent;
//            out.textContent = "";
//        if (outRez.textContent.find('x'))

//        if (outRez.textContent.indexOf("x") > -1) {
//            var x = prompt("Введите Х");
//            outRez = outRez.replace("x", x);
//        }

        document.getElementById('ff').setAttribute('value', outRez.textContent);

    });

    document.querySelectorAll('.num').forEach((button) => {
        button.addEventListener('click', () => {
             if (!isNum) {
                outRez.textContent += out.textContent;
                out.textContent = '';
             }
             out.textContent += event.target.textContent;
             isNum = true;
        });
    });

    document.querySelectorAll('.oper').forEach((button) => {
        button.addEventListener('click', () => {
             if (isNum)
                outRez.textContent += out.textContent;
             out.textContent = event.target.textContent;
             isNum = false;
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
