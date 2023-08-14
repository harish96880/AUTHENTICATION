import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<RegistrationPage />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/home" element = {<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App