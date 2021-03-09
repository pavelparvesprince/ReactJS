import React,{Component} from 'react'

class Welcome extends Component{

    constructor(){
        super()
        this.state={
            name: "Prince",
            age: 28,
            height: "5 feet 3 inch"
        }
    }

    render(){
        return <div>
             <h1>Name   : {this.state.name}</h1>
             <h1>Age    : {this.state.age}</h1>
             <h1>Height : {this.state.height}</h1>
             </div>
    
    };
}

export default Welcome;