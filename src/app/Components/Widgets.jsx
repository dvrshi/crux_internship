'use client'
import React from 'react';
import TableDataSmall from './tables/TableDataSmall';
import TableDatabig from './tables/TableDatabig';
import PieChart from './charts/PieChart';
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';


const Widget = () => {
    return (
        <div className='bg-indigo-100 px-8 py-4 h-[896px]'>
            <div className='grid grid-cols-6 grid-rows-4 gap-4 p-4 h-[844px]'>
                <div className='row-start-1 row-end-2 col-start-1 col-end-2 rounded-[15px] flex bg-white'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-2 pt-3' >
                        <div className='flex gap-2 border-b w-full'>
                            <div className='w-8 text-right border-b-2 border-indigo-500 text-indigo-500'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <div className='px-1'>

                            <TableDataSmall />
                        </div>
                        
                    </div>
                 
                </div>
                <div style={{ color: "white" }} className='row-start-1 row-end-2 col-start-2 col-end-3 rounded-[15px] flex pt-4 bg-indigo-500'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-2' >
                        <div className='border-b pl-2 w-full'>
                            Today
                        </div>
                        <div className='px-1'>

                            <TableDataSmall />
                        </div>
                    </div>
                </div>
                <div className='row-start-1 row-end-2 col-start-3 col-end-7 rounded-[15px] flex bg-white'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col bg-zinc-700 rounded-l-lg [15px] pt-3  gap-3 w-full'>
                        <div className='flex gap-2 border-b text-white'>
                            <div className='w-8 text-right border-b-2'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <div className='w-full h-[150px]'>
                            <BarChart width={500} height={500} />
                        </div>
                    </div>
                    <div style={{ fontSize: "0.85vw" }} className='w-full flex flex-col border-x-2 border-gray-200'  >
                        <div className='flex gap-2 border-b pt-3 mb-3'>
                            <div className='w-8 text-right border-b-2 border-indigo-500'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <TableDataSmall />
                    </div>
                    <div style={{ fontSize: "12px" }} className='flex flex-col gap-2'>
                        <div className='pt-4 pl-5' style={{ color: 'gray' }}>
                            Today
                        </div>
                        <div className='px-5 w-[433px]' style={{ color: 'black' }}>
                            Based on the provided data, the most effective hour of the day to send an email across all
                            stores for all time, with  the highest engagement after opening,
                            is at 15:00(3 PM), with a total of 5041 emails opened. The next best
                            hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785 emails opened respectively.
                            There is a noticeable drop in
                        </div>
                    </div>

                </div>
                <div style={{ color: "white" }} className='row-start-2 row-end-4 col-start-1 col-end-3 rounded-[15px] flex justify-center pt-4 bg-zinc-700'>
                    <div style={{ fontSize: "0.8vw" }} className='w-full flex flex-col'>
                        <div className='flex gap-2 border-b '>
                            <div className='w-8 text-right border-b-2'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <div className='w-full pt-2 px-4'>
                            <TableDatabig />

                        </div>
                    </div>
                </div>
                <div className='row-start-2 row-end-3 col-start-3 col-end-5 rounded-[15px] flex   bg-white'>
                    <div style={{ fontSize: "12px" }} className='flex flex-col gap-2'>
                        <div className='pt-5 pl-5' style={{ color: 'gray' }}>
                            Today
                        </div>
                        <div className='px-5' style={{ color: 'black' }}>
                            Based on the provided data, the most effective hour of the day to send an email across all
                            stores for all time, with  the highest engagement after opening,
                            is at 15:00(3 PM), with a total of 5041 emails opened. The next best
                            hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785 emails opened respectively.
                            There is a noticeable drop in
                        </div>
                    </div>
                </div>
                <div style={{ color: "white" }} className='row-start-2 row-end-5 col-start-5 col-end-6 rounded-[15px] flex bg-zinc-700 py-3'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col w-full'>
                        <div className='flex gap-2 border-b mt-0 mb-1'>
                            <div className='w-8 text-right border-b-2'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <div className='h-[500px]'>
                            <LineChart axiscolor={"darkgray"} long={true} />
                        </div>
                        <div style={{ fontSize: "0.8vw" }} className='flex flex-col justify-between px-4 pb-1'>
                            <div className='pb-2'>
                                <div className='border-red-700 border-l-2 border-l-2 px-2'>
                                    <div style={{ fontSize: "10px" }}>
                                        Christmas25
                                    </div>
                                    <div style={{ fontSize: "15px" }}>
                                        asdads
                                    </div>
                                </div>
                            </div>
                            <div className='pb-2'>
                                <div className='border-indigo-400 border-l-2 border-l-2 px-2'>
                                    <div style={{ fontSize: "10px" }}>
                                        Christmas25
                                    </div>
                                    <div style={{ fontSize: "15px" }}>
                                        asdads
                                    </div>
                                </div>
                            </div>
                            <div className='pb-2'>
                                <div className='border-green-700 border-l-2 border-l-2 px-2'>
                                    <div style={{ fontSize: "10px" }}>
                                        Christmas25
                                    </div>
                                    <div style={{ fontSize: "15px" }}>
                                        asdads
                                    </div>
                                </div>
                            </div>
                            <div className='pb-2'>
                                <div className='border-red-700 border-l-2 border-l-2 px-2'>
                                    <div style={{ fontSize: "10px" }}>
                                        Christmas25
                                    </div>
                                    <div style={{ fontSize: "15px" }}>
                                        asdads
                                    </div>
                                </div>
                            </div>
                            <div className='pb-2'>
                                <div className='border-indigo-400 border-l-2 border-l-2 px-2'>
                                    <div style={{ fontSize: "10px" }}>
                                        Christmas25
                                    </div>
                                    <div style={{ fontSize: "15px" }}>
                                        asdads
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row-start-2 row-end-3 col-start-6 col-end-7 rounded-[15px] flex bg-white'>
                    <div style={{ fontSize: "12px" }} className='flex flex-col gap-2 pt-4'>
                        <div className='flex gap-2 border-b'>
                            <div className='w-8 text-right border-b-2 border-indigo-600'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <PieChart />
                    </div>
                </div>
                <div style={{ color: "white" }} className='row-start-4 row-end-5 col-start-1 col-end-2 rounded-[15px] flex pt-4 bg-zinc-700'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-3'>
                        <div className='flex gap-2 border-b w-full'>
                            <div className='w-8 text-right border-b-2'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <div className='px-1'>

                            <TableDataSmall />
                        </div>
                    </div>
                </div>
                <div style={{ color: "white" }} className='row-start-4 row-end-5 col-start-2 col-end-3 rounded-[15px] flex pt-4 bg-indigo-500'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-3 w-full'>
                        <div className='border-b pl-2'>
                            Today
                        </div>
                        <div className='px-1'>

                            <TableDataSmall />
                        </div>
                    </div>
                </div>
                <div className='row-start-3 row-end-5 col-start-3 col-end-4 rounded-[15px] flex bg-white py-4'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col mt-0 w-full'>
                        <div className='flex gap-2 border-b mt-0 mb-1'>
                            <div className='w-8 text-right border-b-2 border-indigo-500 text-indigo-500'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <LineChart />
                        <div style={{ fontSize: "0.8vw" }} className='flex flex-col justify-between px-4 pb-1'>
                            <div className='pb-2'>
                                <div className='border-red-700 border-l-2 border-l-2 px-2'>
                                    <div style={{ fontSize: "10px" }}>
                                        Christmas25
                                    </div>
                                    <div style={{ fontSize: "15px" }}>
                                        asdads
                                    </div>
                                </div>
                            </div>
                            <div className='pb-2'>
                                <div className='border-indigo-400 border-l-2 border-l-2 px-2'>
                                    <div style={{ fontSize: "10px" }}>
                                        Christmas25
                                    </div>
                                    <div style={{ fontSize: "15px" }}>
                                        asdads
                                    </div>
                                </div>
                            </div>
                            <div className='pb-2'>
                                <div className='border-green-700 border-l-2 border-l-2 px-2'>
                                    <div style={{ fontSize: "10px" }}>
                                        Christmas25
                                    </div>
                                    <div style={{ fontSize: "15px" }}>
                                        asdads
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ color: "white" }} className='row-start-3 row-end-4 col-start-4 col-end-5 rounded-[15px] flex pt-4 bg-zinc-700'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col  gap-3'>
                        <div className='flex gap-2 border-b'>
                            <div className='w-8 text-right border-b-2'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <TableDataSmall />
                    </div>
                </div>
                <div className='row-start-4 row-end-5 col-start-4 col-end-5 rounded-[15px] flex bg-white pt-3'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-2 flex-grow'>
                        <div className='flex gap-2 border-b'>
                            <div className='w-8 text-right border-b-2 border-indigo-500 text-indigo-500'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <LineChart axiscolor={"darkgray"} showXAxisLabels={false} />
                    </div>
                </div>

                <div className='row-start-3 row-end-5 col-start-6 col-end-7 rounded-[15px] flex py-3 bg-white'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-3 w-full'>
                        <div className='flex gap-2 border-b '>
                            <div className='w-8 text-right border-b-2'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <div className='px-2 w-full h-[500px]'>
                            <BarChart width={500} height={800} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Widget;
