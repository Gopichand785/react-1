import React, { Component } from 'react'

export class Message extends Component {
    msg= "hello"
    gmhandler=()=>{
        this.msg= "hello rahulji"
        console.log(this.msg)
    }
  render() {
    return (
      <div>
        <h3>Message:{this.msg}</h3>
        <button onClick={this.gmhandler}>Gm</button>
        
      </div>
    )
  }
}

export default Message