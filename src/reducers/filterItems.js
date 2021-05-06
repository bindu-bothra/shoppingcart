import data from '../productsData.json';
export const filterItems = (state=data,action)=>{
   
    switch(action.type){
        case 'FILTER_ITEM':
        let key=action.id
        let dataModified=data.products.filter(element=>
            (element.availableSizes.find(ele=>ele===key)!==undefined)    
         )
        // console.log(dataModified)
        return dataModified;
        
     default: 
      return state 
    }
}


