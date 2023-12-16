"use client"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';

import React, { FormEvent, useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/navigation';

const Form = () => {
  const router = useRouter();
  const [isFocus, setIsFocus] = useState(false);
    
  const POST = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    
    if (formData.get("email") == "") {
      alert("Name must be filled out");
    }
    else {
      await axios.post('http://localhost:5000/save', {"email": formData.get('email')}).then((res) => {
        router.push('/perfect');
      }).catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
    }
  }

  return (
    <div className='form-bg group w-full sm:rounded-[30px] rounded-[10px] sm:p-[35px] p-[20px] max-w-full'>
      <div className='sm:mb-8 mb-3'>
        <h4 className='sm:text-[18px] text-[10px] font-bold sm:leading-[20px] leading-[12px] tracking-[-0.18px]'>Join the waitlist</h4>
        <p className='sm:text-[16px] text-[8px] font-medium sm:leading-[20px] leading-[12px] tracking-[-0.16px]]'>Sign up to get early access</p>
      </div>

      <form autoComplete="off" onSubmit={POST} className='flex justify-between gap-2'>
        <div className='relative flex items-center w-full'>
            <input className={`form-input ${isFocus ? "bg-white/40 opacity-100" : "bg-transparent opacity-50"} group-hover:opacity-100 transition-all duration-300 rounded-[8px] sm:rounded-[20px] sm:text-[16px] text-[10px] font-normal sm:leading-[20px] leading-[10px] tracking-[-0.16px] sm:px-12 px-8 sm:py-3 py-2 text-black w-full h-full max-w-[594px]`} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} type="email" name="email" placeholder="Your email" id="" />
            <MailOutlineIcon className='mailIcon' />
        </div>

        <button type="submit" className={`sendButton ${isFocus ? "bg-white/50 opacity-100" : "bg-transparent opacity-50"} group-hover:opacity-100 transition-all duration-300 rounded-[8px] sm:rounded-[20px] sm:px-8 p-4 flex justify-center items-center`}><SendIcon className='sendIcon' /></button>
      </form>
    </div>
  )
}

export default Form;