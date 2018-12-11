import axios from 'axios';

export default class SingleRoute {
        
    constructor(url){
        this.url = url;
    }
        
        
    async getSingleRoute(){
        
        try {
            
            const result = await axios(this.url);
           
            this.result = result.data.result;
            
        } catch(error){
            
            console.log(error);
        
        }
        
    }     
        
        
}



