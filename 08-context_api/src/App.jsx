import Login from "./components/login"
import Profile from "./components/profile"
import UserContextProvider from "./context/userContextProvider"


function App() {
  

  return (
    <UserContextProvider>
    <h1>Effortless State Management with React Context</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App