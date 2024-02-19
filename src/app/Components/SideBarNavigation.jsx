import React from 'react'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import icon1 from '../../../public/icon1.svg'
import icon2 from '../../../public/icon2.svg'
import icon3 from '../../../public/icon3.svg'
import icon4 from '../../../public/icon4.svg'
import avatar from '../../../public/avatar.svg'
function SideBarNavigation() {
    return (
        <div className='content py-8 items-center flex flex-col justify-between h-full' >
            <div className='header flex flex-col gap-6'>
                <div className='header w-full flex justify-center  pr-5 pl-6'>
                    <Image src={logo} alt='logo' />
                </div>
                <div className='navigation flex flex-col items-center justify-center w-full gap-2 px-4'>
                    <Image src={icon1} alt='icon' className='py-2' />
                    <Image src={icon2} alt='icon' className='py-2' />
                    <Image src={icon3} alt='icon' className='py-2' />
                    <Image src={icon4} alt='icon' className='py-2' />
                </div>
            </div>
            <div className='footer pr-4 pb-2 pl-4'>
                <Image src={avatar} alt='icon'  />
            </div>
        </div>
    )
}

export default SideBarNavigation