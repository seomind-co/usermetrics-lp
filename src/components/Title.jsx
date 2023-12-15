import React from 'react';
import UserMetrics from "@/components/UserMetrics";

const Title = () => {
  return (
    <div className='flex flex-col justify-around items-center h-full gap-[44px] p-12'>
        <UserMetrics />
        
        <h3 className='sm:text-[18px] text-[12px] text-center font-medium leading-[20px] tracking-[-0.18px] opacity-60'>The best detailed dashboard for all communities</h3>

        <h2 className='sm:text-[48px] text-[20px] font-semibold sm:leading-[59.5px] leading-[30.5px] tracking-[-0.48px] opacity-85 sm:max-w-[611px] max-w-[276px] text-center'>Connect your community, analyze outputs</h2>
    </div>
  )
}

export default Title