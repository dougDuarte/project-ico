// IMPORTS --->

import { selectTheme } from './theme.js'
import { openMenu, closeMenu, closeMenuQuery } from './mobileMenu.js'
import { sizeSub, sizeAdd, sizeFilter, sizeStartTyping, sizeEndTyping } from './configIconSize.js'
import { widthSub, widthAdd, widthFilter, widthStartTyping, widthEndTyping } from './configIconWidth.js'
import { colorPick, colorFilter, colorStartTyping, colorEndTyping } from './configIconColor.js'
import { createCategoryList, selectCategory } from './categories.js'
import { download } from './download.js'
import { searchFilter } from './search.js'
import { createItemList, selectItem, deselectItems } from './items.js'


// INICIAR LISTA DE CATEGORIAS E DE ITENS --->

createCategoryList()
createItemList()


// ABRIR MENU MOBILE --->

const HTML = document.querySelector('html');
const MENU = document.querySelector('[data-menu]')
const MENU_SHADOW = document.querySelector('[data-menu-shadow]');

delete Hammer.defaults.cssProps.userSelect
const HAMMER_TARGET = new Hammer(HTML)

const OPEN_MENU_BUTTON = document.querySelector('[data-mobile-open]')
OPEN_MENU_BUTTON.addEventListener('click', () => openMenu(MENU, MENU_SHADOW))
HAMMER_TARGET.on('swiperight', () => openMenu(MENU, MENU_SHADOW))


// FECHAR MENU MOBILE --->

const QUERY = window.matchMedia('(min-width: 841px)')
QUERY.addEventListener('change', (event) => closeMenuQuery(event, MENU, MENU_SHADOW))
MENU_SHADOW.addEventListener('click', (event) => closeMenu(MENU, event.target))
HAMMER_TARGET.on('swipeleft', () => closeMenu(MENU, MENU_SHADOW))


// FILTRAR O RESULTADO DA PESQUISA --->

const SEARCH_BAR = document.querySelector('[data-search-bar]')
SEARCH_BAR.addEventListener('input', () => searchFilter())


// TROCAR O TAMANHO DOS ÍCONES --->

const CONFIG_SIZE_SUB = document.querySelector('[data-size-sub]')
const CONFIG_SIZE_ADD = document.querySelector('[data-size-add]')
const CONFIG_SIZE_TEXT = document.querySelector('[data-size-text]')
CONFIG_SIZE_SUB.addEventListener('click', () => sizeSub(CONFIG_SIZE_TEXT))
CONFIG_SIZE_ADD.addEventListener('click', () => sizeAdd(CONFIG_SIZE_TEXT))
CONFIG_SIZE_TEXT.addEventListener('input', (event) => sizeFilter(event.target))
CONFIG_SIZE_TEXT.addEventListener('focus', (event) => sizeStartTyping(event.target))
CONFIG_SIZE_TEXT.addEventListener('blur', (event) => sizeEndTyping(event.target))


// TROCAR A LARGURA DA LINHA DOS ÍCONES --->

const CONFIG_WIDTH_SUB = document.querySelector('[data-width-sub]')
const CONFIG_WIDTH_ADD = document.querySelector('[data-width-add]')
const CONFIG_WIDTH_TEXT = document.querySelector('[data-width-text]')
CONFIG_WIDTH_SUB.addEventListener('click', () => widthSub(CONFIG_WIDTH_TEXT))
CONFIG_WIDTH_ADD.addEventListener('click', () => widthAdd(CONFIG_WIDTH_TEXT))
CONFIG_WIDTH_TEXT.addEventListener('input', (event) => widthFilter(event.target))
CONFIG_WIDTH_TEXT.addEventListener('focus', (event) => widthStartTyping(event.target))
CONFIG_WIDTH_TEXT.addEventListener('blur', (event) => widthEndTyping(event.target))


// TROCAR A COR DOS ÍCONES --->

const COLOR_PICKER = document.querySelector('[data-color-picker]')
const COLOR_TEXT = document.querySelector('[data-color-text]')
COLOR_PICKER.addEventListener('input', (event) => colorPick(event.target, COLOR_TEXT))
COLOR_TEXT.addEventListener('input', (event) => colorFilter(event.target, COLOR_PICKER))
COLOR_TEXT.addEventListener('focus', (event) => colorStartTyping(event.target))
COLOR_TEXT.addEventListener('blur', (event) => colorEndTyping(event.target))


// SELECIONAR CATEGORIA --->

const CATEGORIES = document.querySelectorAll('[data-category]')
CATEGORIES.forEach((elem, index) => elem.addEventListener('click', () => selectCategory(CATEGORIES, elem, index)))


// SELECIONAR TEMA --->

const THEMES = document.querySelectorAll('[data-theme]')
THEMES.forEach((elem, index) => elem.addEventListener('click', () => selectTheme(THEMES, elem, index)))


// SELECIONAR ITENS --->

const ITEMS = document.querySelectorAll('[data-item]')
ITEMS.forEach((elem, index) => elem.addEventListener('click', () => selectItem(elem, index)))


// DESSELECIONAR ITENS --->

const DESELECT_ALL_BUTTON = document.querySelector('[data-deselect-all-button]')
DESELECT_ALL_BUTTON.addEventListener('click', () => deselectItems(ITEMS))


// FAZER DOWNLOAD DE UM OU MAIS ITENS --->

const DOWNLOAD_BUTTON = document.querySelector('[data-download-button]')
DOWNLOAD_BUTTON.addEventListener('click', () => download())