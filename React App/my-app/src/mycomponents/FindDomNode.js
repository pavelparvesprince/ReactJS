import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class FindDomNode extends Component {

    changeImage(){
        // var img = document.getElementById("imgTag");
        ReactDOM.findDOMNode(document.getElementById("imgTag")).src = "https://mk0paperlessmovn94k7.kinstacdn.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg";
    }

    render() {
        return (
            <div>
                <button onClick={this.changeImage}>Change Image</button>
                <br></br>
                <img id="imgTag" src="https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"></img>
            </div>
        );
    }
}

export default FindDomNode;