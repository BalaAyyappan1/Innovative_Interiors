import React from 'react'
import { TowerImage } from '../ReusableComponenets/Icons';
import Image from 'next/image';
const Tower = () => {
  return (
    <div>
    <div
      className="flex-col"
      style={{
        backgroundImage: `url(${TowerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', // Adjust the height of the container as needed
        borderRadius: '22px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="h-[146px] rounded-[22px] shadow-lg" />
      <div className="font-semibold text-[14px] text-[#040444]">
        01 CNC Precision Cutting
        <span className="text-[#393535]">
          {' '}
          Ensuring exact specifications and seamless assembly
        </span>
      </div>

      <div className="h-[146px] rounded-[22px] shadow-lg" />
      <div className="font-semibold text-[14px] text-[#040444]">
        01 CNC Precision Cutting
        <span className="text-[#393535]">
          {' '}
          Ensuring exact specifications and seamless assembly
        </span>
      </div>

      <div className="h-[146px] rounded-[22px] shadow-lg" />
      <div className="font-semibold text-[14px] text-[#040444]">
        01 CNC Precision Cutting
        <span className="text-[#393535]">
          {' '}
          Ensuring exact specifications and seamless assembly
        </span>
      </div>

      <div className="h-[146px] rounded-[22px] bg-transparent shadow-lg" />
      <div className="font-semibold text-[14px] text-[#040444]">
        01 CNC Precision Cutting
        <span className="text-[#393535]">
          {' '}
          Ensuring exact specifications and seamless assembly
        </span>
      </div>
    </div>
  </div>
  )
}

export default Tower;
