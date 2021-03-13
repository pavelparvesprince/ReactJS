import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Form5 extends Component {
    constructor() {
        super();
        this.state = { 
            fName : "",
            mName : "",
            lName : "",
            email : "",
            mobile : "",
            divstatusClass : "text-danger mt-2 d-none"        
         }
    }

    onChangeHandler=(e)=>{
        var names = e.target.name;
        var values = e.target.value;
        this.setState({[names]:[values]});
        if(names==="fName"){
            var namePattern =/^([a-zA-Z ]){1,30}$/;
            if(names !== "" && !namePattern.test(values)){
                this.setState({divstatusClass:"text-danger mt-2 d-block"});
                console.log(values);
            } 
            else{
                this.setState({divstatusClass:"text-danger mt-2 d-none"});
            }      
        }
        if(names==="mName"){
            var namePattern =/^([a-z A-Z ]){2,30}$/;
            if(!namePattern.test(values)){
                console.log();
            }
        }
    }

    onSubmitHandler=()=>{
        alert("First Name : " + this.state.fName + "\nMiddle Name : " + this.state.mName + "\nLast Name : " + this.state.lName + "\nEmail : " + this.state.email + "\nMobile Number : " + this.state.mobile);
    }

    render() { 
        return ( 
            <div className="container mt-3">
                <h1> My First Form </h1>
                <form>
                    <div className="mt-5 form-group row">
                        <label className="col-sm-2 col-form-label" >First Name </label>
                        <div className="col-sm-10">
                            <input onChange={this.onChangeHandler} name="fName" type="text" className="form-control" placeholder="First Name"></input> 
                            <div name="fnameErrorMessage" className={this.state.divstatusClass} role="alert">
                                First Name Not in Valid Format
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Middle Name</label>
                        <div className="col-sm-10">
                            <input onChange={this.onChangeHandler} name="mName" type="text" className="form-control" placeholder="Middle Name"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input onChange={this.onChangeHandler} name="lName" type="text" className="form-control" placeholder="Last Name"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onChange={this.onChangeHandler} name="email" type="email" className="form-control" placeholder="Email"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Mobile</label>
                        <div className="col-sm-10">
                            <input onChange={this.onChangeHandler} name="mobile" type="text" className="form-control" placeholder="Mobile Number"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input onClick={this.onSubmitHandler} className="btn btn-primary" type="submit" value="Submit Form"></input>
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Form5;