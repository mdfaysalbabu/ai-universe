import { getShoppingCart } from "../utilities/fakedb"

const handleDataLoad=async()=>{
    const loadProducts=await fetch('products.json')
    const products=await loadProducts.json();
    
    const storeCard=getShoppingCart();
    const saveCart=[]
    for(const id in storeCard){
        const addedProduct=products.find(pd=>pd.id===id);
        if(addedProduct){
            const quantity=storeCard[id]
            addedProduct.quantity=quantity;
            saveCart.push(addedProduct)
        }
    }
    // if you need send tow things
    // return [products,saveCart]
    // return {products,cart:saveCart}
    return saveCart
}
export default handleDataLoad;