'use client'
import React, { useState } from 'react';
import Image from 'next/image';

function BasicModal() {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedComponent, setSelectedComponent] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleColorButtonClick = (color) => {
        setSelectedColor(color);
    };

    const handleComponentButtonClick = (component) => {
        setSelectedComponent(component);
    };

    const handleSave = () => {
        console.log(selectedColor+selectedComponent);
    };

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
                                    <input type="text" placeholder="Title" value={inputValue} onChange={handleInputChange} className="w-96 h-12 px-4 border-2 border-gray-300 rounded-lg" />
                                </div>
                            </div>
                            <div id='content' className='px-8 flex mt-12 gap-8' >
                                <div id='box' className='w-[641px] h-[456px] bg-gray-100 rounded-lg flex flex-col'>
                                    <div className="flex justify-between h-12 px-4 items-center">
                                        <h1 className='text-lg font-semibold'>1x1</h1>
                                        <h1 className='text-lg font-semibold'>Type</h1>
                                    </div>
                                    <div className="flex flex-1 justify-center items-center">
                                        <div className="w-2/3 h-full flex justify-center items-center">{inputValue}</div>
                                    </div>
                                    <div className="flex justify-center h-16 items-center gap-4">
                                        <button className={`w-7 h-7 rounded-full ${selectedColor === 'white' ? 'bg-white border-2' : 'bg-white'} focus:border-black focus:outline-none focus:ring-2 focus:ring-white`} onClick={() => handleColorButtonClick('white')}></button>
                                        <button className={`w-7 h-7 rounded-full ${selectedColor === 'black' ? 'bg-black border-2' : 'bg-black'} focus:border-black focus:outline-none focus:ring-2 focus:ring-white`} onClick={() => handleColorButtonClick('black')}></button>
                                        <button className={`w-7 h-7 rounded-full ${selectedColor === 'indigo' ? 'bg-indigo-500 border-2' : 'bg-indigo-500'} focus:border-black focus:outline-none focus:ring-2 focus:ring-white`} onClick={() => handleColorButtonClick('indigo')}></button>
                                    </div>
                                </div>
                                <div id='components' className='flex flex-col justify-between gap-3'>
                                    <h1>Components</h1>
                                    <div className='flex flex-col gap-4'>
                                        <button className={`w-[300px] h-[80px] bg-white flex flex-col rounded-lg border ${selectedComponent === 'Data' ? 'border-indigo-300 focus:border-indigo-300' : 'border-gray-300 focus:border-indigo-300'} focus:outline-none focus:ring-2 focus:ring-indigo-300 flex justify-start items-start p-4`} onClick={() => handleComponentButtonClick('Data')}>
                                            <div className="text-lg font-semibold">Data</div>
                                            <div className="text-sm">Random Desc</div>
                                        </button>
                                        <button className={`w-[300px] h-[120px] bg-white flex flex-col rounded-lg border ${selectedComponent === 'Graph' ? 'border-indigo-300 focus:border-indigo-300' : 'border-gray-300 focus:border-indigo-300'} focus:outline-none focus:ring-2 focus:ring-indigo-300 flex justify-start items-start p-4`} onClick={() => handleComponentButtonClick('Graph')}>
                                            <div className="text-lg font-semibold">Graph</div>
                                            <div className="text-sm">Random Desc</div>
                                            <div className="flex gap-3 mt-3">
                                                <button className='w-[20px] h-[20px] bg-white flex justify-center items-center rounded-lg border border-gray-300'>1</button>
                                                <button className='w-[20px] h-[20px] bg-white flex justify-center items-center rounded-lg border border-gray-300'>2</button>
                                                <button className='w-[20px] h-[20px] bg-white flex justify-center items-center rounded-lg border border-gray-300'>3</button>
                                            </div>
                                        </button>
                                        <button className={`w-[300px] h-[80px] bg-white flex flex-col rounded-lg border ${selectedComponent === 'Summary' ? 'border-indigo-300 focus:border-indigo-300' : 'border-gray-300 focus:border-indigo-300'} focus:outline-none focus:ring-2 focus:ring-indigo-300 flex justify-start items-start p-4`} onClick={() => handleComponentButtonClick('Summary')}>
                                            <div className="text-lg font-semibold">Summary</div>
                                            <div className="text-sm">Random Desc</div>
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="w-[30px] h-[30px] rounded-lg">
                                            <img src="/history.svg" alt="SVG Image" className="w-full h-full" />
                                        </button>
                                        <button className="w-[100px] h-[50px]  text-black border rounded-lg" onClick={handleClose}>Cancel</button>
                                        <button className="w-[100px] h-[50px] bg-indigo-500 text-white rounded-lg" onClick={handleSave}>Save</button>
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
