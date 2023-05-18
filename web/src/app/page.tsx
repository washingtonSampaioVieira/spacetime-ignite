import { User } from 'lucide-react'
import Image from 'next/image'
import nlwLogo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/** Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-white/10 px-28 py-16">
        {/**  Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] translate-x-1/2 translate-y-1 rounded-full  bg-purple-700 opacity-50 blur-full" />

        {/** Stripes */}
        <div className="border-r/10 absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        <a href="" className="flex items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug transition-colors hover:text-gray-50">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>
        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Space Time"></Image>
        </div>
        <div className="max-w-[420px] space-y-5">
          <h1 className="text-4xl font-bold leading-tight">
            Sua Cápsula do tempo
          </h1>
          <p className="text-lg leading-relaxed">
            Colecione momentos marcantes da sua jornada e compartilhe com o
            mundo!
          </p>
          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-700"
          >
            {' '}
            CADASTRAR LEMBRANÇA{' '}
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com para estudo por Washington S Vieira
        </div>
      </div>

      {/** Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não resgistrou nenhuma lembrança, começe comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              Criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
