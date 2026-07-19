import Image from 'next/image'
import Tag from './Tag'
import { FaArrowRightLong, FaGithub } from 'react-icons/fa6'
import Link from 'next/link'

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
        <div className='relative w-full h-48 mb-4'>
          <Image
            src={project.image}
            alt='image'
            fill
            className='object-cover object-center rounded-xl'
          />
        </div>
        <section className='flex flex-1 flex-col space-y-2'>
          <h1 className='font-bold'>{project.name}</h1>
          <p className='text-sm text-muted'>{project.description}</p>
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
          className='text-primary w-fit flex items-center gap-2'
        >
          Ver proyecto <FaArrowRightLong />
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
