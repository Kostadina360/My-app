import React from 'react'

class Header extends React.Component{
    constructor (props) {
        super(props)
        this.state={
            'count': 0
        }

    }
increment = ()=> {
 this.setState(
     {'count': this.state.count + 1 },
     () => console.log(this.state)
 )
}



    render () {
        const {name, surname} = this.props
        if (name && surname) {
            return <div> 
                {name + '' + surname}
                <button id = 'increment' onClick={this.increment}>
                    Increment me!

                </button>
                <div>number:{this.state.count}</div>
            </div>
        }
        else { 
            return <div>Error 404</div>
        }
        
    }
}
export default Header 