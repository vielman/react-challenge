import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { UserPage } from './pages/UserPage'
import { RegisterPage } from './pages/RegisterPage'
import { Toaster } from 'react-hot-toast'


function App() {

  return (
      <BrowserRouter>
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/user-create" element={<RegisterPage />} />
          </Routes>
          <Toaster/>
        </div>
      </BrowserRouter>
  )
}

export default App
