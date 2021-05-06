import data from '../productsData.json';

export const modifyItems = (state={products:[],amount:0.0},action)=>{
    const shippingCharge=parseFloat(1);
    let updatedStateProducts;
    switch(action.type){
        case 'ADD_ITEM':
        // console.log(state)
        let flag=false

        //Increase the quantity if the same product is chosen 
        updatedStateProducts=state.products.map(element=>{
            if(element.id===action.id && element.selectedSize===action.size){
                flag=true
                // console.log(typeof action.quantity )
                // console.log(typeof element.quantity )
                return {
                    ...element,
                   quantity:element.quantity+parseFloat(action.quantity)
                };
            }
            return element
        });

        // if new product is chosen add it to the state
        if(!flag){
            updatedStateProducts=[...state.products,{
                cartId:action.cartId,
                id:action.id,
                selectedSize:action.size,
                price:action.price,
                quantity:parseFloat(action.quantity),
                isFreeShipping:action.isFreeShipping
            }]
         }

        //add the price of the newly added item
        let newPrice=0
        if(!action.isFreeShipping)
        {
             newPrice=shippingCharge
        }
        // console.log(newPrice)
        newPrice=newPrice+(state.amount)+((action.quantity)*parseFloat(action.price))
        return {...state,products:updatedStateProducts,
            amount: +newPrice.toFixed(2)};//to get price upto 2 decimal places
           
        case 'REMOVE_ITEM':
        // console.log(state)

        //to delete the product
        let deletedStateProducts=state.products.filter(element => element.cartId!==action.cartId)

        //to decrease the amount
        let newPrice1=0
        
        if (!action.isFreeShipping)
        {
            
            newPrice1=shippingCharge
            
        }
      
        // console.log(newPrice1)
        newPrice1=state.amount-((action.quantity)*parseFloat(action.price))-newPrice1
        
        return {...state,products:deletedStateProducts,
            amount: +newPrice1.toFixed(2)};//to get price upto 2 decimal places


            
     default: 
      return state 
    }
}


export const products = (state=data,action)=>{
    return state
            }
