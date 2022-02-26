// IMPORTS E VARIÁVEIS --->

import { ALL_ICONS } from './icons.js'
import { ALL_CATEGORIES, currentCategory } from './categories.js'


// FUNÇÕES --->

export const searchFilter = () => {
    const ITEMS = document.querySelectorAll('[data-item]')
    const SEARCH_BAR = document.querySelector('[data-search-bar]')
    const SEARCH_TERM = SEARCH_BAR.value.toLowerCase()

    for(let i = 0; i < ALL_ICONS.length; i++) {
        const ALL_TAGS = `${ALL_ICONS[i].title} ${ALL_ICONS[i].categories} ${ALL_ICONS[i].tags}`

        if(ALL_ICONS[i].categories.includes(ALL_CATEGORIES[currentCategory]) && ALL_TAGS.includes(SEARCH_TERM)) {
            ITEMS[i].classList.remove('--invisible')
        } else {
            ITEMS[i].classList.add('--invisible')
        }
    }

    searchResult(SEARCH_BAR, searchEmpty(ITEMS))
}

const searchResult = (bar, func) => {
    const SEARCH = document.querySelector('[data-search]')
    const SEARCH_CATEGORY = document.querySelector('[data-search-category]')
    const SEARCH_RESULT = SEARCH.parentElement

    if(bar.value.length > 0 && !func) {
        SEARCH.textContent = bar.value
        SEARCH_CATEGORY.textContent = ALL_CATEGORIES[currentCategory]
        SEARCH_RESULT.classList.remove('--invisible')
    } else {
        SEARCH_RESULT.classList.add('--invisible')
    }
}

const searchEmpty = (items) => {
    const SEARCH_EMPTY = document.querySelector('[data-search-empty]')

    for(let i = 0; i < items.length; i++) {
        if(!items[i].classList.contains('--invisible')) {
            SEARCH_EMPTY.classList.add('--invisible')
            return false
        }
    }

    SEARCH_EMPTY.classList.remove('--invisible')
    return true
}