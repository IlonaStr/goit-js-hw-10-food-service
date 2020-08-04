'use strict';

import './styles.css';
import menuList from './menu.json';
import list from './menu.hbs';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}
const body = document.querySelector('body');
const themeSwitch = document.querySelector('.js-switch-input');
const currentTheme = localStorage.getItem('Theme');
themeSwitch.addEventListener('change', changeOfTheme)


if(currentTheme === Theme.DARK) {
    themeSwitch.checked = true;
    body.classList.add(Theme.DARK)
} else {
    themeSwitch.checked = false;
    body.classList.add(Theme.LIGHT);
}

function changeOfTheme() {
    if(themeSwitch.checked) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('Theme', Theme.DARK);
    } else {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('Theme', Theme.LIGHT);
    }
}
const menu = document.querySelector('.js-menu')
menu.insertAdjacentHTML('afterbegin', list(menuList))