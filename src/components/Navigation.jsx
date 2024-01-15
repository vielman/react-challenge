import { Link } from "react-router-dom"
export function Navigation() {
    return ( 
        <div className="flex justify-between py-3">
            <button >
                <Link to="/user-create">User Register</Link>
            </button>
            
        </div>
    )
}
