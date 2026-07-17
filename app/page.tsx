import Navbar from '@/components/Navbar'
import Inicio from '@/components/Inicio'
import Footer from '@/components/Footer'
import SobreMi from '@/components/SobreMi'

export default function Home() {
  return (
    <div className='max-w-screen min-h-screen flex flex-col items-center justify-between'>
      <Navbar />
      <main className='max-w-screen w-[90%] md:w-[85%] xl:w-[70%] overflow-visible flex flex-col items-center mt-20 space-y-20'>
        <Inicio />
        <SobreMi />
        <div
          id='experiencia'
          className='min-h-screen'
        >
          experiencia
        </div>

        <div
          id='habilidades'
          className='min-h-screen'
        >
          habilidades
        </div>
        <div
          id='proyectos'
          className='min-h-screen'
        >
          proyectos
        </div>
        <div
          id='contacto'
          className='min-h-screen'
        >
          constacto
        </div>
      </main>
      <Footer />
    </div>
  )
}
