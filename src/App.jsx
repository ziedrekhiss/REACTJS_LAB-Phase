
import Login from './components/Login';
import Home from './components/Home';
import PatientList from './components/Patient/PatientList';
import Rdv from './components/Calendar/Rdv';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Home" element={<Home/>} />
          <Route path="/PatientList" element={<PatientList/>}/>
          <Route path="/RendezVous" element={<Rdv/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
