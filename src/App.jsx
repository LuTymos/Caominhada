
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
