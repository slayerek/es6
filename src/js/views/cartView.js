import { elements } from './base';
import { shortText } from '../helpFunc';


export const getItemsList = () => {
    
    
    if( localStorage.getItem('cart_items') != null ){
    
        const itemsList = JSON.parse( localStorage.getItem('cart_items') );
        let items = '';


        itemsList.forEach( item =>  {

            items += createItem(item.id,item.title,item.quantity);

        });    

        elements.cartContainer.innerHTML = items;    
    
    }
    
}


const createItem = (id,title,quantity) => {
   
   return `
        <li>
            <b>${shortText(title,' ',25)}</b> 
            <span>quantity: <strong>${quantity}</strong></span>
            <span data-id=${id} class="removeItem">
                Remove item &nbsp;<i class="fas fa-trash" style="font-size:14px"></i>
            </span>
            <i class="fas fa-plus updateQuantity increase" style="font-size:14px"></i>&nbsp;
            <i class="fas fa-minus updateQuantity decrease" style="font-size:14px"></i>
        </li>
         `;
   
}

