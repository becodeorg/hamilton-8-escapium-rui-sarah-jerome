const burger = document.getElementById('burger');
let menu = document.getElementById('nav_links');
burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
});

let links = document.getElementsByClassName('links_menu');

for (let link of links) {
    link.addEventListener('click', () => {
        for (let linkColorBase of links) {
            linkColorBase.style.color = '#CBCBCB';
        }
        link.style.color = 'white';
        for (let ligneRed of links) {
            ligneRed.parentElement.querySelector('.ligne_red').style.width = '0';
        }
        link.parentElement.querySelector('.ligne_red').style.width = '100%';
    });
}
