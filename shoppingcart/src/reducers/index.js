import { combineReducers } from 'redux'
import {modifyItems,products} from './modifyItems'
import {filterItems} from './filterItems'
import {sortItems} from './sortItems'

const cart = combineReducers({
  products, modifyItems,filterItems,sortItems
});

export default cart

