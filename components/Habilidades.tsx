'use client'
import { TECNOLOGIAS } from '@/lib/const'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import AutoSwiper from './AutoSwiper'
import { SwiperSlide } from 'swiper/react'

const Habilidades = () => {
  return (
    <motion.div
      id='habilidades'
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-200px' }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-center space-y-3 w-full overflow-hidden'
    >
      <h1 className='text-primary-hover font-bold'>HABILIDADES</h1>
      <h1 className='font-bold text-3xl text-nowrap'>Tecnologías que uso</h1>
      <section className='w-full max-w-full overflow-hidden'>
        <AutoSwiper>
          {TECNOLOGIAS.map((tech, index) => (
            <SwiperSlide
              key={index}
              className='w-fit! swiper-slide min-w-48'
            >
              <motion.div
                initial={{ scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: '-150px' }}
                transition={{ duration: 0.5 }}
                className='flex flex-col gap-4 items-center justify-between w-48 h-fit py-4 border-muted/10  bg-card rounded-xl cursor-pointer'
              >
                <div className='relative w-30 h-30'>
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vwc'
                    className={` ${tech.name === 'Tailwind' ? 'object-contain' : 'object-cover'} object-center`}
                  />
                </div>
                <div className='w-full flex flex-col items-center space-y-2'>
                  <h1>{tech.name}</h1>
                  <div className='w-[75%] h-1.5 rounded-full bg-muted-foreground/20 '>
                    <div
                      className='bg-primary  h-1.5 rounded-full'
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </AutoSwiper>
      </section>
    </motion.div>
  )
}

export default Habilidades
