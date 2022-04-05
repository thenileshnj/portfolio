import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaWordpress, FaGit, FaAws } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { FcLinux } from 'react-icons/fc';

const Tech = () => {
  return (
    <div className='mx-auto py-5'>
        <div className='flex font-extrabold text-2xl justify-center'>
            <p>Tech I Use  👨‍💻</p>
        </div>
        <div className='flex flex-wrap items-center justify-center mt-4'>
            <div className='flex m-4 items-center bg-white p-6 font-extrabold text-5xl shadow-xl rounded-xl'>
                <FaNodeJs color='#3C873A'/>
            </div>
            <div className='flex m-4 items-center bg-white p-6 font-extrabold text-5xl shadow-xl rounded-xl'>
                <FaReact color='#3C873A'/>
            </div>
            <div className='flex m-4 items-center bg-white p-6 font-extrabold text-5xl shadow-xl rounded-xl'>
                <SiFirebase color='#F5820D'/>
            </div>
            <div className='flex m-4 items-center bg-white p-6 font-extrabold text-5xl shadow-xl rounded-xl'>
                <FaPython color='#4584b6'/>
            </div>
            <div className='flex m-4 items-center bg-white p-6 font-extrabold text-5xl shadow-xl rounded-xl'>
                <FaWordpress color='#21759b' />
            </div>
            <div className='flex m-4 items-center bg-white p-6 font-extrabold text-5xl shadow-xl rounded-xl'>
                <FaGit color="#171515" />
            </div>
            <div className='flex m-4 items-center bg-white p-6 font-extrabold text-5xl shadow-xl rounded-xl'>
                <FaAws color="#FF9900" />
            </div>
            <div className='flex m-4 items-center bg-white p-6 font-extrabold text-5xl shadow-xl rounded-xl'>
                <FcLinux />
            </div>
            
        </div>
    </div>
  )
}

export default Tech;