
const menu = document.getElementsByClassName('nav-container')[0];

getMenuPosition = () => {
    const menuName = (event.currentTarget.firstElementChild.innerText === 'Features') ? 'feature-menu' : 'company-menu';
    const menuEl = document.getElementsByClassName(menuName)[0];
    if(!menuEl.classList.contains('hide')){
        menuEl.classList.add('hide');
        event.currentTarget.lastElementChild.classList.remove('rotate-transition');
        return;
    }
    event.currentTarget.lastElementChild.classList.add('rotate-transition');
    menuEl.classList.remove('hide');
    menuEl.style.left = (event.currentTarget.getBoundingClientRect().right - menuEl.getBoundingClientRect().width) +'px';
    menuEl.style.top = event.currentTarget.getBoundingClientRect().bottom+20+'px';
};
menu.children[0].addEventListener('click',getMenuPosition);
menu.children[1].addEventListener('click',getMenuPosition);