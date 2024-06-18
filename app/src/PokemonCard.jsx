import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const PokemonCard = ({ pokemon: {image, id, name} }) => {
    const [pokemonDetails, setPokemonDetails] = useState({
        abilities: [],
        type: []
    })

    const getDetails = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard')
        const data = await response.json()
        setPokemonDetails({
            abilites: data.abilites,
            type: data.types
        })
    }
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {id} - {name}
          </Card.Title>
          <Button variant="primary">Get Details</Button>
        </Card.Body>
      </Card>
      {pokemonDetails && (
        // show details here
      )}
    </div>
  );
};
export default PokemonCard;
