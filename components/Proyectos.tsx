import { PROYECTOS } from '@/lib/const'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import ProjectCard from './ProjectCard'

const Proyectos = () => {
  return (
    <motion.div
      id='proyectos'
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-200px' }}
      transition={{ duration: 0.5 }}
      className='w-full flex flex-col space-y-4'
    >
      <section className='w-full flex items-center justify-between '>
        <h1 className='uppercase text-primary text-lg'>Proyectos destacados</h1>
        <Link
          href={'/proyectos'}
          className='flex flex-col md:flex-row items-center md:gap-4 w-fit text-primary text-nowrap'
        >
          Ver todos los Proyectos <FaArrowRightLong />
        </Link>
      </section>
      <section className='w-full grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {PROYECTOS.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className='h-full'
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </section>
    </motion.div>
  )
}

export default Proyectos
