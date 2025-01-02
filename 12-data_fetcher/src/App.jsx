
import './App.css'
import DataFetcher from './components/datafetcher'
import UserCards from './components/userCards'
import UserList from './components/userList'
import UserTable from './components/userTable'

function App() {


  return (
    <div>
      <h1>Users Information</h1>
      <DataFetcher>
        {({ users,totalUsers }) => (
          <div>
            <h2>Total Users: {totalUsers}</h2>
            <h2>User Table</h2>
            <UserTable users={users} />
            <h2>User Cards</h2>
            <UserCards users={users} />
            <h2>User List</h2>
            <UserList users={users} />

          </div>
        )}
      </DataFetcher>
    </div>
  )
}

export default App
