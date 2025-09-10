import React from 'react'

const Boxes = ({label, value}) => {
    return (
        <div className="boxes">
                <div className="box">
                    <span className='text-blue-500 text-[18px] block mb-3'>{value}</span>
                    <p className='text-[20px]'>{label}</p>
                </div>
        </div>
    )
}

export default Boxes