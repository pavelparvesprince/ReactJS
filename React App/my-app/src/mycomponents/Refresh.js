import React,{Component} from 'react'

class Refresh extends Component{

    constructor(){
        super()
        this.refreshNow = this.refreshNow.bind(this);
    }

    refreshNow(){
        this.forceUpdate();
    }

    render(){
        return <div>
                <h1>Refresh Example</h1>
                <button onClick={this.refreshNow}>Refresh Button</button>
                <h1>{Math.random()}</h1>
            </div>
        
    }
}

export default Refresh;