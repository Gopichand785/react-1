import React, { Component } from 'react';

 class Registration extends Component {
    constructor(props){
            super(props)
            this.state={
                name:"",
                password:"",
                email:""
                
            }
          }
    formhanlder=(event)=>{
        this.setState({ [event.target.name]:event.target.value})
    }
    submithandler=(event)=>{
      console.log(this.event)
       event.preventDefault()
      }
    
    render(){
    return (
      <>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submithandler}>
            <label>name:</label>
            <input type="text" onChange={this.formhanlder} name='name' /><br></br><br></br>
            <label>email:&nbsp;&nbsp;</label>
            <input type="email" onChange={this.formhanlder} name='email' /><br></br><br></br>
            <label>passwo:</label>
            <input type="password" onChange={this.formhanlder} name='password' /><br></br><br></br>
           <input type="submit" value="registration"  />
        </form>
      </>
    )
  }
}
export default Registration