import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export function saveUsername (username){
    return function (dispatch){
        dispatch({
            type: 'SAVE_USERNAME',
            payload: username
        })
    }
}

function usernameReducer(state= {usernameReducer:''}, action){
    if (action.type==='SAVE_USERNAME'){
      //  return Object.assign( {}, state, {usernameReducer:action.payload})
      return({...state, username: action.payload})
    } else{
        return state
    }

}
const rootReducer = combineReducers({
     usernameReducer

})


//create store objects by combining the reducers
const store=createStore(rootReducer, applyMiddleware(logger, thunk))
console.log(store)
console.log(store.getState())


//export store object to be used in the react components
export default store