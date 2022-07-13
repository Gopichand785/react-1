import React, { Component } from 'react'

export class Redmi extends Component {
    state={
        product_name:"xalomi 5g",
        price:25000,
        qty:1,
        Image:"https://rukminim1.flixcart.com/image/312/312/l0igvww0/mobile/6/8/o/-original-imagcafj5zcxz9wg.jpeg?q=70"
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <table className='table table-hover'>
                    <thead>
                        <th>product_name</th>
                        <span>&nbsp;</span>
                        <th>price</th>
                        <span> &nbsp;</span>
                        <th>quality</th>
                        <span>&nbsp;</span>
                        <th>image</th>
                        <span>&nbsp;</span>
                        <th>total</th>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.product_name}</td>
                            <span>&nbsp;</span>
                            <td>{this.state.price}</td>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <td><i className='fa fa-minus-circle' onClick={this.decrHandler}></i>{this.state.qty}<i className='fa fa-plus-circle' onClick={this.incrHandler}></i></td>
                            <span>&nbsp;&nbsp;</span>
                            <td>{this.state.Image}</td>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <td>{this.state.price*this.state.qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}

export default Redmi