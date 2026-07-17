import CodeBlock from './CodeBlock'
import Introduction from './Introduction'

const Inicio = () => {
  return (
    <div
      id='inicio'
      className='w-full flex flex-col lg:flex-row gap-14 items-center justify-between mt-24 mx-auto'
    >
      <Introduction />
      <CodeBlock />
    </div>
  )
}

export default Inicio
