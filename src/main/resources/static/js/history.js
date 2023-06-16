
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(tbody);

document.getElementById('his-table').appendChild(table);

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "7*3";
row_2.appendChild(row_2_data_1);
tbody.appendChild(row_2);