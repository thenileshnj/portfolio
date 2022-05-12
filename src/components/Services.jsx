import React from 'react';
import { MdOutlineWeb } from 'react-icons/md';
import { FcTabletAndroid } from 'react-icons/fc';
import { AiFillApi } from 'react-icons/ai';
import { SiAntdesign, SiGooglesearchconsole } from 'react-icons/si';
import { GrWorkshop } from 'react-icons/gr';
import { BsWordpress } from 'react-icons/bs';

const Services = () => {
  return (
    <div className='mx-auto py-5 lg:w-10/12'>
       <div className='flex font-extrabold text-2xl justify-center'>
            <p> My Services  👨‍💻</p>
        </div>
        <div className='flex flex-wrap items-center justify-center mt-4'>
            <div className='flex flex-col m-12 items-center bg-white p-6 shadow-xl rounded-xl'>
                <div className='font-extrabold text-5xl'>
                  <MdOutlineWeb  color='#AA14F0'/>
                </div>
                <h3 className='font-semibold text-lg'>Web Devlopement</h3>
            </div>
            <div className='flex flex-col m-12 items-center bg-white p-6 shadow-xl rounded-xl'>
                <div className='font-extrabold text-5xl'>
                  <FcTabletAndroid  color='#AA14F0'/>
                </div>
                <h3 className='font-semibold text-lg'>APP Devlopement</h3>
            </div>
            <div className='flex flex-col m-12 items-center bg-white p-6 shadow-xl rounded-xl'>
                <div className='font-extrabold text-5xl'>
                  <AiFillApi  color='#AA14F0'/>
                </div>
                <h3 className='font-semibold text-lg'>API Devlopement</h3>
            </div>
            <div className='flex flex-col m-12 items-center bg-white p-6 shadow-xl rounded-xl'>
                <div className='font-extrabold text-5xl'>
                  <MdOutlineWeb  color='#AA14F0'/>
                </div>
                <h3 className='font-semibold text-lg'>UI/UX Designing</h3>
            </div>
            <div className='flex flex-col m-12 items-center bg-white p-6 shadow-xl rounded-xl'>
                <div className='font-extrabold text-5xl'>
                  <SiAntdesign  color='#AA14F0'/>
                </div>
                <h3 className='font-semibold text-lg'>Graphics Designing</h3>
            </div>
            <div className='flex flex-col m-12 items-center bg-white p-6 shadow-xl rounded-xl'>
                <div className='font-extrabold text-5xl'>
                  <GrWorkshop  color='#AA14F0'/>
                </div>
                <h3 className='font-semibold text-lg'>Digital Marketing</h3>
            </div>
            <div className='flex flex-col m-12 items-center bg-white p-6 shadow-xl rounded-xl'>
                <div className='font-extrabold text-5xl'>
                  <BsWordpress  color='#AA14F0'/>
                </div>
                <h3 className='font-semibold text-lg'>WordPress Devlopement</h3>
            </div>
            <div className='flex flex-col m-12 items-center bg-white p-6 shadow-xl rounded-xl'>
                <div className='font-extrabold text-5xl'>
                  <SiGooglesearchconsole  color='#AA14F0'/>
                </div>
                <h3 className='font-semibold text-lg'>SEO & SEM</h3>
            </div>
        </div>
    </div>
  )
}

export default Services;