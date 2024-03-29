import React from 'react'
import store from '../redux/store'
import {addItemToFavorites, removeItemFromFavorites} from '../redux/favoritesActions/addItemToFavorites'

export default class SingleRecepie extends React.Component{
   addToFavorites =  () => {
   // store.dispatch(addItemToFavorites(this.props.key, this.props.description)) ova e parametar a slednoto e objekt
   store.dispatch(addItemToFavorites({
    key: this.props.id,
    description: this.props.description
   }))
   }

   removeFromFavorites = () => {
       store.dispatch(removeItemFromFavorites( this.props.id))
   }
     

    render(){
        let button=null
        if (this.props.action=="add"){
           button= <button classname='btn btn-sucess' onClick={this.addItemToFavorites}>Add to favorites
            </button>
        } else{
           button= <button className='btn btn-danger' onClick={this.removeFromFavorites}>
            Remove from favorites
           </button>}

            return <div className='flex-item'>
                 <div id='tuna'>{this.props.description}</div>
                {button}
              </div>
        }
     
    
    
    }

