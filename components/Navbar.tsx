'use client'

import { useActiveSection } from '@/hooks/useActiveSection'
import { navbarMenu, SECTIONS } from '@/lib/const'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'

const Navbar = () => {
  const [section, setSection] = useState('')

  const activeSection = useActiveSection(SECTIONS)

  useEffect(() => {
    const handleHashChange = () => {
      setSection(activeSection)
    }

    handleHashChange()
  }, [activeSection])

  const handleClick = (link: string) => {
    console.log('click:', link)
    const element = document.getElementById(link)
    console.log(document.getElementById(link))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setSection(link)
    }
  }

  return (
    <div className='w-full max-w-[100vw] sticky z-50 bg-background/70 top-0 left-0 flex items-center justify-between  border-b-2 border-muted/10  py-3  px-5 md:px-16 '>
      <section className='flex  items-center flex-1 lg:flex-none'>
        <Image
          src='/logo.png'
          alt='Logo'
          width={50}
          height={50}
        />
        <h1 className='font-bold text-lg uppercase text-shadow-(--text-shadow-glow) text-nowrap hidden xl:inline-flex'>Jesús Viafara</h1>
      </section>
      <section className='absolute left-1/2 -translate-x-1/2 flex flex-2 justify-center items-center'>
        <ul className='hidden lg:flex justify-center items-center space-x-6'>
          {navbarMenu.map(item => (
            <li key={item.href}>
              <button
                onClick={() => handleClick(item.href)}
                className={`${section === item.href ? 'text-primary border-b-2 pb-2 border-primary' : ''} hover:text-primary text-nowrap`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className='flex flex-1 lg:flex-none justify-end items-center'>
        <Link
          href='/Jesús_Viafara_CV_ES.pdf'
          download={true}
          className='btn-outline-primary flex justify-center items-center gap-2 space-x-2 hover:hero-glow cursor-pointer'
        >
          <span className='hidden xl:inline-flex'>Descargar</span> CV <FiDownload />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
