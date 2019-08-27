import React from 'react'
import './recepies.css'
import SingleRecepie from './SingleRecepie';
import {connect} from 'react-redux'
import {fetchRecepies} from '../redux/fetchRecepies'
import store from '../redux/store'


class Recepies extends React.Component {
    /*  componentWillMount(){store.dispatch(fetchRecepies())}
      render(){
      const components=this.props.recepies.map((element)=>{
            return   <SingleRecepie 
            key={element.id}
            description={element.title}/>
      })
      */

      constructor(){
            super()
            this.state={
                  recepies:[], error:null
            }
      }
      if(components.length<1){
            return<div>Loading..</div>
            else{
                  return <div id='recepies' className='flex-container'> {components} </div>
            }
                
      }
      }
}

     /*} <SingleRecepie  description= {data[0].description}/>
      <SingleRecepie description= {data[1].description}/>
      <SingleRecepie description= {data[2].description}/>
      <SingleRecepie description= {data[3].description}/>

     
     
<input type="checkbox" name='salad' value='salad'>Tuna salad</input>*/
    

function mapStateToProps(state){
      return
           {
            recepies: state.recepies.recepies
           }
      
}

export default connect(mapStateToProps)(Recepies)

