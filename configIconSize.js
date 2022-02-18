// IMPORTS E VARIÁVEIS --->

export let iconSize = 40


// FUNÇÕES --->

export const sizeSub = (elem) => {
    if(iconSize > 24) {
        if(iconSize > 56) {
            iconSize = 56
        } else if(iconSize > 48) {
            iconSize = 48
        } else if(iconSize > 40) {
            iconSize = 40
        } else if(iconSize > 32) {
            iconSize = 32
        } else {
            iconSize = 24
        }

        elem.value = `${iconSize}px`
        configButtonState()
        updateIcons()
    }
}

export const sizeAdd = (elem) => {
    if(iconSize < 64) {
        if(iconSize < 32) {
            iconSize = 32
        } else if(iconSize < 40) {
            iconSize = 40
        } else if(iconSize < 48) {
            iconSize = 48
        } else if(iconSize < 56) {
            iconSize = 56
        } else {
            iconSize = 64
        }

        elem.value = `${iconSize}px`
        configButtonState()
        updateIcons()
    }
}

export const sizeFilter = (elem) => {
    const TEXT_VALUE = elem.value

    if(TEXT_VALUE >= 24 && TEXT_VALUE <= 64) {
        iconSize = elem.value
        elem.classList.remove('--input-wrong')
        configButtonState()
        updateIcons()
    } else {
        elem.classList.add('--input-wrong')
    }
}

export const sizeStartTyping = (elem) => {
    elem.value = iconSize
}

export const sizeEndTyping = (elem) => {
    elem.value = `${iconSize}px`
    elem.classList.remove('--input-wrong')
}

const updateIcons = () => {
    const ROOT = document.querySelector(':root')
    ROOT.style.setProperty('--size-icon', `${iconSize}px`)
}

const configButtonState = () => {
    const CONFIG_SIZE_SUB = document.querySelector('[data-size-sub]')
    const CONFIG_SIZE_ADD = document.querySelector('[data-size-add]')

    if(iconSize <= 24) {
        CONFIG_SIZE_SUB.classList.add('--config_button-disabled')
    } else {
        CONFIG_SIZE_SUB.classList.remove('--config_button-disabled')
    }

    if(iconSize >= 64) {
        CONFIG_SIZE_ADD.classList.add('--config_button-disabled')
    } else {
        CONFIG_SIZE_ADD.classList.remove('--config_button-disabled')
    }
}