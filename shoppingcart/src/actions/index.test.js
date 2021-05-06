import * as actions from './index.js'
// import * as types from './types.js'

describe('actions', () => {
  it('should create an action to add items', () => {
    const id = 0;
    const size= 'L';
    const price= 10.9;
    const quantity=1;
    const isFreeShipping=true;
    const expectedAction = {
      type: 'ADD_ITEM',
      cartId:expect.any(Number),
      id,
      size,
      price,
      quantity,
      isFreeShipping
    }
    expect(actions.addItems(id,size,price,quantity,isFreeShipping)).toEqual(expectedAction)
  })

  it('should create an action to remove items', () => {
  
    const cartId=0.52;
    const price= 10.9;
    const quantity=1;
    const isFreeShipping=true;
    const expectedAction = {
      type: 'REMOVE_ITEM',
      cartId:expect.any(Number),
      price,
      quantity,
      isFreeShipping
    }
    expect(actions.removeItems(cartId,price,quantity,isFreeShipping)).toEqual(expectedAction)
  })

  it('should create an action to filter items', () => {
  
    const id= 'S';
    const expectedAction = {
      type: 'FILTER_ITEM',
      id
    }
    expect(actions.filterItems(id)).toEqual(expectedAction)
  })

  it('should create an action to sort items', () => {
  
    const sortOrder= 'asc';
    const expectedAction = {
      type: 'SORT_ITEM',
      sortOrder
    }
    expect(actions.sortItems(sortOrder)).toEqual(expectedAction)
  })


})

