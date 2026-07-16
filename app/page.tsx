import Navbar from '@/components/Navbar'
import SobreMi from '@/components/SobreMi'

export default function Home() {
  return (
    <div className='max-w-screen'>
      <Navbar />
      <main className='max-w-screen min-h-screen overflow-hidden flex flex-col items-center mt-20 space-y-20'>
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
    </div>
  )
}
