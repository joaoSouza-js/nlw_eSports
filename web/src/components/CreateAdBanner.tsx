import {MagnifyingGlassPlus} from 'phosphor-react'
import {Trigger} from '@radix-ui/react-dialog';


export function CreateAdBanner(){
    return(
        <footer className='rounded-xl rounded-t-lg rounde  self-stretch mt-8 pt-1 bg-nlw-gradient items-center'>
        <div  className='bg-[#2A2634] px-8 py-6 flex justify-between  rounded-b-lg'>
          <div>
            <strong className='text-white text-2xl font-black'>
              Não encontrou seu duo?
            </strong>
            <p className='text-zinc-400 '>
              Publique um anúncio para encontrar novos players!
            </p>
          </div>
          <Trigger asChild>
            <button className='bg-violet-500 py-3 px-4 rounded-md flex gap-3 items-center  hover:bg-violet-600 text-white font-medium ' >
                <MagnifyingGlassPlus size={24}/>
                <span className='text-white font-medium text-lg '>Publicar anúncio</span>
            </button>
          </Trigger>
        </div>
      </footer>
    )
}