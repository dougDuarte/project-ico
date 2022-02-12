const ROOT = document.querySelector(':root')
let iconWidth = 1

export const widthSub = (elem) => {
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
    updateIcons()
}

export const widthAdd = (elem) => {
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
    updateIcons()
}

export const widthFilter = (elem) => {
    const TEXT_VALUE = elem.value

    if(TEXT_VALUE >= 0.5 && TEXT_VALUE <= 3 && TEXT_VALUE.charAt(TEXT_VALUE.length - 1) !== '.') {
        iconWidth = TEXT_VALUE
        elem.classList.remove('--input-wrong')
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
    ROOT.style.setProperty('--width-icon', `${iconWidth}px`)
}