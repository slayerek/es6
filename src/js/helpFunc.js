
export const paramsFunc = paramObj => {
    
    let params = "?";
    let numOfProp = Object.keys(paramObj).length - 1;//number of object properties
    let i = 0;
    let enc;
        
    for( let key in paramObj  ){

       numOfProp === i ? enc = '' : enc = '&';

        params += `${key}=${paramObj[key] + enc}`;

        i++; 
    }
    
    return params;
    
}//this function joins params into the string


export const shortText = (str,separator,limit) => {
    
    const arr = str.split(separator);
    let newName = '';
    
    newName = arr.reduce( (prevVal,currVal) => {
        
        return (prevVal + currVal).length < limit ? prevVal + ' ' + currVal : prevVal;
        //console.log(currVal); 
        
    });
    
    return `${newName}..`;
    
}

export const randEl = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
}

export const clearHash = () => {
    
    console.log(window.location.hash)
    
    if( window.location.hash ){ 
        
        window.location.hash = '';
        window.location.reload();
    
    }    
    
}