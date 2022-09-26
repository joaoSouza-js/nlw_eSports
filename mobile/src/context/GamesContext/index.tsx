import {createContext,ReactNode, useState, useEffect} from 'react'

import { api } from '../../../libs/axios'

interface Game {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
      Ads: number
    }
}

interface GamesContextType {
    games: Game[]
}

export const GamesContext = createContext({} as GamesContextType)

interface GamesContextProviderProps {
    children: ReactNode
}

export function GamesContextProvider({children}:GamesContextProviderProps){
    const [games, setGames] = useState<Game[]>([])

    async function loadGames(){
        const response = await api.get('games')
        setGames( response.data)
    }

    useEffect(() => {
        loadGames()
    }, [])

    return(
        <GamesContext.Provider value={{games}}>
            {children}
        </GamesContext.Provider>
    )
}