import React, { Component } from 'react';

class List extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         listItems : ['bangladesh', 'India', 'Canada', 'Srilanka', 'China']
    //      }
    // }

    mydataChild=(data)=>{
    
        return <option>{data}</option>
    }

    render() {    
        const country =  ['bangladesh', 'India', 'Canada', 'Srilanka', 'China'];
    
        const dataItems = country.map(this.mydataChild)
    
        return ( 
            <div>
                <select>
                    {dataItems}
                </select>
            </div>
         );
    }
}
 
export default List;