import '../css/style.css';

import { elements , spinner , clearSpinner } from './views/base';
import { clearHash } from './helpFunc'; 

import Search from './models/Search';
import SingleRoute from './models/SingleRoute';
import Cart from './models/Cart';

import * as searchView from './views/searchView';
import * as singleRouteView from './views/singleRouteView';
import * as cartView from './views/cartView';



clearHash();//when we are watching results 

const state = {};//global state main controller

const controllerSeach = async() => {
    
    const query = searchView.searchVal();
    const url = 'http://195.181.223.13/lista-tras';
    const params = { query : query , ilosc : 3 };
    
    searchView.clearList();//clear list inside main container
    
    //if(query){
        
        state.search = new Search(url,params);
        
        spinner(elements.cardsMainPage);//show loader until data is not ready
        
        try {

            await state.search.getResults();
            
            setTimeout( () => {  
                
                clearSpinner(elements.cardsMainPage);
                searchView.pagination(state.search.result,3,1);
                controllerCart();
                
            } , 300 );//this setTimeout is here to show spinner loader, because data in api is not enough big 
            
        } catch(error){
            console.log(error);
        } 
        
    //}
    
    //setTimeout( ()=>{ console.log(state.search.results) }, 1000 )
    
}
 
 
elements.pagResults.addEventListener('click',(evt) => {
    
    const btnPag = evt.target.closest('.button-pagination');
    
    if( btnPag !== null ){
        
        const pageNumber = parseInt(btnPag.dataset.page);//working on chrome
        
        searchView.clearList();
        searchView.pagination(state.search.result,3,pageNumber);
    
    }//this case is to prevent clicking around prev and next buttons 
    
}); 
 
elements.searchForm.addEventListener("submit", (event) => {
    
    event.preventDefault();
    controllerSeach();

}); 




const controllerSingleRoute = async(id) => {
    
    try {
        
        const url = `http://195.181.223.13/trasa/${id}`;
        const singRoute = new SingleRoute(url);
        await singRoute.getSingleRoute();
        
        singleRouteView.clearItemDesc();
        singleRouteView.createItemDescr(singRoute.result);
        
    } catch(error){
        console.log(error);
    }
    
}


window.addEventListener("hashchange", (evt) => {
    
    const hashId = window.location.hash;
    
    const listHashTags = Array.prototype.slice.call(elements.cardsMainPage.querySelectorAll("a") );
    const currEl = listHashTags.find( el =>  hashId == el.hash );
    
    if(currEl){
        
        const currUID = listHashTags.find( el =>  hashId === el.hash ).hash;
        
        controllerSingleRoute( currUID.replace('#','') ); 
        
    }
    
    /*const currEl = listHashTags.find( el =>  hashId === el.hash ).previousElementSibling.innerHTML;
    const itemDesc = elements.itemDescHeader;
    itemDesc.insertAdjacentHTML('afterend', `<div class='item-descr-content'>${currEl}</div>`);
    */
    
}, false);




state.cartInst = new Cart();
cartView.getItemsList();

const controllerCart = () => { 
    
    elements.cardsMainPage.addEventListener('click', (evt) => {
       
        if( evt.target.matches('.addToCart') ){
            
            const id = evt.target.dataset.id;
            const title = evt.target.dataset.title;
            
            state.cartInst.addToCart(id,title);
            cartView.getItemsList();
            
        }//if button has clicked 
        
    });
    
   
}

elements.cartContainer.addEventListener('click',(evt) => {
    
    if( evt.target.closest('.removeItem') ){
        
        const id = evt.target.dataset.id;
        
        state.cartInst.removeFromCart(id);
        cartView.getItemsList();
        
    }
    
});

//updateQuantity


elements.cartContainer.addEventListener('click',(evt) => {  
    
    if( evt.target.matches('.updateQuantity') ){
        
        const arr = evt.target.className.split(' ');
        const currClass = arr[arr.length-1];
        const id = evt.target.parentElement.querySelector(".removeItem").dataset.id;
        
        state.cartInst.updateQuantity(currClass,id);
        cartView.getItemsList();
        
    }

});

 
 

 
 



  
  
  