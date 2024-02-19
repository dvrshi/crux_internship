import React from 'react';

const Widget = () => {
    return (
        <div>
            <div className='grid grid-cols-6 grid-rows-4 gap-4 p-4 '>
            <div className='row-start-1 row-end-2 col-start-2 col-end-3 rounded-[15px]'>hello</div>
            <div className='row-start-1 row-end-2 col-start-1 col-end-2 rounded-[15px]'>hello</div>
            <div className='row-start-1 row-end-2 col-start-3 col-end-7 rounded-[15px]'>hello</div>
            <div className='row-start-2 row-end-4 col-start-1 col-end-3 rounded-[15px]'>hello</div>
            <div className='row-start-2 row-end-3 col-start-3 col-end-5 rounded-[15px]'>hello</div>
            <div className='row-start-2 row-end-5 col-start-5 col-end-6 rounded-[15px]'>hello</div>
            <div className='row-start-2 row-end-3 col-start-6 col-end-7 rounded-[15px]'>hello</div>
            <div className='row-start-4 row-end-5 col-start-1 col-end-2 rounded-[15px]'>hello</div>
            <div className='row-start-4 row-end-5 col-start-2 col-end-3 rounded-[15px]'>hello</div>
            <div className='row-start-3 row-end-5 col-start-3 col-end-4 rounded-[15px]'>hello</div>
            <div className='row-start-3 row-end-4 col-start-4 col-end-5 rounded-[15px]'>hello</div>
            <div className='row-start-4 row-end-5 col-start-4 col-end-5 rounded-[15px]'>hello</div>
            <div className='row-start-3 row-end-5 col-start-6 col-end-7 rounded-[15px]'>hello</div>
            </div>

        </div>
    );
};

export default Widget;
