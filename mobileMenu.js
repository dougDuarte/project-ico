// IMPORTS E VARIÁVEIS --->

const MENU = document.querySelector('[data-menu]')
let menuState = 0


// FUNÇÕES --->

export const openMenu = (shadow) => {
    if(menuState === 0 && window.innerWidth <= 840) {
        MENU.classList.remove('--menu_mobile-closed')
        shadow.classList.remove('--invisible')
        menuState = 1
    }
}

export const closeMenu = (shadow) => {
    if(menuState === 1) {
        MENU.classList.add('--menu_mobile-closed')
        shadow.classList.add('--invisible')
        menuState = 0
    }
}

export const closeMenuQuery = (event, shadow) => {
    if(event.matches && menuState === 1) {
        MENU.classList.add('--menu_mobile-closed')
        shadow.classList.add('--invisible')
        menuState = 0
    }
}