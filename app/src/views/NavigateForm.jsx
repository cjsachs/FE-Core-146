import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const NavigateForm = () => {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/searchPokemon')
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
    </Form>
  )
}

export default NavigateForm