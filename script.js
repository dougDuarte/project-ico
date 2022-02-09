///////////////////////////////////
//                               //
// CÓDIGO PRECISA SER REFATORADO //
//                               //
///////////////////////////////////

const createItem = (obj) => {
    const LIST = document.querySelector('[data-list]')

    const ITEM = document.createElement('button')
    ITEM.classList.add('item')
    ITEM.setAttribute('data-item', '')

    ITEM.innerHTML = obj.icon

    LIST.appendChild(ITEM)

    console.log(ITEM)
    return ITEM
}

const createItemList = () => {
    const ITEM_ORDER = ICONS.sort((a, b) => a.title.localeCompare(b.title))
    let itemList = []

    for(let i = 0; i < ICONS.length; i++) {
        const NEW_ITEM = createItem(ITEM_ORDER[i])
        itemList.push(NEW_ITEM)
    }

    return console.log(itemList)
}

createItemList()


const SEARCH = document.querySelector('[data-search]')
const ITEM = document.querySelectorAll('[data-item]')

SEARCH.addEventListener('input', () => {
    for(let i = 0; i < ICONS.length; i++) {
        if(SEARCH.value === '') {
            ITEM[i].classList.remove('--invisible')

        } else if(ICONS[i].tags.includes(SEARCH.value)) {
            ITEM[i].classList.remove('--invisible')

        } else {
            ITEM[i].classList.add('--invisible')
        }
    }
})

const COLOR_PICKER = document.querySelector('[data-color-picker]')
const CONFIG_COLOR = document.querySelector('[data-config-color]')
const SVGS = document.querySelectorAll('[data-icon]')

COLOR_PICKER.addEventListener('input', () => {
    const COLOR_WHEEL = document.querySelector('[data-color-wheel]')

    CONFIG_COLOR.value = COLOR_PICKER.value
    COLOR_WHEEL.style.backgroundColor = COLOR_PICKER.value
    
    SVGS.forEach((e) => {
        e.setAttribute('stroke', COLOR_PICKER.value)
    })
})

CONFIG_COLOR.addEventListener('input', () => {
    const COLOR_WHEEL = document.querySelector('[data-color-wheel]')

    if(CONFIG_COLOR.value[0] !== '#') {
        CONFIG_COLOR.value = `#${CONFIG_COLOR.value}`
    }

    COLOR_WHEEL.style.backgroundColor = CONFIG_COLOR.value
})

CONFIG_COLOR.addEventListener('change', () => {
    const COLOR_WHEEL = document.querySelector('[data-color-wheel]')

    if(CONFIG_COLOR.value[0] !== '#') {
        CONFIG_COLOR.value = `#${CONFIG_COLOR.value}`
    }

    COLOR_WHEEL.style.backgroundColor = CONFIG_COLOR.value
})

/* document.onkeydown = function(e) {
    if (e.ctrlKey && e.key === 'z') {
      e.preventDefault();
    }
} */