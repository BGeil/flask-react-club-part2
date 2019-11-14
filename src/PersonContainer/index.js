import React, { Component } from 'react';
import PersonList from '../PersonList'


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
	render(){
		return(
			<PersonList persons={this.state.persons} />
			)
	}
}
export default PersonContainer