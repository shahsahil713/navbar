import React,{useState,useContext} from 'react'
import { UserContext } from './UserContext'

function AddUser() {

    const [data, setData] = useState({
        id:"",
        name:"",
        email:"",
        
    })
    const {users,setUsers} = useContext(UserContext)
    

    const handleInputchange = (e) => {
        setData({...data,[e.target.name] : e.target.value})
    }

    const createUser = (e) => {
        e.preventDefault();
       
         setUsers([...users,{
            id:data.id,
            name:data.name,
            email:data.email
        }])
        data.id = "";
        data.name = "";
        data.email = "";
        
    }
    
    return (
        <div class='w-1/6 mx-auto py-4'>
            <h1 className='text-2xl py-2'>Add User</h1>
            <form className='flex flex-col'>
                <input name="id" type="text" value={data.id} onChange={handleInputchange} className='border border-gray-600 my-2 p-1' placeholder="ID" required/>
                <input name="name" type="text" value={data.name} onChange={handleInputchange} className='border border-gray-600 my-2 p-1' placeholder="Name" required/>
                <input name="email" type="email" value={data.email} onChange={handleInputchange} className='border border-gray-600 my-2 p-1' placeholder="Email" required/>
                <button type='submit' onClick={createUser} className="bg-gray-700 text-white py-1">Submit</button>
            </form>
        </div>
    )
}

export default AddUser
