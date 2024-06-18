import { useEffect, useState } from "react"
import PokemonForm from "./PokemonForm"

const App = () => {
  // console.log('constructed')
  // count is variable, setCount is used to update "count"
  const [count, setCount] = useState(0)

  useEffect(() => {
    // console.log('mounted')
  }, [])

  // helper function
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      {/* {console.log('render')} */}
      App
      <button onClick={increment}>Increment</button>
      <PokemonForm />
    </div>
  )
}
export default App
