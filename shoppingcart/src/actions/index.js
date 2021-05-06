
//for adding items in cart
export const addItems = (id,size,price,quantity,isFreeShipping) => ({
  type: 'ADD_ITEM',
  cartId:Math.random(),
  id,
  size,
  price,
  quantity,
  isFreeShipping
})

//for removing items from cart
export const removeItems = (cartId,price,quantity,isFreeShipping) => ({
  type: 'REMOVE_ITEM',
  cartId,
  price,
  quantity,
  isFreeShipping
})

//for filtering items
export const filterItems = (id) => ({
  type: 'FILTER_ITEM',
  id
})

//for sorting items
export const sortItems = (sortOrder) => ({
  type: 'SORT_ITEM',
  sortOrder
})