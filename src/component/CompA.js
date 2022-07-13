import React, { Component } from 'react';
import CompB from './CompB';
export class CompA extends Component {
    name = "Rahul"
    salary = 45000 
  render() {
    return (
      <div>
        <h1>ramachandra</h1>
        <h1>narasimha</h1>
        <h1>vijay</h1>
        <h1>santhosh</h1>
        <CompB ename={this.name} esal={this.salary}/>
      </div>
    )
  }
}

export default CompA