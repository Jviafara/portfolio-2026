import CodeBlock from './CodeBlock'
import Introduction from './Introduction'

const SobreMi = () => {
  return (
    <div
      id='sobre-mi'
      className='w-[90%] md:w-[85%] lg:w-[70%] flex flex-col lg:flex-row gap-14 items-center justify-between mt-24 mx-auto'
    >
      <Introduction />
      <CodeBlock />
    </div>
  )
}

export default SobreMi
