import CodeBlock from './CodeBlock'
import Introduction from './Introduction'
import * as motion from 'motion/react-client'

const Inicio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-200px' }}
      transition={{ duration: 0.5 }}
      id='inicio'
      className='w-full flex flex-col lg:flex-row gap-14 items-center justify-between mt-24 mx-auto'
    >
      <Introduction />
      <CodeBlock />
    </motion.div>
  )
}

export default Inicio
