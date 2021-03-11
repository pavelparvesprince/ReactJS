import React, { Component } from 'react';

class Form1 extends Component {

    constructor(){
        super();
        this.state={
            name: ""
        }
    }

    onChangeHandler(event){
        var newName = event.target.value;
        this.setState({name: newName});
    }

    render() {
        return (
            <div>
                <form>
                    <p>Your First Form</p>
                    <p>{this.state.name}</p>
                    <input onChange={this.onChangeHandler} type="text" placeholder="name here"></input>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Form1;