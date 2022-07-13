import React, { Component } from 'react'

 class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email:" ",
            password:" "
        }
    }
    emailHandler=(event)=>{
        console.log(event.target.value)
        console.log(event)
        this.setState({
            email:event.target.value
        })
    }
    passwordHandler=(event)=>{
        console.log(event.target.value)
        console.log(event.target)
        this.setState({
            password:event.target.value
        })
    }
  render() {
    return (
      <>
    <pre>{JSON.stringify(this.state)}</pre>
    <br/>
    <form>
        <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text" onChange={this.emailHandler} /><br/><br/>
        <label>password:</label>
        <input type="text" onChange={this.passwordHandler} /><br/><br/>
        <input type="submit" value="login..." />
    </form>
      </>
    )
  }
}

export default Login