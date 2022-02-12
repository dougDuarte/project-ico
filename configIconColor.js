const ROOT = document.querySelector(':root')
let iconColor = 'cedc04'

export const colorPick = (picker, text) => {
    iconColor = picker.value.substring(1)
    text.value = picker.value
    updateIcons()
}

export const colorFilter = (text, picker) => {
    if(/[0-9a-fA-F]{6}/.test(text.value)) {
        iconColor = text.value
        picker.value = `#${iconColor}`
        text.classList.remove('--input-wrong')
        updateIcons()
    } else {
        text.classList.add('--input-wrong')
    }
}

export const colorStartTyping = (elem) => {
    elem.value = iconColor
}

export const colorEndTyping = (elem) => {
    elem.value = `#${iconColor}`
    elem.classList.remove('--input-wrong')
}

const updateIcons = () => {
    ROOT.style.setProperty('--color-icon', `#${iconColor}`)
}