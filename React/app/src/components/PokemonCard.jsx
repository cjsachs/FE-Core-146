import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon: {image, id, name} }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {id} - {name}
          </Card.Title>
          <Link to={`/searchPokemon/${id}`}>
            <Button variant="primary">Get Details</Button>
          </Link>
        </Card.Body>
      </Card>
      
    </div>
  );
};
export default PokemonCard;
