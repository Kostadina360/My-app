
export function recepiesReducer(state={recepies:[], error:null}, action){
    switch (action.type){

        case 'FETCH_RECEPIES_PENDING':{
            return{...state, isBusy:true}
        }

        case'FETCH_RECEIPES_SUCESS':{
        //    return{recepies:action.payload, error:null}
            return{...state, recepies:action.payload,
                 error:null,
                isBusy:false}
        }
        case'FETCH_RECEPIES_ERROR':{
            return{...state,
                 error:action.payload,
                isBusy:false}
        }
        default:{
            return state
        }
    }   
}