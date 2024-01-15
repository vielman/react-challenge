import { useEffect, useState } from "react";
import { getAllUsers } from "../api/users.api";
import { useNavigate } from 'react-router-dom'
import { Logout } from '../components/Logout';
export function UserList() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
    const token = sessionStorage.getItem('var-token')
    
    useEffect(() => {
        if (!token) navigate('/login')
        async function loadUsers() {
            const res = await getAllUsers()
            console.log(res)
            setUsers(res.data)
        }
        loadUsers()
        
    }, []);
    return ( <div>
        <Logout token={token}/>
        <h1 className="font-bold uppercase">Users List</h1>
        {users.map(user =>(
            <ul key={user.emial} className="bg-zinc-800 p-3 hover:bg-zinc-700">
                <li>{user.name} - {user.email}</li>
            </ul>
        ))}
       </div> 
    )
}