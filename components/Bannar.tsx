import React from 'react'

const Bannar = ({ pageTitle ,subtitle }: any) => {
    return (
        <div className='h-100' id='bannarPages'>
            <div className='bg-[#4c34ff4f] h-full flex gap-2 flex-col justify-center items-center'>
                <h4 className='text-white text-2xl font-bold'>{pageTitle}</h4>
                <div className='bg-primary py-2 px-6 rounded-2xl text-white'><span className="">Home</span>
                    <span className="mx-2">&gt;</span>
                    <span className="opacity-80">{subtitle}</span></div>
            </div>

        </div>
    )
}

export default Bannar
