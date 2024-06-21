import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PokemonCard from '../components/PokemonCard';

function PokemonForm() {
  const [pokemon, setPokemon] = useState({
    id: null,
    name: '',
    image: '',
    search: '',
  });

  useEffect(() => {
    // fetchPokemonData();
  }, [pokemon.search]);

  const fetchPokemonData = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.search}`
    );
    const data = await response.json();
    console.log(data);
    setPokemon({
      ...pokemon,
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
    });
  };

  // form submission helper function
  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchPokemonData();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search Pokemon:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pokemon"
            onChange={(event) =>
              setPokemon({ ...pokemon, search: event.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      {/* logical add operator for true conditonals only = && */}
      {/* ternary operator for if or else conditionals = ? : */}
      {pokemon.name && <PokemonCard pokemon={pokemon} />}
    </>
  );
}

export default PokemonForm;
