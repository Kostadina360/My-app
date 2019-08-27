import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {favoritesReducer} from './favoritesReducer'
import {recepiesReducer} from './recepiesReducer'

const rootReducer = combineReducers({
     favorites: favoritesReducer,
     recepies:recepiesReducer

})


//create store objects by combining the reducers
const store=createStore(rootReducer, applyMiddleware(logger, thunk))
console.log(store)
console.log(store.getState())


//export store object to be used in the react components
export default store