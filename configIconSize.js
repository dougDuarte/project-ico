const ROOT = document.querySelector(':root')
let iconSize = 40

export const sizeSub = (elem) => {
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
    updateIcons()
}

export const sizeAdd = (elem) => {
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
    updateIcons()
}

export const sizeFilter = (elem) => {
    const TEXT_VALUE = elem.value

    if(TEXT_VALUE >= 24 && TEXT_VALUE <= 64) {
        iconSize = elem.value
        elem.classList.remove('--input-wrong')
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
    ROOT.style.setProperty('--size-icon', `${iconSize}px`)
}