import { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
function App() {

  return (
    <div className='w-full h-screen relative bg-background'>
      <div className='fixed top-4 left-4 right-4'>
        <div className='bg-red-500 flex justify-between items-center py-4 px-1 bg-transparent bg-opacity-40'>
          <div className='w-full flex justify-start pl-24'>
            <h1>
              {'Jorge/'}
            </h1>
          </div>
          <Header/>
      </div>
      </div>
      <div className='flex items-center justify-center flex-col'>
        <section id='home' className='w-full'>
          <Main></Main>
        </section>
        <section id='about' className='w-full'>
          <Main></Main>
        </section>
      </div>
    </div>
  )
}

export default App;
