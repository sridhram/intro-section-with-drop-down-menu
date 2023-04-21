
const menu = document.getElementsByClassName('nav-container')[0];
const mobileIcon = document.getElementsByClassName('menu-icon-mobile')[0];
const mainEl = document.getElementsByClassName('main-container')[0];

getMenuPosition = () => {
    const menuName = (event.currentTarget.firstElementChild.innerText === 'Features') ? 'feature-menu' : 'company-menu';
    const menuEl = document.getElementsByClassName(menuName)[0];
    const isMobile = window.getComputedStyle(event.currentTarget.parentElement.querySelector('.menu-icon-mobile')).display === 'block';
    if(isMobile){
        menuEl.classList.add('mobile-submenu');
    }else{
        menuEl.classList.remove('mobile-submenu');
    }
    if(!menuEl.classList.contains('hide')){
        menuEl.classList.add('hide');
        event.currentTarget.lastElementChild.classList.remove('rotate-transition');
        return;
    }
    event.currentTarget.lastElementChild.classList.add('rotate-transition');
    menuEl.classList.remove('hide');
    
    if(!isMobile){
        menuEl.style.left = (event.currentTarget.getBoundingClientRect().right - menuEl.getBoundingClientRect().width) +'px';
        menuEl.style.top = event.currentTarget.getBoundingClientRect().bottom+20+'px';
    }
};
menu.children[1].addEventListener('click',getMenuPosition);
menu.children[3].addEventListener('click',getMenuPosition);

mobileIcon.addEventListener('click',() => {
    mainEl.style.pointerEvents = 'none';
    event.currentTarget.style.display = 'none';
    menu.style.display =  'flex';
});

menu.querySelector('.menu-icon-mobile').addEventListener('click',() => {
    menu.style.display = 'none';
    mobileIcon.style.display = '';
    mainEl.style.pointerEvents = 'all';
});