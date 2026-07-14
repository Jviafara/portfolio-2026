import CodeBlock from './CodeBlock'
import Introduction from './Introduction'

const SobreMi = () => {
  return (
    <div
      id='sobre-mi'
      className='w-full flex items-center justify-between'
    >
      <Introduction />
      <CodeBlock />
    </div>
  )
}

export default SobreMi
