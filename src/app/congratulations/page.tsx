import React from 'react';

import UserMetrics from '@/components/UserMetrics';
import Footer from '@/components/Footer';
import WaitlistStats from '@/components/WaitlistStats';
import Share from '@/components/Share';

const Congrats = () => {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-between">
      <div className='flex flex-col items-center justify-around h-full container mx-auto max-w-3xl'>
        <UserMetrics />
      </div>

      <div className='flex flex-col items-center justify-around h-full container mx-auto max-w-3xl'>
        <WaitlistStats />
      </div>

      <Share />

      <Footer />
    </main>
  )
}

export default Congrats