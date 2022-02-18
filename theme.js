// IMPORTS E VARIÁVEIS --->

let currentTheme = 0


// FUNÇÕES --->

export const selectTheme = (list, elem, index) => {
    if(currentTheme !== index) {
        for(let i = 0; i < list.length; i++) {
            list[i].classList.remove('--category-selected')
        }

        elem.classList.add('--category-selected')
        currentTheme = index
        colorScheme()
    }
}

const colorScheme = () => {
    const ROOT = document.querySelector(':root')

    if(currentTheme === 0) {
        ROOT.style.setProperty('--color-bg-main', '#121212')
        ROOT.style.setProperty('--color-menu-button-hover', '#0f0f0f')
        ROOT.style.setProperty('--color-border', '#282828')
        ROOT.style.setProperty('--color-border-hover', '#333333')
        ROOT.style.setProperty('--color-search-placeholder', '#404040')
        ROOT.style.setProperty('--color-text-main', '#dddddd')
        ROOT.style.setProperty('--color-text-secondary', '#666666')
    } else {
        ROOT.style.setProperty('--color-bg-main', '#fefefe')
        ROOT.style.setProperty('--color-menu-button-hover', '#f8f8f8')
        ROOT.style.setProperty('--color-border', '#dfdfdf')
        ROOT.style.setProperty('--color-border-hover', '#b9b9b9')
        ROOT.style.setProperty('--color-search-placeholder', '#c4c4c4')
        ROOT.style.setProperty('--color-text-main', '#1f1f1f')
        ROOT.style.setProperty('--color-text-secondary', '#a4a4a4')
    }
}