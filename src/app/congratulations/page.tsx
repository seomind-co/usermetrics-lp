import React from 'react';

import UserMetrics from '@/components/UserMetrics';
import Footer from '@/components/Footer';
import WaitlistStats from '@/components/WaitlistStats';
import Share from '@/components/Share';

const Congrats = () => {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-between">
        <div />

      <div className='flex flex-col items-center justify-around h-full container mx-auto max-w-3xl'>
        <div className='mb-[5vh]'>
            <UserMetrics />
        </div>
        <WaitlistStats />
      </div>

      <div className='container mx-auto max-w-xl sm:px-0 px-5'>
        <Share />
      </div>

      <Footer />
    </main>
  )
}

export default Congrats