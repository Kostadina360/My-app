import React from 'react'
import store from '../redux/store'
import {addItemToFavorites} from '../redux/favoritesActions/addItemToFavorites'

export default class SingleRecepie extends React.Component{
   addItemToFavorites =  () => {
    store.dispatch(addItemToFavorites(this.props.description))
   }
    

    render(){
        return <div className='flex-item'>
            <div id='tuna'>{this.props.description}</div>
            <button className='btn btn-sucess'
           onClick={this.addToFavorites}>
                  Add to favorites
            </button>
      </div>
    }

}