import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class NewDemo extends Component {

    myFunction(){
         var container = document.getElementById("myh1");
         var element = <h1> My name is : Parves <br/> I am from element </h1>
         var callbackFun = function(){
             alert("Dom is changed");
         }
         ReactDOM.render(element, container, callbackFun);
    }

    render() {
        return (
            <div>
                <button onClick={this.myFunction}>Change</button>
                <h1 id="myh1">My Name is : Prince</h1>
            </div>
        );
    }
}

export default NewDemo;