

var tableData = [
    {
        month: "1",
        pay: "1000",
        main: "200",
        percent: "150",
        rest: "400"
    },
    {
        month: "2",
        pay: "1000",
        main: "200",
        percent: "150",
        rest: "400"
    }
]

var table = document.querySelector('.history-table');

for (var i = 0; i < 15; i++) {
		var tr = document.createElement('tr');



		for (var j = 0; j < 1; j++) {
			var td = document.createElement('td');

            td.textContent = "atan(12)+sin(3534)/24.052+sqrt(x^2)";
//            td.textContent = "atan(12)" + i;

			tr.appendChild(td);
		}

		table.appendChild(tr);
}


document.querySelectorAll('.history-table tr td').forEach((expression) => {
    expression.addEventListener('dblclick', () => {
        outRez.textContent = expression.innerHTML;
        out.textContent = '';
    });
});