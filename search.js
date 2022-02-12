import { ALL_ICONS } from '/items.js'

export const searchFilter = (elem) => {
    const ITEM = document.querySelectorAll('[data-item]')

    for(let i = 0; i < ALL_ICONS.length; i++) {
        if(elem.value === '' || ALL_ICONS[i].tags.split(' ').join('/').includes(elem.value)) {
            ITEM[i].classList.remove('--invisible')
        } else {
            ITEM[i].classList.add('--invisible')
        }
    }
}