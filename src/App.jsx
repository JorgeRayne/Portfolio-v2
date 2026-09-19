import { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import About from './Components/About'
import Expreince from './Components/Expreince'
function App() {

  return (
    <div className='w-full h-screen relative bg-background scroll-smooth'>
      <div className='fixed top-4 left-4 right-4 z-50'>
        <div className='bg-red-500 flex justify-between items-center py-4 px-1 bg-transparent bg-opacity-40'>
          <div className='w-full flex justify-start items-center pl-24'>
            <h1 className='text-6xl font-bold font-heading text-text'>
              Jorge <span className='text-primary'>/</span>
            </h1>
          </div>
          <Header/>
      </div>
      </div>
      <div className='flex items-center justify-center flex-col'>
        <section id='home' className='w-full bg-red-400'>
          <Main></Main>
        </section>
        <section id='about' className='w-full'>
          <About/>
        </section>
        <section id='project' className='w-full'>
          <Expreince/>
        </section>
        <section id='exprience' className='w-full'>
          <Main></Main>
        </section>
      </div>
    </div>
  )
}

export default App;
