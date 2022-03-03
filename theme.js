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
        ROOT.style.setProperty('--color-shadow', '#000000')
        ROOT.style.setProperty('--color-bg-main', '#121212')
        ROOT.style.setProperty('--color-menu-button-hover', '#0c0c0c')
        ROOT.style.setProperty('--color-border', '#282828')
        ROOT.style.setProperty('--color-border-hover', '#393939')
        ROOT.style.setProperty('--color-search-placeholder', '#444444')
        ROOT.style.setProperty('--color-text-main', '#cccccc')
        ROOT.style.setProperty('--color-text-secondary', '#8d8d8d')
    } else {
        ROOT.style.setProperty('--color-shadow', '#dddddd')
        ROOT.style.setProperty('--color-bg-main', '#fefefe')
        ROOT.style.setProperty('--color-menu-button-hover', '#f5f5f5')
        ROOT.style.setProperty('--color-border', '#dfdfdf')
        ROOT.style.setProperty('--color-border-hover', '#b2b2b2')
        ROOT.style.setProperty('--color-search-placeholder', '#c4c4c4')
        ROOT.style.setProperty('--color-text-main', '#1f1f1f')
        ROOT.style.setProperty('--color-text-secondary', '#757575')
    }
}