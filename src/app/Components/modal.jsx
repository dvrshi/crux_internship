'use client'
import React, { useState } from 'react';
import Image from 'next/image';
function BasicModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className='p-3 border rounded-lg' type="button" onClick={handleOpen}>Open Widget</button>
            {open && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-30" onClick={handleClose}>
                    <div className="bg-white py-8 rounded-[20px]" onClick={(e) => e.stopPropagation()}>
                        <div className="w-[1060px] h-[632px] flex flex-col ">
                            <div className="flex justify-end pr-4" >
                                <Image src="/cross.svg" alt="cross" width={40} height={40} onClick={handleClose} />
                            </div>
                            <div id='topbar' className='flex justify-between items-center px-8 border-gray-400 border-b'>
                                <div className='flex gap-4 mt-3 mb-5 '>
                                    <Image src="/create_widget.svg" alt="logo" width={50} height={50} className='' />
                                    <div>
                                        <h1 className='text-2xl font-bold'>Create Widget</h1>
                                        <p className='text-sm text-gray-400'>Manage the glossary of your terms of your Database</p>
                                    </div>
                                </div>
                                <div>
                                    <input type="text" placeholder="Search" className="w-96 h-12 border-2 border-gray-300 rounded-lg" />
                                </div>
                            </div>
                            <div id='content' className='px-8 flex mt-12 gap-8' >
                                <div id='box' className='w-[641px] h-[456px] bg-gray-100 rounded-lg'></div>
                                <div id='components' className='flex flex-col gap-3'>
                                    <h1>Components</h1>
                                    <label>
                                        <input type="radio" name="component" className='hidden' />
                                        <button className='w-[300px] h-[80px] bg-white flex flex-col rounded-lg border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 flex justify-start items-start p-4'>
                                            <div className="text-lg font-semibold">Data</div>
                                            <div className="text-sm">Random Desc</div>
                                        </button>
                                    </label>
                                    <label>
                                        <input type="radio" name="component" className='hidden' />
                                        <button className='w-[300px] h-[120px] bg-white flex flex-col rounded-lg border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 flex justify-start items-start p-4 
        focus:ring-indigo-500 focus:border-indigo-500 
        ring-2 ring-transparent
        hover:ring-indigo-300 hover:border-indigo-300
        checked:border-indigo-500'
                                        >
                                            <div className="text-lg font-semibold">Graph</div>
                                            <div className="text-sm">Random Desc</div>
                                            <div className="flex gap-3 mt-3">
                                                <label>
                                                    <input type="radio" name="graphOption" className='hidden' />
                                                    <button className='w-[20px] h-[20px] bg-white flex justify-center items-center rounded-lg border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300'>
                                                        1
                                                    </button>
                                                </label>
                                                <label>
                                                    <input type="radio" name="graphOption" className='hidden' />
                                                    <button className='w-[20px] h-[20px] bg-white flex justify-center items-center rounded-lg border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300'>
                                                        2
                                                    </button>
                                                </label>
                                                <label>
                                                    <input type="radio" name="graphOption" className='hidden' />
                                                    <button className='w-[20px] h-[20px] bg-white flex justify-center items-center rounded-lg border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300'>
                                                        3
                                                    </button>
                                                </label>
                                            </div>
                                        </button>
                                    </label>

                                    <label>
                                        <input type="radio" name="component" className='hidden' />
                                        <button className='w-[300px] h-[80px] bg-white flex flex-col rounded-lg border border-gray-300 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 flex justify-start items-start p-4'>
                                            <div className="text-lg font-semibold">Summary</div>
                                            <div className="text-sm">Random Desc</div>
                                        </button>
                                    </label>
                                    <div className="flex justify-between items-center mt-20">
                                        <button className="w-[30px] h-[30px] rounded-lg">
                                            <img src="/history.svg" alt="SVG Image" className="w-full h-full" />
                                        </button>
                                        <button className="w-[100px] h-[50px]  text-black border rounded-lg" onClick={handleClose}>Cancel</button>
                                        <button className="w-[100px] h-[50px] bg-indigo-500 text-white rounded-lg">Save</button>

                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BasicModal;
