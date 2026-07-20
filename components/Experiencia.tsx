import * as motion from 'motion/react-client'
import Image from 'next/image'
import Tag from './Tag'

const Experiencia = () => {
  return (
    <motion.div
      id='experiencia'
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-200px' }}
      transition={{ duration: 0.5 }}
      className='w-full flex flex-col justify-start space-y-6'
    >
      <section>
        <h1 className='text-lg text-primary-hover uppercase'>Experiencia Laboral</h1>
        <h1 className='text-3xl font-bold text-primary-foreground'>Mi trayectoria profesional</h1>
      </section>
      <section className='lg:hidden flex flex-col space-y-4 '>
        <div className='min-w-fit text-muted-foreground text-sm flex gap-1'>
          <h1>Ago 2025 - Feb 2026</h1> | <p>6 meses</p>
        </div>
        <div className='bg-card w-full flex flex-col px-4 py-4 rounded-xl border border-border space-y-8'>
          <div className='flex flex-col space-y-4'>
            <div className='w-24 h-24 relative rounded-xl border border-primary'>
              <Image
                src={'/pragma.jpg'}
                alt='pragma'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vwc'
                className='object-contain object-center rounded-xl '
              />
            </div>
            <div className='grow flex flex-col space-y-2'>
              <h1 className='text-lg font-bold text-primary-foreground'>Practicante de Desarrollo de Software</h1>
              <h2 className='text-primary'>Pragma S.A.</h2>
              <p className='text-sm text-muted'>
                Desarrollo de aplicaciones web modernas, enfocadas en ofrecer una experiencia de usuario intuitiva y
                eficiente. Participé en la implementación de interfaces responsivas utilizando tecnologías como HTML,
                CSS, TypeScript bajo el framework Angular.
              </p>
            </div>
          </div>

          <div className='flex flex-wrap justify-start space-x-2 space-y-2 w-full'>
            <Tag label={'Angular JS'} />
            <Tag label={'TypeScript'} />
            <Tag label={'SCRUM'} />
            <Tag label={'SASS'} />
            <Tag label={'HTML'} />
            <Tag label={'Rest API'} />
            <Tag label={'GitLab'} />
            <Tag label={'Jira'} />
          </div>
        </div>
      </section>
      <section className='hidden lg:inline-flex space-x-4'>
        <div className='min-w-fit text-muted-foreground text-sm flex flex-col gap-1'>
          <h1>Ago 2025 - Feb 2026</h1>
          <p>6 meses</p>
        </div>
        <div className='bg-card w-full flex px-12 py-6 rounded-xl border border-border space-x-8'>
          <div>
            <div className='w-24 h-24 relative rounded-xl'>
              <Image
                src={'/pragma.jpg'}
                alt='praga'
                fill
                className='object-cover object-center rounded-xl'
              />
            </div>
          </div>

          <div className='max-w-1/2 flex flex-col space-y-2'>
            <h1 className='text-lg font-bold text-primary-foreground'>Practicante de Desarrollo de Software</h1>
            <h2 className='text-primary'>Pragma S.A.</h2>
            <p className='text-sm text-muted'>
              Desarrollo de aplicaciones web modernas, enfocadas en ofrecer una experiencia de usuario intuitiva y
              eficiente. Participé en la implementación de interfaces responsivas utilizando tecnologías como HTML, CSS,
              TypeScript bajo el framework Angular.
            </p>
          </div>
          <div className='grow flex flex-wrap justify-start space-x-2 space-y-2 h-fit'>
            <Tag label={'Angular JS'} />
            <Tag label={'TypeScript'} />
            <Tag label={'SCRUM'} />
            <Tag label={'SASS'} />
            <Tag label={'HTML'} />
            <Tag label={'Rest API'} />
            <Tag label={'GitLab'} />
            <Tag label={'Jira'} />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Experiencia
