import React from 'react';

const Share = () => {
  return (
    <div className='share'>
        <p>
            Share your link to move up the waitlist
        </p>

        <input 
            disabled 
            type="text" 
            name="link" 
            value='https://usermetrics.co/?r=COPY-phTU0Gc' 
            className="rounded-[20px] p-4" 
        />
    </div>
  )
}

export default Share