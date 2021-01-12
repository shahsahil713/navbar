import React,{useContext} from 'react'
import { UserContext } from './UserContext'
function Users() {
    const {users,setUsers} = useContext(UserContext);
   
    return (
        <div className=' w-3/5 mx-auto py-4'>
            <h1 className='text-2xl py-2'>All Users</h1>
            <div>
            <div className='bg-gray-200 border-2 border-gray-700'>
                <div className='flex justify-around font-bold'>
                    <p>ID</p>
                    <p className=''>Name</p>
                    <p>Email</p>
                </div>
            {
                users.map((user) => {
                  return ( 
                    <div key={user.email} className='flex justify-around border-2 border-gray-200'>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>    
                    </div> 
                   )
                })
            }
            </div>
            </div>
        </div>
    )
}

export default Users
