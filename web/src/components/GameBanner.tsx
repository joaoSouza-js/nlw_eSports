interface GameBannerProps {
    bannerUrl: string,
    title: string,
    adsAmount: number,
}

export function GameBanner({adsAmount,bannerUrl,title}: GameBannerProps){
    return(
        <a href="#" className='relative  rounded-lg overflow-hidden' >
          <img src={bannerUrl}className='h-full' />
          
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 '>
            <strong className='text-white block'>{title}</strong>
            <span className='text-sm text-zinc-300 block mt-1'>{adsAmount} anúncios(s)</span>
          </div>
        </a>
    )
}