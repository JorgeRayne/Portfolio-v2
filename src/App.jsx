import { useEffect, useRef, useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import About from './Components/About'
import Expreince from './Components/Expreince'
function App() {

  const container = useRef(null);
  const staggerButton = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const [visibleSections, setVisibleSections] = useState(new Set());


  console.log(staggerButton.current?.children[0])
  useEffect(() => {
    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(
            entry.target.id,
            entry.intersectionRatio
          );

          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const next = new Set(prev);
              next.add(entry.target.id);
              return next;
            });
          }
        });
        const mostVisible = [...ratios.entries()]
          .filter(([_, ratio]) => ratio > 0)
          .sort((a, b) => b[1] - a[1])[0];

        if (mostVisible) {
          setActiveSection(mostVisible[0]);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const sections = Array.from(
      container.current.querySelectorAll("section")
    );

    sections.forEach((section) => {
      ratios.set(section.id, 0);
      observer.observe(section);
    });

    return () => observer.disconnect();
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
          <Header activeSection={activeSection}/>
          <div className='w-full flex justify-end items-center'>
            <div className='text-4xl font-semibold font-mono text-text'>
              JORGE<span className='text-primary'>/</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center flex-col gap-4' ref={container}>
        <section id='home' className={`w-full grid place-items-center content-center transition-all duration-1000 ${visibleSections.has("home")
          ? "opacity-100 blur-0 translate-x-0"
          : "opacity-0 blur-[5px] -translate-x-[90%]"}`}>
          <Main staggerButton={staggerButton}/>
        </section>
        <section id='about' className={`w-full grid place-items-center content-center transition-all duration-1000 ${visibleSections.has("about")
          ? "opacity-100 blur-0 translate-x-0"
          : "opacity-0 blur-[5px] -translate-x-[90%]"}`}>
          <About/>
        </section>
        <section id='experience' className={`w-full grid place-items-center content-center transition-all duration-1000 ${visibleSections.has("experience")
          ? "opacity-100 blur-0 translate-x-0"
          : "opacity-0 blur-[5px] -translate-x-[90%]"}`} >
          <Expreince/>
        </section>
        <section id='project' className={`w-full grid place-items-center content-center transition-all duration-1000 ${visibleSections.has("project")
          ? "opacity-100 blur-0 translate-x-0"
          : "opacity-0 blur-[5px] -translate-x-[90%]"}`}>
          <Main/>
        </section>
      </div>
    </div>
  )
}

export default App;
