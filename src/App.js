import './App.css';
import {useState} from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Home from './Home';
import Users from './Users';
import AddUser from './AddUser'
import {UserContext} from './UserContext'
function App() {
  const [users,setUsers] = useState([]);
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <div className='flex justify-between bg-gray-200 p-2 text-xl'>
      <ul className='flex'>
        <li><Link to="/">Home</Link></li>
      </ul>
      <ul className='flex'>
        <li><Link to="/users"><a className='mx-4 px-2 py-1 rounded bg-gray-700 text-white text-lg'>All Users</a></Link></li>
        <li><Link to="/adduser"><a className='mx-4 px-2 py-1 rounded bg-gray-700 text-white text-lg'>Add User</a></Link></li>
      </ul>
      </div>
      <Switch>
        <UserContext.Provider value={{users,setUsers}}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/adduser">
            <AddUser />
          </Route>
        </UserContext.Provider>
      </Switch>
        
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
