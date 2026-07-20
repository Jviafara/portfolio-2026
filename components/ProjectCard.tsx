import Image from 'next/image'
import Tag from './Tag'
import { FaGithub } from 'react-icons/fa6'
import Link from 'next/link'
import * as motion from 'motion/react-client'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface ProyectCardProps {
  name: string
  description: string
  image: string
  tecnologias: string[]
  url: string
  gitLink: string
}

const ProjectCard = ({ project }: { project: ProyectCardProps }) => {
  return (
    <div className='flex h-full w-full flex-col'>
      <div className='border border-border bg-card px-3 py-2 w-full h-full rounded-t-xl flex flex-1 flex-col space-y-2'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 1 }}
          className='relative w-full h-48 mb-4'
        >
          <Image
            src={project.image}
            alt='image'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vwc'
            loading='eager'
            className='object-cover object-center rounded-xl'
          />
        </motion.div>
        <section className='flex flex-1 flex-col justify-between space-y-4'>
          <div>
            <h1 className='font-bold'>{project.name}</h1>
            <p className='text-sm text-muted mt-2'>{project.description}</p>
          </div>
          <div className='flex flex-wrap w-full mt-2 gap-2'>
            {project.tecnologias.map((tech, index) => (
              <Tag
                key={index}
                label={tech}
              />
            ))}
          </div>
        </section>
      </div>
      <div className='border border-border bg-card px-6 py-3 w-full rounded-b-xl flex justify-between items-center'>
        <Link
          href={project.url}
          target='_blank'
          className='w-fit flex items-center gap-2 border border-primary px-2 py-1 rounded-xl hover:bg-primary-hover hover:text-primary-foreground'
        >
          Visitar sitio <FaExternalLinkAlt />
        </Link>
        <Link
          href={project.gitLink}
          target='_blank'
          className='hover:text-primary-hover'
        >
          <FaGithub size={32} />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
