import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

class CreatePerson extends Component {
	constructor(){
		super();

		this.state = {
			name: '',
			age: '',
			favorite_food: ''
		}
	}
	handleChange = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}
	render(){
    return (
      <Segment>
        <h4>Add Person</h4>
        <Form onSubmit={(e) => this.props.addPerson(e, this.state)}>
          <Label>Name:</Label>
          <Form.Input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
          <Label>Age:</Label>
          <Form.Input type='text' name='age' value={this.state.age} onChange={this.handleChange}/>
          <Label>Favorite Food:</Label>
          <Form.Input type='text' name='favorite_food' value={this.state.favorite_food} onChange={this.handleChange}/>
          <Button type='Submit'>Add Person</Button>
        </Form>
      </Segment>
      )
  }
}
export default CreatePerson