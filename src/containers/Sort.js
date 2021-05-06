import { connect } from 'react-redux'
import React from 'react'
import Product from '../components/Product';
import {addItems} from '../actions'


const mapStateToProps = state => {
    return {
      data:state.sortItems.products
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      onClickBuy:(id,size,price,isFreeShipping)=>{
            dispatch(addItems(id,size,price,isFreeShipping))
      }
    }
  }  


export let Sort=({data,onClickBuy})=>{
  return (
    data.map(element => {
      return( <Product key={element.id} data={element} onClickBuy={onClickBuy}/>)
    })
    );
  }


  export default connect(
    mapStateToProps,mapDispatchToProps
  )(Sort)

  
// export default Sort