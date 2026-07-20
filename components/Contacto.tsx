import * as motion from 'motion/react-client'
import { IoIosSend } from 'react-icons/io'

const Contacto = () => {
  return (
    <motion.div
      id='contacto'
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-200px' }}
      transition={{ duration: 0.5 }}
      className='flex flex-col space-y-4 justify-center items-center w-full h-full'
    >
      <p className='text-lg text-primary uppercase'>Contacto</p>
      <p className='text-muted'>¿Tienes una idea en ment o quieres colaborar? ¡Me encantaria saber de ti!</p>
      <div className='flex justify-center items-center w-full'>
        <form
          action='https://getform.io/f/986d3bba-f0d0-44f6-a1a2-6c31b80fab9c'
          method='post'
          className='flex flex-col items-end space-y-4 w-full '
        >
          <section className='flex flex-col md:flex-row gap-4 w-full'>
            <input
              type='text'
              name='name'
              required
              placeholder='Nombre'
              className='w-full p-2 bg-transparent border-2 rounded-md border-black focus:outline-none placeholder-gray-500'
            />
            <input
              type='email'
              name='Email'
              required
              placeholder='Email Address'
              className='w-full p-2 bg-transparent border-2 rounded-md border-black focus:outline-none placeholder-gray-500'
            />
            <input
              type='text'
              name='asunto'
              required
              placeholder='Asunto'
              className='w-full p-2 bg-transparent border-2 rounded-md border-black focus:outline-none placeholder-gray-500'
            />
          </section>

          <textarea
            name='message'
            required
            rows={5}
            placeholder='Escribe tu mensaje...'
            className='w-full p-2 bg-transparent border-2 rounded-md border-black focus:outline-none placeholder-gray-500'
          />
          <button
            type='submit'
            className='btn-outline-primary hover:btn-primary w-fit  hover:bg-primary-hover cursor-pointer flex items-center justify-center gap-2 text-nowrap'
          >
            Enviar mensaje <IoIosSend size={24} />
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contacto
