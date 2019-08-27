import axios from 'axios'
export function fetchRecepies(){
    return function (dispatch){
        dispatch({
            type:'FETCH_RECEPIES_PENDING',
            payload: response.data
            isBusy: false
        })



        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>{
            dispatch({
             type: 'FETCH_RECEPIES_SUCESS',
             payload: response.data
        })
    })
        
        .catch((error)=>{
            dispatch({
                type:'FETCH_RECEPIES_FAILED',
                payload: error
            })
        })
    }
}