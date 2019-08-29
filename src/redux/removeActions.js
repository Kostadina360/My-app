

export function removeItemFromFavorites (id){
    return function (dispatch){
        dispatch({
            type: 'REMOVE_ITEM_TO_FAVORITES',
            payload: id

        })
    }
}