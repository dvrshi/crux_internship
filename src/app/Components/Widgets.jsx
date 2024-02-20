'use client'
import React from 'react';
import TableDataSmall from './TableDataSmall';
import TableDatabig from './TableDatabig';
import PieChart from './PieChart';

const Widget = () => {
    return (
        <div className='bg-indigo-100'>
            <div className='grid grid-cols-6 grid-rows-4 gap-4 p-4 h-[844px]'>
                <div style={{ color: "white" }} className='row-start-1 row-end-2 col-start-2 col-end-3 rounded-[15px] flex pt-4 bg-indigo-500'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-2' >
                        <div className='border-b pl-2'>
                            Today
                        </div>
                        <TableDataSmall />
                    </div>
                </div>
                <div className='row-start-1 row-end-2 col-start-1 col-end-2 rounded-[15px] flex pt-4 bg-white'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-2' >
                        <div className='flex gap-2 border-b'>
                            <div className='w-8 text-right border-b-2 border-indigo-500'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <TableDataSmall />
                    </div>
                </div>
                <div className='row-start-1 row-end-2 col-start-3 col-end-7 rounded-[15px] flex justify-center items-center bg-white'>3</div>
                <div style={{ color: "white" }} className='row-start-2 row-end-4 col-start-1 col-end-3 rounded-[15px] flex pt-4 bg-zinc-700'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-3'>
                        <div className='flex gap-2 border-b '>
                            <div className='w-8 text-right border-b-2'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <TableDatabig />
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
                <div style={{ color: "white" }} className='row-start-2 row-end-5 col-start-5 col-end-6 rounded-[15px] flex justify-center items-center bg-zinc-700'>6</div>
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
                        <div className='flex gap-2 border-b'>
                            <div className='w-8 text-right border-b-2'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <TableDataSmall />
                    </div>
                </div>
                <div style={{ color: "white" }} className='row-start-4 row-end-5 col-start-2 col-end-3 rounded-[15px] flex pt-4 bg-indigo-500'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-3'>
                        <div className='border-b pl-2'>
                            Today
                        </div>
                        <TableDataSmall />
                    </div>
                </div>
                <div className='row-start-3 row-end-5 col-start-3 col-end-4 rounded-[15px] flex justify-center items-center bg-white	'>9</div>
                <div style={{ color: "white" }} className='row-start-3 row-end-4 col-start-4 col-end-5 rounded-[15px] flex pt-4 bg-zinc-700'>
                    <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-3'>
                        <div className='flex gap-2 border-b'>
                            <div className='w-8 text-right border-b-2'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <TableDataSmall />
                    </div>
                </div>
                <div className='row-start-4 row-end-5 col-start-4 col-end-5 rounded-[15px] flex justify-center items-center bg-white	'>11</div>
                <div className='row-start-3 row-end-5 col-start-6 col-end-7 rounded-[15px] flex justify-center items-center bg-white	'>12</div>
            </div>

        </div>
    );
};

export default Widget;
