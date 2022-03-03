// IMPORTS E VARIÁVEIS --->

import { ALL_ICONS } from './icons.js'
import { downloadButton } from './download.js'

export let selectedItems = []


// FUNÇÕES --->

const createItem = (obj, index) => {
    const ITEM_LIST = document.querySelector('[data-item-list]')
    const SVG_CONFIG = `<svg viewBox="0 0 24 24" fill="none"><path vector-effect="non-scaling-stroke"`

    const ITEM = document.createElement('button')
    ITEM.classList.add('item')
    ITEM.classList.add('--tab')
    ITEM.setAttribute('data-item', '')
    ITEM.setAttribute('aria-label', `Ícone '${ALL_ICONS[index].title}'`)
    ITEM.innerHTML = `${SVG_CONFIG} ${obj.icon}`

    ITEM_LIST.appendChild(ITEM)
}

export const createItemList = () => {
    ALL_ICONS.sort((a, b) => a.title.localeCompare(b.title))

    for(let i = 0; i < ALL_ICONS.length; i++) {
        createItem(ALL_ICONS[i], i)
    }
}

export const selectItem = (elem, index) => {
    if(selectedItems.includes(ALL_ICONS[index])) {
        const i = selectedItems.indexOf(ALL_ICONS[index])
        selectedItems.splice(i, 1)

    } else {
        selectedItems.push(ALL_ICONS[index])
    }

    elem.classList.toggle('--item-selected')
    downloadButton()
}

export const deselectItems = (items) => {
    items.forEach((elem) => {
        if(elem.classList.contains('--item-selected')) {
            elem.classList.remove('--item-selected')
        }
    })

    selectedItems = []
    downloadButton()
}