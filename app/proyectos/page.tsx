import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PROYECTOS } from '@/lib/const'
import ProjectCard from '@/components/ProjectCard'

const Projects = () => {
  return (
    <div className='max-w-screen min-h-screen overflow-hidden flex flex-col items-center justify-between'>
      <Navbar />
      <main className='w-full max-w-[90%] md:max-w-[85%] xl:max-w-[70%] overflow-visible flex flex-col items-start my-30 space-y-8'>
        <h1 className='text-xl text-primary text-nowrap'>Todos mis Proyectos Personales</h1>
        <section className='w-full  grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {PROYECTOS.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Projects
