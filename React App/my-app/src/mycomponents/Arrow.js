import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

// function Arrow(){
//     return(
//         <button className="btn btn-danger m-5">my Button</button>
//     );
// }


const AlertMe=(a)=>{
    alert(a);
}

const Arrow=()=>{
    return(
        <button onClick={AlertMe.bind(this, "Button Clicked")} className="btn btn-danger m-5">Arrow Function Button</button>
    );
}

export default Arrow;