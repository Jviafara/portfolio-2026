import Navbar from '@/components/Navbar'
import SobreMi from '@/components/SobreMi'

export default function Home() {
  return (
    <div className='max-w-screen'>
      <Navbar />
      <main className='max-w-screen min-h-screen overflow-hidden flex flex-col items-center mt-20'>
        <SobreMi />
      </main>
    </div>
  )
}
