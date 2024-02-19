import React from 'react'
import Image from 'next/image'
import logo from '../../../public/home.svg'
export default function Navigation() {
  return (
    <div className='Navigation flex justify-between'>
      <div className='lefter'>
        < Image src={logo} alt='logo' />
      </div>
      <div className='righter'>
        right
      </div>
    </div>
  )
}
