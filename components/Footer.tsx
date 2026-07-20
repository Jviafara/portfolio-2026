'use client'

import { NAVBARMENU } from '@/lib/const'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaGithub, FaLinkedin, FaRegCopyright } from 'react-icons/fa6'

const Footer = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (link: string) => {
    if (pathname === '/proyectos') router.push(`/#${link}`)
    const element = document.getElementById(link)
    if (element) {
      const yOffset = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({
        top: yOffset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className='w-full max-w-[100vw] border-t-2 border-muted/10 relative bottom-0 left-0 flex flex-col space-y-12 items-center justify-between pt-8 px-5 md:px-16 '>
      <div className='w-full flex flex-col md:flex-row space-y-8 md:space-y-0 items-center md:items-start justify-between'>
        <section className='flex flex-col grow items-center justify-center md:items-baseline space-y-2'>
          <div className='flex space-x-2 items-center font-bold'>
            <Image
              src={'/logo.png'}
              alt='logo'
              width={30}
              height={30}
            />
            <h1>Jesús Viafara</h1>
          </div>
          <p className='text-muted'>
            Codigo que genera <span>Impacto</span> 🚀.
          </p>
        </section>
        <section className='flex flex-col grow items-center md:items-start space-y-4'>
          <h1 className='font-bold'>NAVEGACION</h1>
          <ul className='flex flex-col justify-center items-center md:items-baseline space-y-2'>
            {NAVBARMENU.map(item => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className='text-muted hover:text-primary hover:cursor-pointer text-nowrap '
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section className='flex flex-col grow items-center justify-center md:items-baseline space-y-4'>
          <h1 className='font-bold uppercase'>Socials</h1>
          <ul className='flex flex-col space-y-2'>
            <li>
              <Link
                href={'https://github.com/Jviafara'}
                target='_blank'
                className='flex space-x-2 items-center text-muted'
              >
                <FaGithub
                  size={28}
                  className='text-muted'
                />
                <p>GitHub</p>
              </Link>
            </li>
            <li>
              <Link
                href={'https://github.com/Jviafara'}
                target='_blank'
                className='flex space-x-2 items-center text-muted'
              >
                <FaLinkedin
                  size={28}
                  className='text-muted'
                />
                <p>LinkedIn</p>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className='flex text-muted items-center space-x-1 text-sm'>
        <FaRegCopyright />
        <p>2026 Jesús Viafara. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
