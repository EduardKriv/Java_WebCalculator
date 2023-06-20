
const links = document.querySelectorAll('.active');
const activeLine = document.querySelector('.active-line');

links.forEach((link) => {
    link.addEventListener('click', () => {
        link.appendChild(activeLine);
    });
});