'use client'

import { navbarMenu } from '@/lib/navbar-menu'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'

const Navbar = () => {
  const pathname = usePathname() // Gets "/path"
  const [hash, setHash] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [pathname])

  const handleClick = (link: string) => {
    const element = document.getElementById(link)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='w-full sticky z-50 bg-background/70 top-0 left-0 flex items-center justify-between space-x-4 border-b-2 border-muted/10  py-3 px-16 '>
      <section className='flex justify-center items-center '>
        <Image
          src='/logo.png'
          alt='Logo'
          width={50}
          height={50}
        />
        <h1 className='font-bold text-lg uppercase text-shadow-(--text-shadow-glow) '>Jesús Viafara</h1>
      </section>
      <section className='flex justify-center items-center space-x-4'>
        <ul className='flex justify-center items-center space-x-6'>
          {navbarMenu.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={`${hash === item.href || (hash === '' && item.href === '#inicio') ? 'text-primary border-b-2 pb-2 border-primary' : ''} hover:text-primary`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex justify-center items-center ml-4 overflow-visible'>
          <Link
            href='/Jesús_Viafara_CV_ES.pdf'
            download={true}
            className='btn-outline-primary flex justify-center items-center gap-2 space-x-2 hover:hero-glow cursor-pointer'
          >
            Descargar CV <FiDownload />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Navbar
