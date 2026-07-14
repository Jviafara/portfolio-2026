import Navbar from '@/components/Navbar'
import SobreMi from '@/components/SobreMi'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className='max-w-screen min-h-screen flex flex-col mt-20 px-24 '>
        <SobreMi />
      </main>
    </div>
  )
}
