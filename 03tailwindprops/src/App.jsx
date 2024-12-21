import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj={username:"mas",email:"mas@yahoo.com"}
  let newArr=[1,2,3,4]

  return (
      <>
      <h1 className="bg-green-400 text-black mb-4 p-4 rounded-xl">Tailwind Testing</h1>
      <Card username="mas@yahoo.com" btnText="Click me" />
      <Card username="afzal@yahoo.com"/>
      </>
  )
}

export default App
