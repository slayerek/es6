
export default class Cart {
    
    getList(){ return JSON.parse( localStorage.getItem('cart_items') ); }
    
    addToCart(id,title){
        
        let cartArr = [];
        let cartItems = '';
        let quant = 1;
        
        if( this.getList() !== null ){
            
            cartArr = this.getList();
            
            const elemInd = cartArr.findIndex(  
                (elem) => {
                    return elem.id == id; 
               }
            );
            
            if(elemInd > -1)
                cartArr[elemInd].quantity += 1;
            else
                cartArr.push({ id : id , title : title , quantity : quant });
             
        }else
            cartArr.push({ id : id , title : title , quantity : quant });
            
        cartItems = JSON.stringify(cartArr);
        localStorage.setItem('cart_items',cartItems);
        
        
    }
    
    removeFromCart(id){
        
        let cartArr = [];
        let cartItems = '';
        
        cartArr = this.getList();
       
        const elID = cartArr.findIndex( (elem) => {
           return elem.id == id; 
        });
        
        cartArr.splice(elID,1);
        
        cartItems = JSON.stringify(cartArr);
        localStorage.setItem('cart_items',cartItems);
        
    }
    
    updateQuantity(type,id){
        
        let cartArr = [];
        let cartItems = '';
        
        cartArr = this.getList();
        
        const elID = cartArr.findIndex( (elem) => {
           return elem.id == id; 
        });
        
        if(type==='decrease' && cartArr[elID].quantity > 1  )
            cartArr[elID].quantity -= 1;
        else if(type==='increase')
            cartArr[elID].quantity += 1;
                
        cartItems = JSON.stringify(cartArr);
        localStorage.setItem('cart_items',cartItems);
        
    
    }
    
    
}


