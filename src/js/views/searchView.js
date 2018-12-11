import { elements } from './base';
import { shortText , randEl } from '../helpFunc';
//import uniqid from 'uniqid';

export const searchVal = () => { return elements.inputSearch.value; }
  
export const clearList = () =>  elements.cardsMainPage.innerHTML = '';


export const createCard = (uid,name,shortDesc,cardClass) => {
     
    const markup = `
        <div class="card ${cardClass}">
            <div class="card-body text-center">
                <h6>
                   <kbd> ${ shortText(name,' ',26) }</kbd>
                </h6>
                <p class="card-text">
                    ${shortDesc}
                </p>
                <a href="#${uid}">
                    More...
                </a>
                <span class="addToCart" data-id="${uid}"  data-title="${name}">Add to cart</span>
            </div>
        </div>
    `;
     
    return markup;
     
}

export const pagination = (arr,perPage,pageNumber) => {
    
    const pagesLength = Math.ceil(arr.length/perPage);
    const pagResults = arr.slice( (pageNumber - 1) * perPage , perPage * pageNumber );
    
    renderPagResults(pagResults,pagesLength,pageNumber);
     
}

const renderPagResults = (arr,pagesLength,pageNumber) => {
    
    const buttonType = { next : 'next' , prev : 'prev' };
    let html = '';
    const parent = elements.cardsMainPage;
    const cardClasses = ['bg-primary','bg-warning','bg-success','bg-danger','bg-light','info'];
    
    arr.forEach( (item,index) => {
        
        parent.innerHTML += createCard(item.id,item.nazwa,item.seo_description, randEl(cardClasses) );
        
    });
    
    
    if( pageNumber === 1 ){
        
        html = createPagBtn(buttonType.next,pageNumber);
        
    }else if( pageNumber > 1 && pageNumber < pagesLength ){
        
        html = createPagBtn(buttonType.prev,pageNumber);
        html += createPagBtn(buttonType.next,pageNumber);
        
    }else if( pageNumber == pagesLength ){
        
        html = createPagBtn(buttonType.prev,pageNumber);
        
    }
    
    elements.pagResults.innerHTML = html;
    
}

const createPagBtn = (type,pageNumber) => {
    
    const pagBtn = `
        
        <button class="button-${type} button-pagination" data-page="${ type === 'next' ? pageNumber + 1 : pageNumber - 1 }">
            <span>${type}</span>
            <b>${ type === 'next' ? pageNumber + 1 : pageNumber - 1 }</b>
        </button>

    `;
    
    return pagBtn;
    
}

const clearPagBtn = () => {
    
}