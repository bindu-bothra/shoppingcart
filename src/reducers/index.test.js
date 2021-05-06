import reducer from './index.js'
import data from '../productsData.json';

let filterItems,products,sortItems
filterItems=products=sortItems={products:data.products}
let  modifyItems={products:[],amount:0.0}

let initialState= {
    filterItems,
    modifyItems,
    products,
    sortItems
}
describe('cart reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        initialState
      )
    })


    it('should handle ADD_ITEM',()=>{
        //1st item selected
        expect(reducer(
            initialState,
            {
                type:'ADD_ITEM',
                cartId:0.52,
                id:0,
                size:'L',
                price:10.9,
                quantity:2,
                isFreeShipping:true
            })).toEqual({filterItems,products,sortItems,
                    modifyItems:{
                        products:[{ 
                            cartId:0.52,
                            id:0,
                            selectedSize:'L',
                            price:10.9,
                            quantity:2,
                            isFreeShipping:true}],
                        amount:21.8
                    }
            })

        //2nd item selected
        expect(reducer(
               {filterItems,products,sortItems,
                modifyItems:{
                    products:[{ 
                        cartId:0.52,
                        id:0,
                        selectedSize:'L',
                        price:10.9,
                        quantity:2,
                        isFreeShipping:true}],
                    amount:21.8
                    }
            },{
                type:'ADD_ITEM',
                cartId:0.50,
                id:8,
                size:'XL',
                price:18.7,
                quantity:1,
                isFreeShipping:false
            })).toEqual({filterItems,products,sortItems,
                        modifyItems:{
                            products:[{ 
                                cartId:0.52,
                                id:0,
                                selectedSize:'L',
                                price:10.9,
                                quantity:2,
                                isFreeShipping:true},{
                                cartId:0.50,
                                id:8,
                                selectedSize:'XL',
                                price:18.7,
                                quantity:1,
                                isFreeShipping:false
                                }],
                            amount:41.5
                        }
                    })
            })
        
        //1st item again selected
        expect(reducer(
                {filterItems,products,sortItems,
                 modifyItems:{
                     products:[{ 
                         cartId:0.52,
                         id:0,
                         selectedSize:'L',
                         price:10.9,
                         quantity:2,
                         isFreeShipping:true}],
                     amount:21.8
                     }
             },{
                type:'ADD_ITEM',
                cartId:0.51,
                id:0,
                size:'L',
                price:10.9,
                quantity:1,
                isFreeShipping:true
            })).toEqual({filterItems,products,sortItems,
                modifyItems:{
                    products:[{ 
                        cartId:0.52,
                        id:0,
                        selectedSize:'L',
                        price:10.9,
                        quantity:3,
                        isFreeShipping:true}],
                    amount:32.7
                }
        })

    it('should handle REMOVE_ITEM',()=>{
        //1st item removed
        expect(reducer({
            filterItems,
            products,
            sortItems,
            modifyItems:{
                products:[{ 
                    cartId:0.52,
                    id:0,
                    selectedSize:'L',
                    price:10.9,
                    quantity:2,
                    isFreeShipping:true},{
                    cartId:0.50,
                    id:8,
                    selectedSize:'XL',
                    price:18.7,
                    quantity:1,
                    isFreeShipping:false
                    }],
                amount:41.5
                }
        },{
            type:'REMOVE_ITEM',
            cartId:0.50,
            price:18.7,
            quantity:1,
            isFreeShipping:false  
        })).toEqual({
                filterItems,
                products,
                sortItems,
                modifyItems:{
                    products:[{ 
                        cartId:0.52,
                        id:0,
                        selectedSize:'L',
                        price:10.9,
                        quantity:2,
                        isFreeShipping:true}],
                    amount:21.8
                    }
            })

        //2nd item removed
        expect(reducer({filterItems,products,sortItems,
                modifyItems:{
                    products:[{ 
                        cartId:0.52,
                        id:0,
                        selectedSize:'L',
                        price:10.9,
                        quantity:2,
                        isFreeShipping:true}],
                    amount:21.8
                    }
            },{
                type:'REMOVE_ITEM',
                cartId:0.52,
                price:10.9,
                quantity:2,
                isFreeShipping:true  
            })).toEqual(initialState)

    })

    it('should handle SORT_ITEM',()=>{
        //in ascending order
        expect(reducer(initialState,{
            type: 'SORT_ITEM',
            sortOrder:'asc'
        })).toEqual({filterItems,products,modifyItems,
            sortItems:{products:data.products.sort((a,b) => (a.price - b.price))}})
        
        //in descending order
        expect(reducer(initialState,{
            type: 'SORT_ITEM',
            sortOrder:'desc'
        })).toEqual({filterItems,products,modifyItems,
                sortItems:{products:data.products.sort((a,b) => (b.price - a.price))}})
        
    })

    it('should handle FILTER_ITEM',()=>{
        expect(reducer(initialState,{
            type: 'FILTER_ITEM',
            id:'M'
        })).toEqual({products,modifyItems,sortItems,
            filterItems:[{
                "id": 13,
                "sku": 51498472915966366,
                "title": "Dark Thug Blue-Navy T-Shirt",
                "description": "",
                "availableSizes": ["M"],
                "style": "Front print and paisley print",
                "price": 29.45,
                "installments": 5,
                "currencyId": "USD",
                "currencyFormat": "$",
                "isFreeShipping": true
              }]})  
    })

});
