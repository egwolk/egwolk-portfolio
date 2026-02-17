import React from 'react'
import Link from 'next/link'

interface BottomNavItem {
  label: string
  href: string
}

interface BottomNavProps {
  items: BottomNavItem[]
}

const BottomNav = ({ items }: BottomNavProps) => {
  return (
    <nav className='fixed bottom-0 left-0 right-0'>
        <ul className='bg-black dark:bg-white text:black dark:text-white grid grid-cols-4 gap-1 m-2 text-center rounded-4xl align-items-center justify-items-center px-2 transition-all duration-300'>
            {items.map((item, index) => (
                <li key={index}>
                    <Link href={item.href}>
                        <div className=" bg-white dark:bg-black rounded-lg min-h-15 min-w-15 m-3 max-h-20 max-w-20 transition-all duration-300">
                            {item.label}
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default BottomNav