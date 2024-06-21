import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState({
    name: '',
    type: '',
    image: '',
    height: null,
    weight: null,
    abilities: [],
  });
  const { id } = useParams();

  useEffect(() => {
    fetchPokemonData()
  }, [])

  const fetchPokemonData = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const data = await response.json();
    setPokemon({
        name: data.name,
        type: data.types[0].type.name,
        image: data.sprites.front_default,
        height: data.height,
        weight: data.weight,
        abilities: [data.abilities[0].ability.name, data.abilities[1].ability.name]
    })
  };


  return (
    <div>
      <h1>Current ID: {id}</h1>
      {pokemon && (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pokemon.image} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
            <ul>
                <li>Type: {pokemon.type}</li>
                <li>Height: {pokemon.height}</li>
                <li>Weight: {pokemon.weight}</li>
                {pokemon.abilities.map((ability, idx) => (
                    <li key={idx}>{ability}</li>
                ))}
            </ul>
          <Link to={'/searchPokemon'}>
            <Button variant="primary">Search More Pokemon</Button>
          </Link>
        </Card.Body>
      </Card>
      )}
    </div>
  );
};
export default PokemonDetails;
