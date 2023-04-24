
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Faq from './pages/FAQ/Faq'
import Blog from './pages/Blog/Blog'


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sobre' element={<Sobre/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/blog' element={<Blog/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
