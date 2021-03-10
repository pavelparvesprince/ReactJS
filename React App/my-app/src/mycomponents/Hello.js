import React,{Component} from 'react'

class Hello extends Component{

    constructor(){
        super()
        this.state={
            name:"Prince"
        }
    }

    ChangeName(newName){
        this.setState({name:newName})
    }

    render(){
        return <div>
            <h1> Name = {this.state.name}</h1>
            <button onClick={this.ChangeName.bind(this, "Parves")}>Change Name</button>
        </div>
    }
}

export default Hello;