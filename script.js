const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.list-itens');
const btns = document.querySelector('.btns');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    btns.classList.toggle('ativo');
})