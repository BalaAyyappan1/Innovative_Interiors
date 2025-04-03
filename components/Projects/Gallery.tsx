"use client";
import React, { useState } from 'react'
import GalleryImage1 from '@/public/Mask group(2).png'
import GalleryImage2 from '@/public/Mask group(3).png'
import GalleryImage3 from '@/public/Mask group(4).png'
import GalleryImage4 from '@/public/Mask group(5).png'
import GalleryImage5 from '@/public/Mask group(6).png'
import GalleryImage6 from '@/public/Mask group(7).png'
import Image from 'next/image'

const Gallery = () => {
    const [activeTitle, setActiveTitle] = useState<'Residental' | 'Hospitality' | 'Retail' | 'Healthcare' | 'Corporate Fit-outs' | 'Industrial'>('Residental')

    const title = [
        { title: 'Residental' },
        { title: 'Hospitality' },
        { title: 'Retail' },
        { title: 'Healthcare' },
        { title: 'Corporate Fit-outs' },
        { title: 'Industrial' }
    ]

    const imagesMap = {
        'Residental': [
            { image: GalleryImage1, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage2, title: 'ITC Vellore' },
            { image: GalleryImage3, title: 'Radisson Blu' },
            { image: GalleryImage1, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage2, title: 'ITC Vellore' },
            { image: GalleryImage3, title: 'Radisson Blu' },
            { image: GalleryImage1, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage2, title: 'ITC Vellore' },
            { image: GalleryImage3, title: 'Radisson Blu' }
        ],
        'Hospitality': [
            { image: GalleryImage4, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage5, title: 'ITC Vellore' },
            { image: GalleryImage6, title: 'Radisson Blu' },
            { image: GalleryImage4, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage5, title: 'ITC Vellore' },
            { image: GalleryImage6, title: 'Radisson Blu' },
            { image: GalleryImage4, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage5, title: 'ITC Vellore' },
            { image: GalleryImage6, title: 'Radisson Blu' }
        ],
        'Retail': [
            { image: GalleryImage1, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage4, title: 'ITC Vellore' },
            { image: GalleryImage5, title: 'Radisson Blu' },
            { image: GalleryImage1, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage4, title: 'ITC Vellore' },
            { image: GalleryImage5, title: 'Radisson Blu' },
            { image: GalleryImage1, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage4, title: 'ITC Vellore' },
            { image: GalleryImage5, title: 'Radisson Blu' }
        ],
        'Healthcare': [
            { image: GalleryImage2, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage3, title: 'ITC Vellore' },
            { image: GalleryImage6, title: 'Radisson Blu' },
            { image: GalleryImage2, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage3, title: 'ITC Vellore' },
            { image: GalleryImage6, title: 'Radisson Blu' },
            { image: GalleryImage2, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage3, title: 'ITC Vellore' },
            { image: GalleryImage6, title: 'Radisson Blu' }
        ],
        'Corporate Fit-outs': [
            { image: GalleryImage1, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage2, title: 'ITC Vellore' },
            { image: GalleryImage6, title: 'Radisson Blu' },
            { image: GalleryImage1, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage2, title: 'ITC Vellore' },
            { image: GalleryImage6, title: 'Radisson Blu' },
            { image: GalleryImage1, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage2, title: 'ITC Vellore' },
            { image: GalleryImage6, title: 'Radisson Blu' }
        ],
        'Industrial': [
            { image: GalleryImage3, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage4, title: 'ITC Vellore' },
            { image: GalleryImage5, title: 'Radisson Blu' },
            { image: GalleryImage3, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage4, title: 'ITC Vellore' },
            { image: GalleryImage5, title: 'Radisson Blu' },
            { image: GalleryImage3, title: 'GRT Hotels & Resorts' },
            { image: GalleryImage4, title: 'ITC Vellore' },
            { image: GalleryImage5, title: 'Radisson Blu' }
        ]
    }

    // Get images based on the active title
    const imagesToShow = imagesMap[activeTitle]

    return (
        <div>
            <div className='flex flex-row justify-between gap-4 w-full px-20 mb-[100px]'>
                {title.map((item, index) => (
                    <div key={index} className='flex flex-row gap-2'>
                        <h2 
                            className={`text-[24px] font-normal cursor-pointer ${activeTitle === item.title ? 'text-[#040444] font-semibold' : 'text-[#393535]'}`}
                            onClick={() => setActiveTitle(item.title as 'Residental' | 'Hospitality' | 'Retail' | 'Healthcare' | 'Corporate Fit-outs' | 'Industrial')}
                        >
                            {item.title}
                        </h2>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-3 gap-12 mt-4'>
                {imagesToShow.map((item, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <Image src={item.image} alt={`Gallery Image ${index + 1}`} layout='responsive' width={300} height={300} />
                        <p className='mt-2 font-semibold text-[#040444] text-[20px] text-center'>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery
