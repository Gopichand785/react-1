import React, { Component } from 'react'

 class Registration23 extends Component {
    constructor(props){
            super(props)
            this.state={
                name:"",
                password:"",
                email:"",
                confom:""
            }
    }
    namehanlder=(event)=>{
        this.setState({ name:event.target.value})
    }
    passwordhanlder=(event)=>{
        this.setState({ password:event.target.value})
    }
    emailhanlder=(event)=>{
        this.setState({ email:event.target.value})
    }
    confomhanlder=(event)=>{
        this.setState({ confom:event.target.value})
    }
  render() {
    return (
      <>
        <pre>{JSON.stringify(this.state)}</pre>
        <form>
            <label>Name:</label>
            <input type="text" onChange={this.namehanlder}  /><br></br><br></br>
            <label>email:&nbsp;&nbsp;</label>
            <input type="email" onChange={this.emailhanlder}  /><br></br><br></br>
            <label>passwo:</label>
            <input type="password" onChange={this.passwordhanlder} /><br></br><br></br>
            <label>confom:</label>
            <input type="text" onChange={this.confomhanlder} />
        </form>
      </>
    )
  }
}

export default Registration23