module.exports = (data,title)=>{
    result = data.filter(product =>{
       return  product.productName === title
    })
    if(result.length >=1){
        return result;
    }else if(!title){
        return {
            error: "Product title not provided"
        }
    }
    else{
        return {
            result: "No products"
        }
    }
    
}