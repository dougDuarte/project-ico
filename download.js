// IMPORTS E VARIÁVEIS --->

import { ALL_ICONS, selectedItems } from './items.js'


// FUNÇÕES --->

export const downloadButton = () => {
    const DOWNLOAD_BUTTON = document.querySelector('[data-download-button]')

    if(selectedItems.length === 0) {
        DOWNLOAD_BUTTON.classList.add('--download_button-disabled')
        DOWNLOAD_BUTTON.innerText = 'Selecione seus ícones'
    } else {
        DOWNLOAD_BUTTON.classList.remove('--download_button-disabled')

        if(selectedItems.length === 1) {
            DOWNLOAD_BUTTON.innerText = `Baixar ${selectedItems.length} ícone (WIP)`
        } else {
            DOWNLOAD_BUTTON.innerText = `Baixar ${selectedItems.length} ícones (WIP)`
        }
    }
}

export const download = (btn) => {
    if(selectedItems.length === 1) {
        const BLOB = new Blob([ALL_ICONS[0].icon], {type: 'image/svg+xml'})
        const URL = window.URL.createObjectURL(BLOB)

        btn.href = URL
        btn.download = ALL_ICONS[0].title

        //window.URL.revokeObjectURL(BLOB)
    }
}