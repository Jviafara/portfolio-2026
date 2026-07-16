import { codeToHtml } from 'shiki'

const CodeBlock = async () => {
  const sampleCode = `const developer = {
  name: 'Jesús Viafara',
  role: 'Desarrollador de Software',
  skills: ['React', 'TypeScript', 'Node.js'],
  building: 'Soluciones digitales'
};

function createImpact() {
  return 'Código que genera impacto 🚀';
}`

  const highlightedHtml = await codeToHtml(sampleCode, {
    lang: 'javascript',
    theme: 'tokyo-night',
  })
  return (
    <section className='w-full max-w-[100vw] hidden md:w-1/2 xs:flex justify-center relative -z-10'>
      <div className='w-fit relative flex items-center justify-center h-80 bg-code border-2 border-code-border/30 rounded-xl shadow-[0_0_100px_-10px_var(--glow-primary)]'>
        <div className='absolute top-2 left-2 flex space-x-2'>
          <div className='rounded-full bg-destructive w-3 h-3' />
          <div className='rounded-full bg-warning w-3 h-3' />
          <div className='rounded-full bg-success w-3 h-3' />
        </div>
        <div className='md:w-full min-w-fit p-4'>
          <div
            className='bg-transparent mt-4'
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </div>
      </div>
    </section>
  )
}

export default CodeBlock
