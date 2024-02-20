import React from 'react'
import Image from 'next/image'
import logo from '../../../public/home.svg'
import Button from './Button'
import settings from '../../../public/settings.svg'
export default function Navigation() {
  return (
    <div className='Navigation flex justify-between items-center h-16 w-340 border'>
      <div className='lefter flex gap-2'>
        < Image className='ml-4 mr-2' src={logo} alt='logo' />
        <Button name='Overview' />
        <Button name='Customer' />
        <Button name='Products' />
        <Button name='Settings' />
        
      </div>
      <div className='righter flex items-center mr-12 gap-8'>
        <Button name='Add Widget' />
        <Image className='h-5 w-5' src={settings} alt='logo' />
      </div>
    </div>
  )
}
