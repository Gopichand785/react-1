import React, { Component } from 'react'

export class CompB extends Component {
    
  render() {
    return (
     <div>
      <pre>{JSON.stringify(this.props)}</pre><hr/>
        <h3>Employee name:{this.props.ename}</h3>
        <h3>Employee salary:{this.props.esal}</h3>

      </div>
    )
  }
}

export default CompB