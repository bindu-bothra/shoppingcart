import data from '../productsData.json';
export const sortItems = (state=data,action)=>{
   
    switch(action.type){
        case 'SORT_ITEM':
        let key=action.sortOrder
        
        // console.log(data)
        if(key==="asc"){
            data.products.sort((a,b) => (a.price - b.price))
        }
        else{
            data.products.sort((a,b) => (b.price - a.price))
        }
        return data;
        
     default: 
      return state 
    }
}