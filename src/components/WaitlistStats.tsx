import React from 'react';

const WaitlistStats = (props : any) => {
  return (
    <div className='waitlistStats sm:rounded-[20px] rounded-[12px] sm:text-[16px] text-[10px] p-6 sm:min-w-[328px]'>
        <p className='text-center pb-6'>
            You are on the <span className='font-bold'>waitlist 🎉</span>
        </p>
        <hr />
        <p className='py-6'>
            Your place in the line is <span className='font-bold'>{props.place}</span>
        </p>
        <p className='pb-3'>
            Total waitlist member is <span className='font-bold'>{props.numbers}</span>
        </p>
    </div>
  )
}

export default WaitlistStats