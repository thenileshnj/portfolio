import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className='flex mx-auto justify-center pt-16 mb-5'>
        <div className='rounded-3xl px-14 py-5 md:px-24 md:py-8 shadow-xl bg-white'>
            <div className='flex justify-center items-center'>
                <img src="avatar.svg" alt="Nilesh Nj Profile" />
            </div>
            <div className='text-center mt-4'>
                <p className='font-extrabold text-2xl'>Nilesh Nj</p>
            </div>
            <div className='text-center pb-2 mt-4 border-b-4 border-purple-800'>
                <p className='font-semibold text-base'>Full Stack Developer && Designer </p>
            </div>
            <div className='flex justify-center mb-2 mt-5'>
                <div className='flex items-center text-xl text-white rounded-full mx-2 p-2 bg-purple-800'>
                    <a href="https://www.linkedin.com/in/thenileshnj/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn/>
                    </a>
                </div>
                <div className='flex items-center text-xl text-white rounded-full mx-2 p-2 bg-purple-800'>
                <a href="https://github.com/thenileshnj" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                    </a>
                </div>
                <div className='flex items-center text-xl text-white rounded-full mx-2 p-2 bg-purple-800'>
                <a href="https://www.instagram.com/thenileshnj/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                    </a>
                </div>
                <div className='flex items-center text-xl text-white rounded-full mx-2 p-2 bg-purple-800'>
                <a href="https://www.facebook.com/thenileshnj" target="_blank" rel="noopener noreferrer">
                    <FaFacebook/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard;