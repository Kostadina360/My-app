import React from 'react'
import SingleRecepie from './SingleRecepie'
import {connect} from 'react-redux'

const Favorites = (props)=> {
    let emptyList=''
    const components=props.favorites.recepies.map(element)
    return   <SingleRecepie 
        key={element.key}
        id={element.id}
        description={element.description}/>
}

if(components.lenght<1){
    return<div> You have no favorite recepie</div>
}

    console.log(props)
    return <div>{props.favorites.recepies}</div>


function mapStateToProps(state){
    return{
        favorites: state.favorites.recepies
    }
}


export default connect(mapStateToProps)(Favorites)