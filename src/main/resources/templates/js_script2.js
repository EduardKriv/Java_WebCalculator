    const out = document.querySelector('.disp2');
    const outRez = document.querySelector('.disp1');
     console.log("Ya TYT");

//    document.querySelector('.ac').addEventListener('click', clearAll);
//    document.querySelector('.eq').addEventListener('click', () => {
//        outRez.textContent += out.textContent;
//        out.textContent = "";
////        if (outRez.textContent.find('x'))
//
//        if (outRez.textContent.indexOf("x") > -1) {
//            var x = prompt("Введите Х");
//            outRez = outRez.replace("x", x);
//        }
//
//        document.getElementById('ff').setAttribute('value', outRez.textContent);
//    });
//
//
//    document.querySelectorAll('.num').forEach((button) => {
//        button.addEventListener('click', () => {
//             if (!isNum) {
//                outRez.textContent += out.textContent;
//                out.textContent = '';
//             }
//             out.textContent += event.target.textContent;
//             isNum = true;
//        });
//    });
//
//    document.querySelectorAll('.oper').forEach((button) => {
//        button.addEventListener('click', () => {
//             if (isNum)
//                outRez.textContent += out.textContent;
//             out.textContent = event.target.textContent;
//             isNum = false;
//        });
//    });
//
//    document.querySelectorAll('.func').forEach((button) => {
//        button.addEventListener('click', () => {
//            outRez.textContent += out.textContent + event.target.textContent + "(";
//            out.textContent = '';
//        });
//    });
//
//    document.querySelectorAll('.other').forEach((button) => {
//        button.addEventListener('click', () => {
//            outRez.textContent += out.textContent + event.target.textContent;
//            out.textContent = '';
//        });
//    });
//
//    function myFunction() {
//        var txt;
//        var person = prompt("Please enter your name:", "Harry Potter");
//        if (person == null || person == "") {
//            txt = "User cancelled the prompt.";
//        } else {
//            txt = "Hello " + person + "! How are you today?";
//        }
//        document.getElementById("demo").innerHTML = txt;
//    }

//    function writeNumber() {
////         if (!isNum) {
//            outRez.textContent += out.textContent;
//            out.textContent = '';
////        }
//        out.textContent += event.target.textContent;
////        isNum = true;
//    }
//
//    function clearAll() {
//        out.textContent = "";
//        outRez.textContent = "";
//    }



    document.querySelector('.buttonss').onclick = (event) => {

        if (!event.target.classList.contains('buttons')) return;

//        if (event.target.classList.contains('ac')) {
//            clearAll();
//        } else if (event.target.classList.contains('eq')) {
//            var str = out.textContent;
//            document.getElementById('ff').setAttribute('value', str);
//        } else if (event.target.classList.contains('num')) {
////             if (!isNum) {
//                outRez.textContent += out.textContent;
//                out.textContent = '';
////             }
//              console.log(outRez);
//             out.textContent += event.target.textContent;
////             isNum = true;
//        } else if (event.target.classList.contains('oper')) {
////            if (isNum)
//                outRez.textContent += out.textContent;
//            out.textContent = event.target.textContent;
////            isNum = false;
//       } else if (event.target.classList.contains('func')) {
//             outRez.textContent += out.textContent + event.target.textContent + "(";
//             out.textContent = '';
//       } else if (event.target.classList.contains('other')) {
//            outRez.textContent += out.textContent + event.target.textContent;
//            out.textContent = '';
//        }
}