import React, { Component } from 'react';
 class Salary extends Component {
    state={
        salary:52000
    }
    salaryHandler=(value)=>{
        console.log(value)
        this.setState({
            salary:this.state.salary+this.state.salary*value/100    
        })
    }
  render() {

    return (
      <div>
        <h1>your salary:{this.state.salary}</h1>
        <span>&nbsp;&nbsp;</span>
        <button onClick={this.salaryHandler.bind(this,0)}>Hike 0%</button>
        <span>&nbsp;&nbsp;</span>
        <button onClick={this.salaryHandler.bind(this,50)}>Hike 50%</button>
        <span>&nbsp;&nbsp;</span>
        <button onClick={this.salaryHandler.bind(this,100)}>Hike 100%</button>
        <span>&nbsp;&nbsp;</span>
        <button onClick={this.salaryHandler.bind(this,200)}>Hike 2005</button>
      </div>
    )
  }
}

export default Salary