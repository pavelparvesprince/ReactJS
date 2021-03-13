import React, { Component } from 'react';

class Textarea extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            desc : ""
         }
    }

    showMessege=(event)=>{
        var message = event.target.value;
        this.setState({desc : message})
    }

    render() { 
        return ( 
            <div>
                <textarea onChange={this.showMessege} placeholder="My Message"></textarea>
                <p>{this.state.desc}</p>
            </div>
         );
    }
}
 
export default Textarea;