// IMPORTS E VARIÁVEIS --->

export let iconWidth = 1


// FUNÇÕES --->

export const widthSub = (elem) => {
    if(iconWidth > 0.5) {
        if(iconWidth > 2.5) {
            iconWidth = 2.5
        } else if(iconWidth > 2) {
            iconWidth = 2
        } else if(iconWidth > 1.5) {
            iconWidth = 1.5
        } else if(iconWidth > 1) {
            iconWidth = 1
        } else {
            iconWidth = 0.5
        }

        elem.value = `${iconWidth}px`
        configButtonState()
        updateIcons()
    }
}

export const widthAdd = (elem) => {
    if(iconWidth < 3) {
        if(iconWidth < 1) {
            iconWidth = 1
        } else if(iconWidth < 1.5) {
            iconWidth = 1.5
        } else if(iconWidth < 2) {
            iconWidth = 2
        } else if(iconWidth < 2.5) {
            iconWidth = 2.5
        } else {
            iconWidth = 3
        }

        elem.value = `${iconWidth}px`
        configButtonState()
        updateIcons()
    }
}

export const widthFilter = (elem) => {
    const TEXT_VALUE = elem.value

    if(TEXT_VALUE >= 0.5 && TEXT_VALUE <= 3 && TEXT_VALUE.charAt(TEXT_VALUE.length - 1) !== '.') {
        iconWidth = TEXT_VALUE
        elem.classList.remove('--input-wrong')
        configButtonState()
        updateIcons()
    } else {
        elem.classList.add('--input-wrong')
    }
}

export const widthStartTyping = (elem) => {
    elem.value = iconWidth
}

export const widthEndTyping = (elem) => {
    elem.value = `${iconWidth}px`
    elem.classList.remove('--input-wrong')
}

const updateIcons = () => {
    const ROOT = document.querySelector(':root')
    ROOT.style.setProperty('--width-icon', `${iconWidth}px`)
}

const configButtonState = () => {
    const CONFIG_WIDTH_SUB = document.querySelector('[data-width-sub]')
    const CONFIG_WIDTH_ADD = document.querySelector('[data-width-add]')

    if(iconWidth <= 0.5) {
        CONFIG_WIDTH_SUB.classList.add('--config_button-disabled')
    } else {
        CONFIG_WIDTH_SUB.classList.remove('--config_button-disabled')
    }

    if(iconWidth >= 3) {
        CONFIG_WIDTH_ADD.classList.add('--config_button-disabled')
    } else {
        CONFIG_WIDTH_ADD.classList.remove('--config_button-disabled')
    }
}