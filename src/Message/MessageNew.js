import React, { Component } from 'react'

export class MessageA extends Component {
    state={
      msg:  "hi gopichand"
    }
    gmhandler=()=>{
         this.setState({
          msg:  "hello Gm,"
         })
    }
    gnhandler=()=>{
        this.setState({msg:"hello gopichand iwant meet her today,"})
    }
  render() {
    console.log("test case 123-rnder")
    return (
      <div>
        <h1>Message:{this.state.msg}</h1>
        <button onClick={this.gmhandler}>Gm</button>
        <button onClick={this.gnhandler}>Gn</button>
      </div>
    )
  }
}

export default MessageA