import React, { Component } from 'react';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            SelectedValue : "Borishal"
         }
    }

    onSelectChange=(event)=>{
        var selectedvalue = event.target.value;
        this.setState({SelectedValue:selectedvalue})
    }

    render() { 
        return ( 
            <div>
                <p>{this.state.SelectedValue}</p>
                <select onChange={this.onSelectChange} value={this.state.SelectedValue}>
                    <option>Dhaka</option>
                    <option>Khulna</option>
                    <option>Borishal</option>
                    <option>chattagram</option>
                    <option>kumilla</option>
                    <option>Padma</option>
                </select>
            </div>
         );
    }
}
 
export default Select;