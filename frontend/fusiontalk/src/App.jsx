import './App.css'
import { Routes,Route,Navigate, BrowserRouter } from 'react-router-dom';
import Login from './components/Login'
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Register from './components/Register';


function Logout(){
  localStorage.clear()
  return <Navigate t0="/login"/>
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register/>
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
