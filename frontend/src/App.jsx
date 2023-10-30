import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import MainComponent from './components/MainComponent'

function App() {

  return (
    <div className='h-screen bg-white dark:bg-[#111828]'>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  )
}

export default App
