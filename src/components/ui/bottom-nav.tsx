import React from 'react'
import Link from 'next/link'

const BottomNav = () => {
  return (
    <nav className='fixed bottom-0 left-0 right-0'>
        <ul className='bg-white text-blue-600 grid grid-cols-4'>
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/About"}>About</Link>
            </li>
            <li>
                <Link href={"/Projects"}>Projects</Link>
            </li>
            <li>
                <Link href={"/Contact"}>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default BottomNav