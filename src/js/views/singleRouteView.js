import { elements } from './base';


export const createItemDescr = content => {
    
    const markup = `
        <div class='item-descr-content'>
            ${content}
        </div>
        `;
    
    elements.itemDescHeader.insertAdjacentHTML('afterend', `<div class='item-descr-content'>${markup}</div>`);
    
}

export const clearItemDesc = () => {
    
    const parent = elements.itemDescHeader.parentElement;
    
    parent.removeChild(parent.childNodes[2]);
    
}


