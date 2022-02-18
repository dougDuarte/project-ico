// IMPORTS E VARIÁVEIS --->

const MENU = document.querySelector('[data-menu]')


// FUNÇÕES --->

export const openMenu = () => {
    MENU.classList.remove('--menu_mobile-closed')
}

export const closeMenu = () => {
    MENU.classList.add('--menu_mobile-closed')
}

export const queryCloseMenu = (query) => {
    if(query.matches && !MENU.classList.contains('--menu_mobile-closed')) {
        MENU.classList.add('--menu_mobile-closed')
    }
}