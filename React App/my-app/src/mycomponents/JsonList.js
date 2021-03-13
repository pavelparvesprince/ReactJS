import React, { Component } from 'react';

class JsonList extends Component {

    render() { 

        // first create a json data
        // json start with third bracket
        // inside second bracket each element is a json object
        const myJsonList =[
            {
                city:"Dhaka",
                zip:"1204"
            },
            {
                city:"Khulna",
                zip:"1205"
            },
            {
                city:"Rajshahi",
                zip:"1206"
            }
        ]


        // by using map method we will catch each object from json array
        // arrow function is used here
        // as it is a object so we have to call each object's property by using "."
        const dataCityItems = myJsonList.map((data)=>{
            return <option>{data.city}</option>
        });
        const dataZipItems = myJsonList.map((data)=>{
            return <option>{data.zip}</option>
        });

        return ( 
            <div>
                <select>
                    {dataCityItems}
                </select>
                <select>
                    {dataZipItems}
                </select>
            </div>
         );
    }
}
 
export default JsonList;