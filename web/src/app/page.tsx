import { User } from 'lucide-react'
import Image from 'next/image'
import { Copyright } from '@/components/CopyRight'
import { Hero } from '@/components/Hero'
import { Singin } from '@/components/Signin'
import { EmptyMemories } from '@/components/EmptyMemories'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/** Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-white/10 px-28 py-16">
        {/**  Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] translate-x-1/2 translate-y-1 rounded-full  bg-purple-700 opacity-50 blur-full" />

        {/** Stripes */}
        <div className="border-r/10 absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        <Singin />
        <Hero />
        <Copyright />
      </div>

      {/** Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
