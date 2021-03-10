import React,{Component} from 'react'

class Condition1 extends Component{
    constructor(){
        super()
        this.state={
            login: true
        }
    }

    render(){
        // if(this.state.login == true){
        //     return <button>LOGOUT</button>
        // }
        // else{
        //     return <button>LOGIN</button>
        // }

        return(
            this.state.login? <h1> Ligin : TRUE </h1> : <h1> Login : FALSE </h1>
        )
    }
}

export default Condition1;