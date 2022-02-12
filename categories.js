const ALL_CATEGORIES = ['objetos', 'segurança', 'tempo', 'sinalização', 'design', 'menu', 'natureza', 'internet', 'social', 'e-commerce', 'localização']

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
}

