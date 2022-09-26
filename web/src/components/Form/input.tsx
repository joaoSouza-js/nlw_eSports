import { InputHTMLAttributes } from "react";

interface InputProps  extends InputHTMLAttributes<HTMLInputElement>{

}

export function Input(props: InputProps){
    return(
        <input 
            {...props}
            className='py-3 px-4 bg-zinc-900 text-sm placeholder:text-zinc-500 rounded-[4px]'
        />
    )
}