import { useRouter } from 'next/navigation'
import React from 'react'

const Typeform = () => {
    const router = useRouter();
  return (
    <div onClick={() => router.push("/supportus")} className='cool-border rounded-md min-w-[207px] p-3 text-center cursor-pointer text-[10px]'>
        Support us develop our product
    </div>
  )
}

export default Typeform