import { Check, GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './Form/input';
import * as Checkbox from '@radix-ui/react-checkbox';
import { useState,FormEvent} from 'react';
import { WeekDaysSelector } from './WeekDaysSelector';
import { api } from '../libs/axios';

interface Game {
  id: string,
  title: string
}
interface CreateAdModalProps {
  games: Game[]
}

export function CreateAdModal({games}:CreateAdModalProps){
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)

  function updateWeekDays(weekDaysUpdated: string[]){
    setWeekDays(weekDaysUpdated)
  }

  async function handleCreateAd(event : FormEvent){
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    if(!data.name){
      return
    }
    try {
      await api.post(`games/${data.gameId}/ads`,{   
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        name: data.name,
        discord: data.discord,
        useVoiceChanneel: useVoiceChannel,
        weekDays: weekDays,
        yearsPlaying: Number(data.yearsPlaying)
      })
      alert('Anúncio criado com sucesso')
    } catch (error) {
      console.log(error)
      alert('erro ao cria o anúncio')
    }



  }
  console.log(useVoiceChannel)
  return(
      <Dialog.Portal>
        <Dialog.Overlay className='w-screen h-screen bg-black/60 fixed inset-0 ' />

        <Dialog.Content 
          className='
            fixed w-min  bg-[#2A2634] py-10 px-8 s hadow-lg shadow-black/25 text-white
            rounded-lg top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2
          '
        >
          <Dialog.Title className='text-[2rem] font-black '>Publique um anúncio</Dialog.Title>
          <form onSubmit={handleCreateAd} className='mt-8 min-w-[488px]'>
            <section className='flex gap-y-4 flex-col'>

              <div className='flex flex-col gap-y-2 '>
                <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                <select 
                  id="gameId"
                  name='gameId'
                  defaultValue={''}
                  className='py-3 px-4 bg-zinc-900 text-sm placeholder:text-zinc-500 rounded-[4px] appearance-none'
                >
                  <option disabled  value="">Selecione o game que deseja jogar</option>
                  {
                    games.map(game => (
                      <option key={game.id} value={game.id}>{game.title}</option>
                    ))
                  }

                </select>
              </div>

              <div className='flex flex-col gap-y-2 '>
                <label htmlFor="name" className='font-semibold'>Seu nome (ou nickname)</label>
                <Input 
                  type="text" 
                  id='name'
                  name='name'
                  autoComplete='off'
                  placeholder='Como te chamam dentro do game?'
                />
              </div>
              
              <div className='grid grid-cols-2 gap-x-6'>
                <div className='flex flex-col gap-y-2 '>
                  <label htmlFor="yearPlaying" className='font-semibold'>Joga há quantos anos?</label>
                  <Input 
                    type="number" 
                    id='yearsPlaying' 
                    name='yearsPlaying'
                    placeholder='Tudo bem ser ZERO'
                  />
                </div>
                
                <div className='flex flex-col gap-y-2 '>
                <label htmlFor="discord" className='font-semibold'>Qual seu Discord?</label>
                <Input 
                  type="text" 
                  id='discord'
                  name='discord'
                  placeholder='Usuario#0000' 
                />
                </div>
              </div>

              <div className='flex gap-x-6'>
                <div className='flex flex-col gap-y-2'>
                  <label htmlFor="weekDays" className='font-semibold'>Quando costuma jogar?</label>

                  <WeekDaysSelector
                    updateWeekDays={updateWeekDays}
                    weekDays={weekDays}
                  />

                </div>

                <div className='flex flex-col  gap-y-2 flex-1'>
                  <label className='font-semibold'>Qual horário do dia</label>
                  <div className='grid grid-cols-2  gap-x-2'>
                    <Input 
                        type="time" 
                        name="hourStart"
                        id='hourStart' 
                        placeholder='Até' 
                        className='py-2 px-3 bg-zinc-900 text-sm placeholder:text-zinc-500 rounded-[4px]'
                    />
                  
                    <Input
                      type="time" 
                      name='hourEnd'
                      id='hourEnd' 
                      placeholder='De' 
                      className='py-2 px-3 bg-zinc-900 text-sm placeholder:text-zinc-500 rounded-[4px]'
                    />
                  </div>
                </div>
                
              </div>
            </section>
            <label className='mt-6 flex gap-x-2 text-sm items-center' >

              <Checkbox.Root 
                checked={useVoiceChannel}
                onCheckedChange={event => {
                  event === true
                  ? setUseVoiceChannel(true)
                  : setUseVoiceChannel(false)
                }}
                className='w-6 h-6 p-1 bg-zinc-900 rounded'
                >
                <Checkbox.Indicator  >
                  <Check className='h-4 w-4 text-emerald-400'/>
                </Checkbox.Indicator>
              </Checkbox.Root>

              <span>Costumo me conectar ao chat de voz</span>
            </label>
            <footer className='flex justify-end gap-x-4 mt-8'>
              <Dialog.Close asChild>
                <button  type='button'className='py-4 px-[20px] bg-zinc-500 font-semibold  rounded-md'>Cancelar</button>
              </Dialog.Close>
              <button  type='submit' className='py-3 px-[20px] bg-violet-500 font-semibold flex gap-x-3 rounded-md'>
                <GameController size={24}/> 
                Encontrar duo
              </button>
            </footer>
    
          </form>
        </Dialog.Content>
      </Dialog.Portal>
  )
}

