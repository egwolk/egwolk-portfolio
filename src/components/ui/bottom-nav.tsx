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
        <ul className='bg-white text-blue-600 grid grid-cols-4'>
            {items.map((item, index) => (
                <li key={index}>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default BottomNav