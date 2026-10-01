import { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import About from './Components/About'
import Expreince from './Components/Expreince'
function App() {

  return (
    <div className='w-full h-screen relative bg-background scroll-smooth'>
      <div className='fixed top-4 w-full z-50 px-4'>
        <div className='w-full h-full flex justify-between items-center py-4 px-6
          bg-background/20
            backdrop-blur-[8px]
            border border-white/10
            rounded-2xl
            shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        '>
          <div className='w-full flex justify-start items-center pl-20'>
            <div className='text-4xl font-semibold font-mono text-text'>
              JORGE<span className='text-primary'>/</span>
            </div>
          </div>
          <Header/>
        </div>
      </div>
      <div className='flex items-center justify-center flex-col'>
        <section id='home' className='w-full'>
          <Main></Main>
        </section>
        <section id='about' className='w-full'>
          <About/>
        </section>
        <section id='project' className='w-full'>
          <Expreince/>
        </section>
      </div>
    </div>
  )
}

export default App;
