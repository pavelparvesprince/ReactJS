import React, { Component } from 'react';

class Form3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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

    onSubmitHandler=()=>{
        alert("First Name : "+this.state.firstName+"\nSecond Name : "+this.state.secondName);
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>Event Handler for onSubmit input</p>
                    <p>{this.state.firstName} <br></br> {this.state.secondName}</p>
                    <input name="firstName" onChange={this.onfNameChnageHandler} type="text" placeholder="first name"></input>
                    <br></br>
                    <input name="secondName" onChange={this.onsNameChnageHandler} type="text" placeholder="second name"></input>
                    <br></br>
                    <button type="sumbit" value="Submit">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Form3;