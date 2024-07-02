module.exports = (data,vendor)=>{
    result = data.filter(product =>{
       return  product.from === vendor
    })
    if(result.length >=1){
        return result;
    }else if(!vendor){
        return {
            error: "Product vendor not provided"
        }
    }
    else{
        return {
            result: "No products"
        }
    }
    
}