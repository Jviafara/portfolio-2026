import Link from 'next/link'
import { FaArrowRightLong, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { IoMailUnreadOutline } from 'react-icons/io5'

const Introduction = () => {
  return (
    <section className='w-full lg:w-1/2 flex flex-col space-y-12'>
      <div className='space-y-2'>
        <p className='text-primary-hover text-lg font-heading'>Hola! Soy</p>
        <h1 className='text-5xl font-bold text-foreground'>Jesús Viafara</h1>
        <h2 className='w-fit text-4xl font-semibold bg-linear-to-r from-accent to-primary bg-clip-text text-transparent font-heading'>
          Desarrollador de Software
        </h2>
        <p className='text-muted'>
          Ingeniero electrónico y desarrollador Full Stack con experiencia en aplicaciones web modernas, especializado
          en FrontEnd usando lenguajes como typescript y javascript. Desarrollando bajo el stack MERN, y Next JS y con
          experiencia trabajando con el framework Angular JS. Enfocado en interfaces responsivas y centradas en la
          experiencia de usuario.
        </p>
      </div>
      <div className='flex flex-col space-y-4 w-full xs:w-1/2 sm:space-y-0 sm:space-x-4 sm:flex-row'>
        <button className='bg-primary rounded-xl group hover:bg-primary-hover cursor-pointer'>
          <a
            href='#proyectos'
            className='flex justify-between items-center space-x-2 w-full h-full py-4 px-6 text-nowrap '
          >
            <p>Ver mis Proyectos</p>
            <FaArrowRightLong
              size={24}
              className='group-hover:rotate-90 transition-all duration-500 ease-out'
            />
          </a>
        </button>
        <button className='bg-transparent border border-primary rounded-xl group hover:bg-primary-hover cursor-pointer'>
          <a
            href='#contacto'
            className='flex items-center justify-between space-x-2 w-full h-full py-4 px-6 '
          >
            <p>Contactarme</p>
            <IoMailUnreadOutline size={24} />
          </a>
        </button>
      </div>
      <div className='flex justify-center md:justify-start space-x-8'>
        <Link
          href={'https://github.com/Jviafara'}
          target='_blank'
        >
          <FaGithub
            size={28}
            className='text-muted'
          />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/jesusviafara/'}
          target='_blank'
        >
          <FaLinkedin
            size={28}
            className='text-muted'
          />
        </Link>
      </div>
    </section>
  )
}

export default Introduction
