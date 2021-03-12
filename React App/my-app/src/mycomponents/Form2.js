import React, { Component } from 'react';

class Form2 extends Component {

    constructor(){
        super();
        this.state={
            firstName:" ",
            secondName:" "
        }
    }

    onfNameChnageHandler=(event)=>{
        var myFirstName = event.target.name;
        var myvalue = event.target.value;
        this.setState({[myFirstName]: myvalue});
    }
    onsNameChnageHandler=(event)=>{
        var mySecondName = event.target.name;
        var myvalue = event.target.value;
        this.setState({[mySecondName]: myvalue});
    }

    render() { 
        return ( 
            <div>
                <p>Event Handler for Multiple input</p>
                <p>First Name : {this.state.firstName} <br></br>Second Name : {this.state.secondName}</p>
                <input name="firstName" onChange={this.onfNameChnageHandler} type="text" placeholder="first name"></input>
                <br></br>
                <input name="secondName" onChange={this.onsNameChnageHandler} type="text" placeholder="second name"></input>
            </div>
         );
    }
}
 
export default Form2;