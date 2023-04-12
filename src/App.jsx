
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
