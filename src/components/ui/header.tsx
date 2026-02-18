"use client";
import React, { useState, useEffect } from 'react'

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='bg-black dark:bg-white text-white dark:text-black grid grid-cols-3 m-2 rounded-full place-content-center justify-items-center px-2'>
        <span className='justify-self-start'>text</span>
        <span className='justify-center'>egwolk_OS</span>
        <span className='justify-self-end'>{time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}</span>
    </div>
  )
}

export default Header