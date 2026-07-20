import Navbar from '@/components/Navbar'
import Inicio from '@/components/Inicio'
import Footer from '@/components/Footer'
import SobreMi from '@/components/SobreMi'
import Habilidades from '@/components/Habilidades'
import Experiencia from '@/components/Experiencia'
import Proyectos from '@/components/Proyectos'
import Contacto from '@/components/Contacto'

export default function Home() {
  return (
    <div className='max-w-screen min-h-screen overflow-hidden flex flex-col items-center justify-between'>
      <Navbar />
      <main className='w-full max-w-[90%] md:max-w-[85%] xl:max-w-[70%] overflow-visible flex flex-col items-center mt-40 mb-20 space-y-30'>
        <Inicio />
        <SobreMi />
        <Habilidades />
        <Experiencia />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
