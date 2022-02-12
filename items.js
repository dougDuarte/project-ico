import { SVG_LAYOUT, SVG_FIRE, SVG_AT, SVG_BOLT, SVG_CLOUD, SVG_CALENDAR, SVG_CART, SVG_CHAT, SVG_SECURE, SVG_CHECK, SVG_DOTS_HORIZONTAL, SVG_DOTS_VERTICAL, SVG_PENCIL, SVG_PADLOCK, SVG_MAP, SVG_MAP_MARKER, SVG_MOON, SVG_BELL, SVG_GEAR, SVG_THUMB_UP, SVG_X, SVG_MAGNIFYING_GLASS } from '/icons.js'

export const ALL_ICONS = [
    {icon: SVG_LAYOUT,
    title: 'layout',
    categories: 'design menu',
    tags: 'layout design menu organização'},

    {icon: SVG_FIRE,
    title: 'fogo',
    categories: 'natureza sinalização',
    tags: 'fogo natureza sinalização quente calor chama perigo cuidado aviso'},

    {icon: SVG_AT,
    title: 'arroba',
    categories: 'internet social',
    tags: 'arroba internet social email e-mail'},

    {icon: SVG_BOLT,
    title: 'raio',
    categories: 'natureza sinalização',
    tags: 'raio natureza sinalização eletricidade perigo cuidado aviso'},

    {icon: SVG_CLOUD,
    title: 'nuvem',
    categories: 'internet natureza',
    tags: 'nuvem internet natureza servidor'},

    {icon: SVG_CALENDAR,
    title: 'calendário',
    categories: 'tempo',
    tags: 'calendário tempo dia mês ano compromisso'},

    {icon: SVG_CART,
    title: 'carrinho',
    categories: 'e-commerce objetos menu',
    tags: 'carrinho e-commerce objetos menu ecommerce loja compras mercado'},

    {icon: SVG_CHAT,
    title: 'chat',
    categories: 'internet social menu',
    tags: 'chat internet social menu balão fala conversa'},

    {icon: SVG_SECURE,
    title: 'seguro',
    categories: 'internet segurança',
    tags: 'seguro internet segurança escudo certo'},

    {icon: SVG_CHECK,
    title: 'certo',
    categories: 'menu',
    tags: 'certo menu correto aprovado preenchido'},

    {icon: SVG_DOTS_HORIZONTAL,
    title: 'pontos horizontais',
    categories: 'menu',
    tags: 'pontos horizontais menu sanduíche hambúrguer'},

    {icon: SVG_DOTS_VERTICAL,
    title: 'pontos verticais',
    categories: 'menu',
    tags: 'pontos verticais menu sanduíche hambúrguer'},

    {icon: SVG_PENCIL,
    title: 'lápis',
    categories: 'design objetos',
    tags: 'lápis design objetos escrita caneta'},

    {icon: SVG_PADLOCK,
    title: 'cadeado',
    categories: 'segurança objetos',
    tags: 'cadeado segurança objetos fechadura chave trancado fechado'},

    {icon: SVG_MAP,
    title: 'mapa',
    categories: 'localização objetos',
    tags: 'mapa localização objetos lugar'},

    {icon: SVG_MAP_MARKER,
    title: 'marcador de mapa',
    categories: 'localização',
    tags: 'marcador de mapa localização lugar'},

    {icon: SVG_MOON,
    title: 'lua',
    categories: 'natureza menu',
    tags: 'lua natureza menu noite escuro'},

    {icon: SVG_BELL,
    title: 'sino',
    categories: 'objetos sinalização menu',
    tags: 'sino objetos sinalização menu notificação sininho'},

    {icon: SVG_GEAR,
    title: 'engrenagem',
    categories: 'menu objetos',
    tags: 'engrenagem menu objetos configuração'},

    {icon: SVG_THUMB_UP,
    title: 'joínha',
    categories: 'internet social',
    tags: 'joínha internet social joia legal mão'},

    {icon: SVG_X,
    title: 'xis',
    categories: 'menu',
    tags: 'xis menu fechar excluir sair errado negado'},

    {icon: SVG_MAGNIFYING_GLASS,
    title: 'lupa',
    categories: 'menu objetos',
    tags: 'lupa menu objetos procurar pesquisar achar encontrar'}
]

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