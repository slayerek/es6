//const axios = require('axios');
import axios from 'axios';
import { paramsFunc } from '../helpFunc';

export default class Search { 
        
    constructor(url,params){
        this.url = url;
        this.params = params;
        
    }
         
    async getResults(){
        
        try{
            
            const params = paramsFunc(this.params);
            const url = this.url + params;
            const result = await axios(url);
            
            this.result = result.data.results;
            
        } catch(error){
            
            console.log(error);
        
        }
        
    }    
    
    /* inna metoda
    getResults(){
        
        const url = this.url + params;
        const result =  axios(url);
        
        axios(url).then( 
                resp => { 
                    console.log(resp);
                }
        ).catch(
            (error) => { console.log(error) }
        );
        
    }
    */     
         
    
        
        
}



