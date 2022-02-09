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

    SVGS.forEach((e) => {
        e.setAttribute('stroke', CONFIG_COLOR.value)
    })
})

// -----

const CONFIG_SIZE_INPUT = document.querySelector('[data-size-input]')
const CONFIG_SIZE_SUB = document.querySelector('[data-size-sub]')
const CONFIG_SIZE_ADD = document.querySelector('[data-size-add]')

CONFIG_SIZE_SUB.addEventListener('click', () => {
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

    CONFIG_SIZE_INPUT.value = iconSize

    SVGS.forEach((e) => {
        e.setAttribute('width', iconSize)
    })
})

CONFIG_SIZE_ADD.addEventListener('click', () => {
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

    CONFIG_SIZE_INPUT.value = iconSize
    
    SVGS.forEach((e) => {
        e.setAttribute('width', iconSize)
    })
})

CONFIG_SIZE_INPUT.addEventListener('input', () => {
    if(CONFIG_SIZE_INPUT.value >= 24 && CONFIG_SIZE_INPUT.value <= 64) {
        iconSize = CONFIG_SIZE_INPUT.value
    }
    
    SVGS.forEach((e) => {
        e.setAttribute('width', iconSize)
    })
})

// ----

const CONFIG_WIDTH_INPUT = document.querySelector('[data-width-input]')
const CONFIG_WIDTH_SUB = document.querySelector('[data-width-sub]')
const CONFIG_WIDTH_ADD = document.querySelector('[data-width-add]')

CONFIG_WIDTH_SUB.addEventListener('click', () => {
    if(strokeWidth > 2.5) {
        strokeWidth = 2.5
    } else if(strokeWidth > 2) {
        strokeWidth = 2
    } else if(strokeWidth > 1.5) {
        strokeWidth = 1.5
    } else if(strokeWidth > 1) {
        strokeWidth = 1
    } else {
        strokeWidth = 0.5
    }

    CONFIG_WIDTH_INPUT.value = strokeWidth

    SVGS.forEach((e) => {
        e.setAttribute('stroke-width', strokeWidth)
    })
})

CONFIG_WIDTH_ADD.addEventListener('click', () => {
    if(strokeWidth < 1) {
        strokeWidth = 1
    } else if(strokeWidth < 1.5) {
        strokeWidth = 1.5
    } else if(strokeWidth < 2) {
        strokeWidth = 2
    } else if(strokeWidth < 2.5) {
        strokeWidth = 2.5
    } else {
        strokeWidth = 3
    }

    CONFIG_WIDTH_INPUT.value = strokeWidth

    SVGS.forEach((e) => {
        e.setAttribute('stroke-width', strokeWidth)
    })
})

CONFIG_WIDTH_INPUT.addEventListener('input', () => {
    if(CONFIG_WIDTH_INPUT.value >= 0.5 && CONFIG_WIDTH_INPUT.value <= 3) {
        strokeWidth = CONFIG_WIDTH_INPUT.value
    }
    
    SVGS.forEach((e) => {
        e.setAttribute('stroke-width', strokeWidth)
    })
})