// IMPORTS E VARIÁVEIS --->

import { searchFilter } from "./search.js"

export const ALL_CATEGORIES = ['objetos', 'segurança', 'tempo', 'sinalização', 'design', 'menu', 'natureza', 'internet', 'social', 'e-commerce', 'localização']

export let currentCategory = 0


// FUNÇÕES --->

const createCategory = (array) => {
    const CATEGORY_LIST = document.querySelector('[data-category-list]')

    const CATEGORY = document.createElement('button')
    CATEGORY.classList.add('category_button')
    CATEGORY.setAttribute('data-category', '')
    CATEGORY.innerHTML = array

    CATEGORY_LIST.appendChild(CATEGORY)
}

export const createCategoryList = () => {
    ALL_CATEGORIES.sort().unshift('todos')

    for(let i = 0; i < ALL_CATEGORIES.length; i++) {
        createCategory(ALL_CATEGORIES[i])
    }
    
    const CATEGORY = document.querySelector('[data-category]')
    CATEGORY.classList.add('--category-selected')
}

export const selectCategory = (list, elem, index) => {
    if(currentCategory !== index) {
        for(let i = 0; i < list.length; i++) {
            list[i].classList.remove('--category-selected')
        }

        elem.classList.add('--category-selected')
        currentCategory = index
        searchFilter()
    }
}