import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './Header'
import BookingContainer from './BookingContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header></Header>
      <BookingContainer></BookingContainer>
      
    </main>
  )
}
