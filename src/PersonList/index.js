import React from 'react';
import { Card, Button} from 'semantic-ui-react';

function PersonList(props){

  const persons = props.persons.map((person) => {
    return (
        <Card key={person.id}>
          <Card.Content>
            <Card.Header>{person.name}</Card.Header>
            <Card.Description>{person.age}</Card.Description>
            <Card.Description>{person.favorite_food}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button>Delete Person</Button>
            <Button>Edit Person</Button>
          </Card.Content>
        </Card>
        )
  })

  return (
      <Card.Group>
        { persons }
      </Card.Group>
    )
}

export default PersonList