import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Gift from './pages/Gift'
import Order from './pages/Order'
import Store from './pages/Store'
import Empty from './components/Empty'
function App() {

  return (
    <>
      <Header/>
      <Empty/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gift' element={<Gift/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
