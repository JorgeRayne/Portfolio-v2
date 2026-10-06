import { useEffect, useRef, useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import About from './Components/About'
import Expreince from './Components/Expreince'
function App() {

  const container = useRef(null);


  // const getVisibleSection = (entries) => {
  //   const visible = entries.find(
  //     (entry) => entry.isIntersecting
  //   );

  //   return visible?.target.id;
  // };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const visible = entry.isIntersecting;
        if(visible){
          console.log(entry)
          console.log(entry.target.id)
        }
      });
    });

    const sections = container.current.children;

    Array.from(sections).forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='w-full h-screen relative bg-background scroll-smooth'>
      <div className='fixed top-4 w-full z-50 px-4'>
        <div className='w-full h-full flex justify-between items-center py-4 px-6
        '>
          <div className='w-full flex justify-start items-center'>
            <div className='text-4xl font-semibold font-mono text-text'>
              JORGE<span className='text-primary'>/</span>
            </div>
          </div>
          <Header/>
          <div className='w-full flex justify-end items-center'>
            <div className='text-4xl font-semibold font-mono text-text'>
              JORGE<span className='text-primary'>/</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center flex-col gap-4' ref={container}>
        <section id='home' className='w-full'>
          <Main/>
        </section>
        <section id='about' className='w-full'>
          <About/>
        </section>
        <section id='experience' className='w-full'>
          <Expreince/>
        </section>
      </div>
    </div>
  )
}

export default App;
