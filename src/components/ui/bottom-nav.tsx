import React from 'react'
import AppButton from './app-button'

interface BottomNavItem {
  label: React.ReactNode
  onClick: () => void
}

interface BottomNavProps {
  items: BottomNavItem[]
}

const BottomNav = ({ items }: BottomNavProps) => {
  return (
    <nav className='fixed bottom-0 left-0 right-0'>
        <ul className='bg-black dark:bg-white text:black dark:text-white grid grid-cols-4 gap-1 m-2 text-center rounded-4xl palce-content-center justify-items-center px-2 py-2'>
            {items.map((item, index) => (
                <li key={index} className='grid place-content-center justify-items-center'>
                    <AppButton icon={item.label} onClick={item.onClick} variant="inverse" />
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default BottomNav