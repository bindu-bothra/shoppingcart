import { createStore} from 'redux';
import cart from '../reducers';
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/es/storage'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
//import {applyMiddleware} from 'redux';
// import data from '../productsData.json';
//import thunk from 'redux-thunk';

const config = {
    key: 'root',
    storage,
  }

const pReducer = persistReducer(config, cart)

export const store = (createStore)(pReducer);

export const persistor = persistStore(store)
console.log(store.getState());
   
// var store=createStore(cart,data);
// console.log(store.getState()) 

// export default store;


