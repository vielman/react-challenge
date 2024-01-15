import { logout } from "../api/users.api";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'


export function Logout(props) {
    const navigate = useNavigate()
    
    return ( 
        <div className="flex justify-end py-3">
            <button 
            onClick={async () => {
                const accepted = window.confirm('The session is going to be closed')
                if (accepted){
                    await logout(props.token)
                    sessionStorage.clear();
                    toast.success('logged out', {
                        position: "bottom-right",
                        style: {
                            background: "#101010",
                            color: "#fff"
                        }
                      })
                    navigate('/login')
                }

            }}
            className="bg-indigo-500 px-3 py-2 rounded-lg">Logout</button>
       </div> 
    )
}