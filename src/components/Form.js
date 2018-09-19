import React, { Component } from 'react'
import ProteinForm from './ProteinForm'
import FillingForm from './FillingForm'
import ToppingForm from './ToppingForm'
import SideForm from './SideForm'

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: []
}

class Form extends Component {
  state = {
    ...DEFAULT_STATE
  }

  handleSubmit =(event)=> {
    event.preventDefault()
    document.getElementById("order-form").reset()
    console.log(this.state)
    this.props.addOrder(this.state)
    this.setState({
      ...DEFAULT_STATE
    })
  }

  handleChange = (event)=>{
    const itemType = event.target.name
    const item = event.target.value
console.log(itemType, item)
    !this.state[`${itemType}`].includes(item) ?
      this.setState(prevState=>{
        return {
          [itemType]: prevState[`${itemType}`].concat(item)
        }
      })
    :
      this.setState(prevState=>{

        return {[itemType]: prevState[`${itemType}`].filter(
          ingr => ingr !== item
        )
        }
      })

  }

  render() {
    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Order Form</h1>
        <form className="ui form" id="order-form" onSubmit={this.handleSubmit}>
          <ProteinForm handleChange={this.handleChange} />

          <FillingForm handleChange={this.handleChange} />

          <ToppingForm handleChange={this.handleChange} />

          <SideForm handleChange={this.handleChange} />

          <br />

          <button className="ui blue big button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
