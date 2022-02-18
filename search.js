// IMPORTS E VARIÁVEIS --->

import { ALL_ICONS } from './items.js'
import { ALL_CATEGORIES, currentCategory } from './categories.js'


// FUNÇÕES --->

export const searchFilter = () => {
    const SEARCH_BAR = document.querySelector('[data-search-bar]')
    const ITEM = document.querySelectorAll('[data-item]')
    const SEARCH_TERM = SEARCH_BAR.value.toLowerCase()

    for(let i = 0; i < ALL_ICONS.length; i++) {
        const ALL_TAGS = `${ALL_ICONS[i].title} ${ALL_ICONS[i].categories} ${ALL_ICONS[i].tags}`.split(' ').join('$')

        if(ALL_ICONS[i].categories.includes(ALL_CATEGORIES[currentCategory]) && ALL_TAGS.includes(SEARCH_TERM)) {
            ITEM[i].classList.remove('--invisible')
        } else {
            ITEM[i].classList.add('--invisible')
        }
    }

    searchResult(SEARCH_BAR)
}

const searchResult = (bar) => {
    const SEARCH = document.querySelector('[data-search]')
    const SEARCH_CATEGORY = document.querySelector('[data-search-category]')
    const SEARCH_RESULT = SEARCH.parentElement

    if(bar.value.length > 0) {
        SEARCH.textContent = bar.value
        SEARCH_CATEGORY.textContent = ALL_CATEGORIES[currentCategory]
        SEARCH_RESULT.classList.remove('--invisible')
    } else {
        SEARCH_RESULT.classList.add('--invisible')
    }
}