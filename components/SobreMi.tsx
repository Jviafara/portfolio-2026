import Image from 'next/image'
import Link from 'next/link'
import { FaGraduationCap } from 'react-icons/fa6'
import { FiDownload } from 'react-icons/fi'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { SiGooglemaps } from 'react-icons/si'

const SobreMi = () => {
  return (
    <div
      id='sobre-mi'
      className='w-full flex flex-col md:flex-row gap-8 justify-between border-b-2 pb-8 border-muted/10'
    >
      <section className='w-full md:w-1/2  flex flex-col space-y-3'>
        <h4 className='text-primary-hover text-lg font-heading'>Sobre Mi</h4>
        <h1 className='text-primary-foreground font-bold text-4xl text-nowrap'>Un poco sobre mí</h1>
        <p className='text-muted'>
          Ingeniero electrónico y desarrollador Full Stack con experiencia en aplicaciones web modernas, especializado
          en FrontEnd usando lenguajes como typescript y javascript. Desarrollando bajo el stack MERN, y Next JS y con
          experiencia trabajando con el framework Angular JS. Enfocado en interfaces responsivas y centradas en la
          experiencia de usuario.
        </p>
        <p className='text-muted flex gap-2'>
          <span className='text-primary-foreground flex items-center gap-2'>
            <SiGooglemaps size={24} /> Ubicación:
          </span>
          Valledupar, Colombia
        </p>
        <p className='text-muted flex gap-2'>
          <span className='text-primary-foreground flex items-center gap-2'>
            <IoMailUnreadOutline size={24} /> Email:
          </span>
          jealvito@gmail.com
        </p>
        <p className='text-muted flex gap-2'>
          <span className='text-primary-foreground flex items-center gap-2'>
            <FaGraduationCap size={24} /> Edución:
          </span>
          Ingeniería Electrónica
        </p>
        <div className='w-fit text-primary-foreground'>
          <Link
            href='/Jesús_Viafara_CV_ES.pdf'
            download={true}
            className='border border-primary px-4 lg:px-8 py-4 rounded-xl gap-2 flex justify-between items-center cursor-pointer text-primary-hover'
          >
            Descargar CV <FiDownload />
          </Link>
        </div>
      </section>
      <section className='w-full grow flex items-center justify-center'>
        <div className='relative w-125 h-125 md:w-full md:h-full'>
          <Image
            src={'/set-up.jpg'}
            alt='Set-Up'
            fill
            className='rounded-4xl object-cover object-center'
          />
        </div>
      </section>
    </div>
  )
}

export default SobreMi
