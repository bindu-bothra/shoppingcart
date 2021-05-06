import { connect } from 'react-redux'
import React from 'react'
import Product from '../components/Product';
import {addItems} from '../actions'
const mapStateToProps = state => {
    return {
      data: state.filterItems,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      onClickBuy:(id,size,price,isFreeShipping)=>{
            dispatch(addItems(id,size,price,isFreeShipping))
      }
    }
  }  


export let Filtering=({data,onClickBuy})=>{
  
    return(
      data.map(element => {
        return( <Product key={element.id} data={element} onClickBuy={onClickBuy}/>)
      }))
}

export default connect(
    mapStateToProps,mapDispatchToProps
  )(Filtering)

  
// export default Filtering