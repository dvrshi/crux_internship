import React from 'react'
import Image from 'next/image'
import logo from '../../../public/home.svg'

import settings from '../../../public/settings.svg'
import BasicModal from './modal'
export default function Navigation() {
  return (
    <div className='Navigation flex justify-between items-center h-16 w-340 border'>
      <div className='lefter flex gap-2'>
        < Image className='ml-4 mr-2' src={logo} alt='logo' />
        <button className='p-3 border rounded-lg'>OverView</button>
        <button className='p-3 border rounded-lg'>Customer</button>
        <button className='p-3 border rounded-lg'>Products</button>
        <button className='p-3 border rounded-lg'>Settings</button>
        
      </div>
      <div className='righter flex items-center mr-12 gap-8'>
        <BasicModal />
        <Image className='h-5 w-5' src={settings} alt='logo' />
      </div>
    </div>
  )
}
