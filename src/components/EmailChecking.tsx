import React from 'react';

const EmailChecking = () => {
  return (
    <div className='flex flex-col items-center sm:gap-6 gap-2'>
        <p className='sm:text-[16px] text-[10px] text-center font-normal leading-[20px] tracking-[-0.16px]'>
            Didn’t get an email? <span className='font-bold'>Check your spam folder!</span>
        </p>

        <p className='sm:text-[16px] text-[10px] text-center font-semibold leading-[20px] tracking-[-0.16] text-[#F2BBBB]'>
            Re-enter your email and try again
        </p>
    </div>
  )
}

export default EmailChecking