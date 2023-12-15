import Image from 'next/image';
import React from 'react';

import Clipboard from "../assets/img/clipboard.svg";
import Linkedin from "../assets/img/linkedin.svg";
import Twitter from "../assets/img/twitter.svg";
import Whatsapp from "../assets/img/whatsapp.svg";
import Telegram from "../assets/img/telegram.svg";

const Share = () => {
  return (
    <div className='share rounded-[20px] flex flex-col items-center justify-center w-full p-6'>
        <p className='sm:text-[16px] text-[10px] font-semibold leading-[20px] tracking-[-0.16px] mb-[25px]'>
            Share your link to move up the waitlist
        </p>

        <input 
            disabled 
            type="text" 
            name="link" 
            value='https://usermetrics.co/?r=COPY-phTU0Gc' 
            className="shareInput sm:rounded-[20px] rounded-[10px] p-4 w-full mb-3 sm:text-[16px] text-[8px]" 
        />

        <a type="button" className='copyButton sm:py-3.5 py-1.5 flex items-center justify-center w-full text-center mb-7 sm:rounded-[20px] rounded-[10px] sm:text-[16px] text-[8px]'>
            Copy Link <Image src={Clipboard} alt='copy to clipboard' className='sm:ml-2 ml-0.5 sm:h-auto h-5' />
        </a>

        <div className='flex justify-center items-center gap-2 w-full'>
            <a href="">
                <Image className='sm:h-auto h-8' src={Linkedin} alt='Linkedin' />
            </a>
            <a href="">
                <Image className='sm:h-auto h-8' src={Twitter} alt='Twitter' />
            </a>
            <a href="">
                <Image className='sm:h-auto h-8' src={Whatsapp} alt='Whatsapp' />
            </a>
            <a href="">
                <Image className='sm:h-auto h-8' src={Telegram} alt='Telegram' />
            </a>
        </div>
    </div>
  )
}

export default Share