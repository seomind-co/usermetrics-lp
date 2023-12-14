import React from 'react';

import Footer from '@/components/Footer';
import AlmostDone from '@/components/AlmostDone'
import GmailButton from "@/components/GmailButton";
import EmailChecking from '@/components/EmailChecking';
import UserMetrics from '@/components/UserMetrics';

const Perfect = () => {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-between">
      <div className='flex flex-col items-center justify-around h-full container mx-auto max-w-3xl'>
        <UserMetrics />
      </div>

      <div className='flex flex-col items-center justify-around h-full container mx-auto max-w-3xl'>
        <AlmostDone />
      </div>

      <GmailButton />

      <EmailChecking />

      <Footer />
    </main>
  )
}

export default Perfect