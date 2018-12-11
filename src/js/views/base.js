export const elements =  {
    searchForm : document.querySelector('.searchForm'),
    inputSearch : document.querySelector('.inputSearch'),
    cardsMainPage : document.querySelector('.cardsMainPage'),
    pagResults : document.querySelector('.pagResults'),
    itemDescHeader : document.querySelector('.item-descr-header'),
    cartContainer : document.querySelector('.cart_container'),
    
}

export const spinner = (parent) => {  parent.innerHTML = '<img src="./images/spinner.gif" />'; }
    
export const clearSpinner = (parent) => { parent.innerHTML = ''; }    