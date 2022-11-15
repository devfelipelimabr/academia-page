const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.list-itens');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');    
})