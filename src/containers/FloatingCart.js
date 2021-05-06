import React from 'react'
import SelectedProduct from '../components/SelectedProduct';
import {removeItems} from '../actions'
import { connect } from 'react-redux'
 const mapStateToProps = state => {
    return {
      selectedData: state.modifyItems.products,
      data: state.products.products,
      amount:state.modifyItems.amount
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        onClickRemove:(id,price,quantity,isFreeShipping)=>{
            dispatch(removeItems(id,price,quantity,isFreeShipping))
      }
    }
  }


 export let FloatingCart=({data,selectedData,amount,onClickRemove})=>{

    return (
      <div>
         { (selectedData===undefined || selectedData.length===0)?
         <h2>No Items</h2>:
          selectedData.map(element => {
          return( <SelectedProduct key={element.cartId} selectedData={element} data={data} onClickRemove={onClickRemove}/>)
        })
        }
         {(amount===0)?<></>:<h3>Total Amount: ${amount} </h3>}
        
      </div>
  )
};

export default connect(
        mapStateToProps,mapDispatchToProps
      )(FloatingCart)  
      // export default FloatingCart