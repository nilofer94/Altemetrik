import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CarModelProvider from './Context/CarContext'

function App() {
  

  return (
    <CarModelProvider>
 <div>
  <Header/>
 </div>
 </CarModelProvider>
  )
}

export default App
