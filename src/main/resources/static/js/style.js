//let bg = getComputedStyle(document.documentElement).
//  getPropertyValue('--text-color');
//
//bg = "yellow";
function setYellowTextColor() {
    document.documentElement.style.setProperty('--text-color', 'yellow');
    document.documentElement.style.setProperty('--back-container-color', 'yellow');

}

function setRedTextColor() {
    document.documentElement.style.setProperty('--text-color', 'red');
    document.documentElement.style.setProperty('--back-container-color', 'red');

}

function setWhiteTextColor() {
    document.documentElement.style.setProperty('--text-color', 'white');
    document.documentElement.style.setProperty('--back-container-color', 'white');
}

