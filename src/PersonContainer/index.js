import React, { Component } from 'react';
import PersonList from '../PersonList'
import CreatePersonForm from '../CreatePersonForm'
import { Grid } from 'semantic-ui-react'


class PersonContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			persons: []
		}
	}
	componentDidMount(){
		this.getPersons();
	}
	getPersons = async () => {
		try {
			const persons = await fetch(process.env.REACT_APP_API_URL + '/api/v1/persons/');
			const parsedPersons = await persons.json();
			console.log(parsedPersons);
			this.setState({
				persons: parsedPersons.data
			})
		}
		catch(err) {
			console.log(err)
		}
	}
	addPerson = async (e, person) => {
		e.preventDefault();
		console.log(person);

		try {
				const createdPersonResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/persons/', {
					method: 'POST',
					body: JSON.stringify(person),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const parsedResponse = await createdPersonResponse.json();
				console.log(parsedResponse,'this is the response');
				this.setState({persons: [...this.state.persons, parsedResponse.data]})
		}
		catch(err) {
			console.log(err)
		}
	}
	deletePerson = async (id) => {
        console.log(id)
	    const deletePersonResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/persons/' + id, {
	    	method: 'DELETE'
	    });
	    const deletePersonParsed = await deletePersonResponse.json();
	    console.log(deletePersonParsed)
	    this.setState({persons: this.state.persons.filter((person) => person.id !== id )})
    }
	render(){
		return(
	       <Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
	        <Grid.Row>
	          <Grid.Column>
	            <PersonList persons={this.state.persons} deletePerson={this.deletePerson}/>
	          </Grid.Column>
	          <Grid.Column>
	           <CreatePersonForm addPerson={this.addPerson}/>
	          </Grid.Column>
	        </Grid.Row>
	      </Grid>
      )		
	}
}
export default PersonContainer