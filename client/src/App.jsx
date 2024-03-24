import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./redux/store"
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className='max-w-screen-xl mx-auto px-2'>
        <Navbar />
        <main className='mt-8 min-h-screen'>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </Provider>

  )
}

export default App
