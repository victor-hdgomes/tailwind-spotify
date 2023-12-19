import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 pb-28">
        <Sidebar />

        <Main />
      </div>
      <Footer />
    </div>
  )
}
