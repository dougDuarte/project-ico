// IMPORTS E VARIÁVEIS --->

import { SVG_LAYOUT, SVG_FIRE, SVG_AT, SVG_BOLT, SVG_CLOUD, SVG_CALENDAR, SVG_CART, SVG_CHAT, SVG_SECURE, SVG_CHECK, SVG_DOTS_HORIZONTAL, SVG_DOTS_VERTICAL, SVG_PENCIL, SVG_PADLOCK, SVG_MAP, SVG_MAP_MARKER, SVG_MOON, SVG_BELL, SVG_GEAR, SVG_THUMB_UP, SVG_X, SVG_MAGNIFYING_GLASS } from './icons.js'

import { downloadButton } from './download.js'

export const ALL_ICONS = [
    {icon: SVG_LAYOUT,
    title: 'layout',
    categories: 'todos design menu',
    tags: 'organização'},

    {icon: SVG_FIRE,
    title: 'fogo',
    categories: 'todos natureza sinalização',
    tags: 'quente calor chama perigo cuidado aviso'},

    {icon: SVG_AT,
    title: 'arroba',
    categories: 'todos internet social',
    tags: 'email e-mail'},

    {icon: SVG_BOLT,
    title: 'raio',
    categories: 'todos natureza sinalização',
    tags: 'eletricidade perigo cuidado aviso'},

    {icon: SVG_CLOUD,
    title: 'nuvem',
    categories: 'todos internet natureza',
    tags: 'servidor'},

    {icon: SVG_CALENDAR,
    title: 'calendário',
    categories: 'todos tempo',
    tags: 'dia mês ano compromisso'},

    {icon: SVG_CART,
    title: 'carrinho',
    categories: 'todos loja objetos menu',
    tags: 'compras mercado'},

    {icon: SVG_CHAT,
    title: 'chat',
    categories: 'todos internet social menu',
    tags: 'balão fala conversa'},

    {icon: SVG_SECURE,
    title: 'seguro',
    categories: 'todos internet segurança',
    tags: 'escudo certo'},

    {icon: SVG_CHECK,
    title: 'certo',
    categories: 'todos menu',
    tags: 'correto aprovado preenchido'},

    {icon: SVG_DOTS_HORIZONTAL,
    title: 'pontos horizontais',
    categories: 'todos menu',
    tags: 'sanduíche hambúrguer'},

    {icon: SVG_DOTS_VERTICAL,
    title: 'pontos verticais',
    categories: 'todos menu',
    tags: 'sanduíche hambúrguer'},

    {icon: SVG_PENCIL,
    title: 'lápis',
    categories: 'todos design objetos',
    tags: 'escrita caneta'},

    {icon: SVG_PADLOCK,
    title: 'cadeado',
    categories: 'todos segurança objetos',
    tags: 'fechadura chave trancado fechado'},

    {icon: SVG_MAP,
    title: 'mapa',
    categories: 'todos localização objetos',
    tags: 'lugar'},

    {icon: SVG_MAP_MARKER,
    title: 'marcador de mapa',
    categories: 'todos localização',
    tags: 'lugar'},

    {icon: SVG_MOON,
    title: 'lua',
    categories: 'todos natureza menu',
    tags: 'noite escuro'},

    {icon: SVG_BELL,
    title: 'sino',
    categories: 'todos objetos sinalização menu',
    tags: 'notificação sininho'},

    {icon: SVG_GEAR,
    title: 'engrenagem',
    categories: 'todos menu objetos',
    tags: 'configuração'},

    {icon: SVG_THUMB_UP,
    title: 'joínha',
    categories: 'todos internet social',
    tags: 'joia legal mão'},

    {icon: SVG_X,
    title: 'xis',
    categories: 'todos menu',
    tags: 'fechar excluir sair errado negado'},

    {icon: SVG_MAGNIFYING_GLASS,
    title: 'lupa',
    categories: 'todos menu objetos',
    tags: 'procurar pesquisar achar encontrar'}
]

export let selectedItems = []


// FUNÇÕES --->

const createItem = (obj) => {
    const ITEM_LIST = document.querySelector('[data-item-list]')

    const ITEM = document.createElement('button')
    ITEM.classList.add('item')
    ITEM.setAttribute('data-item', '')
    ITEM.innerHTML = obj.icon

    ITEM_LIST.appendChild(ITEM)
}

export const createItemList = () => {
    ALL_ICONS.sort((a, b) => a.title.localeCompare(b.title))

    for(let i = 0; i < ALL_ICONS.length; i++) {
        createItem(ALL_ICONS[i])
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