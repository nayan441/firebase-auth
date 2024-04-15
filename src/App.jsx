import './App.css'
import Home from './Components/Home';
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import AuthUserContext from './context/AuthUserContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {

  return (
    <>
      <AuthUserContext>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<ProtectedRoute ><Home/></ProtectedRoute>} />

        </Routes>
      </Router>
      </AuthUserContext>
    </>
  )
}

export default App
