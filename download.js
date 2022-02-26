// IMPORTS E VARIÁVEIS --->

import { iconSize } from './configIconSize.js'
import { iconWidth } from './configIconWidth.js'
import { iconColor } from './configIconColor.js'
import { selectedItems } from './items.js'


// FUNÇÕES --->

export const downloadButton = () => {
    const DOWNLOAD_BUTTON = document.querySelector('[data-download-button]')
    const DESELECT_ALL_BUTTON = document.querySelector('[data-deselect-all-button]')

    if(selectedItems.length === 0) {
        DOWNLOAD_BUTTON.innerText = 'Nenhum ícone selecionado'
        DOWNLOAD_BUTTON.classList.add('--download_button-disabled')
        DESELECT_ALL_BUTTON.classList.add('--invisible')

    } else if(selectedItems.length === 1) {
        DOWNLOAD_BUTTON.innerText = `Baixar ${selectedItems.length} ícone`
        DOWNLOAD_BUTTON.classList.remove('--download_button-disabled')
        DESELECT_ALL_BUTTON.classList.add('--invisible')
            
    } else {
        DOWNLOAD_BUTTON.innerText = `Baixar ${selectedItems.length} ícones`
        DESELECT_ALL_BUTTON.classList.remove('--invisible')
    }
}

export const download = () => {
    const SVG_CONFIG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${iconSize}" height="${iconSize}" stroke="#${iconColor}" stroke-width="${iconWidth}" fill="none"><path vector-effect="non-scaling-stroke"`

    if(selectedItems.length === 1) {
        const BLOB = new Blob([`${SVG_CONFIG} ${selectedItems[0].icon}`], {type: 'image/svg+xml'})
        saveAs(BLOB, `${selectedItems[0].title}.svg`)
    }

    if(selectedItems.length > 1) {
        let zip = new JSZip()

        for(let i = 0; i < selectedItems.length; i++) {
            zip.file(`${selectedItems[i].title}.svg`, `${SVG_CONFIG} ${selectedItems[i].icon}`)
        }

        zip.generateAsync({type:'blob'}).then(function(content) {
            saveAs(content, 'ícones.zip')
        })
    }
}