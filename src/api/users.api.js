import axios from "axios"

export const usersApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/users/'
})

export const getAllUsers = () => usersApi.get('list/')

export const createUser = (user) => usersApi.post('create/', user)

export const login = (user) => usersApi.post('login/', user)

export const logout = (token) => usersApi.get('logout/', { 
    headers: { 
        'Authorization': `Token ${token}`
    }}
   
)