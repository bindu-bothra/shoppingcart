import { connect } from 'react-redux'
import React from 'react'
import Product from '../components/Product';
import {addItems} from '../actions'

 const mapStateToProps = state => {
    return {
      data: state.products.products
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      onClickBuy:(id,size,price,quantity,isFreeShipping)=>{
            dispatch(addItems(id,size,price,quantity,isFreeShipping))
      }
    }
  }  

export let ProductList=({data,onClickBuy})=>{
  
  return (
    data.map(element => {
      return( <Product key={element.id} data={element} onClickBuy={onClickBuy}/>)
    })
    );}

    export default connect(
        mapStateToProps,mapDispatchToProps
      )(ProductList)

      
// export default ProductList