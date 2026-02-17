import React from 'react'

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
        <ul className='bg-black dark:bg-white text:black dark:text-white grid grid-cols-4 gap-1 m-2 text-center rounded-4xl palce-content-center justify-items-center px-2'>
            {items.map((item, index) => (
                <li key={index}>
                    <button onClick={item.onClick} className='w-full'>
                        <div className=" bg-white dark:bg-black rounded-lg min-h-15 min-w-15 m-3 max-h-20 max-w-20 justify-items-center place-content-center">
                            {item.label}
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default BottomNav