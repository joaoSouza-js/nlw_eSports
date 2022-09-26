import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css'

import { api } from './libs/axios'
import logoImg from './assets/logo-nlw-eSports.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal';

interface Game {
  id: string,
  title: string,
  bannerUrl: string
  _count: {
    Ads: number
  }
}

export function App(){
  const [games,setGames] = useState<Game[]>([])

  async function loadGames(){
    const response = await api.get('games')
    setGames(response.data)
  }

  useEffect(() => {
    loadGames()
  } ,[])

  
  return(
    <div className='items-center flex  flex-col max-w-[1334px] mx-auto my-20 px-6' >
      <img src={logoImg} />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <main className='grid grid-cols-6 gap-6 mt-16'>
        {
          games.map(game => (
            <GameBanner
              key={game.id}
              bannerUrl = {game.bannerUrl}
              adsAmount = {game._count.Ads}
              title = {game.title}
            />
          ))
        }
      </main>

      
      <Dialog.Root>
        <CreateAdBanner/>
        <CreateAdModal games={games}/>
      </Dialog.Root>
      

      
    </div>
  )
}