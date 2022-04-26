import React from 'react';
import { FaLinkedin, FaMailBulk, FaWhatsapp, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <div className='bg-purple-700 pt-20 pb-10 mx-auto'>
        <div className='flex items-center justify-center text-2xl font-extrabold text-white pb-4'>
          <p>Get in Touch with ME 🤝</p>
        </div>
        <div className='flex items-center justify-center text-lg font-bold text-white pb-4'>
          <p>Hey, Want to Hire me or Discus about any Project </p>
        </div>
        <div className='flex mx-auto mb-5'>
          <div className='flex px-12 py-12 mx-auto justify-center font-bold bg-black text-white rounded-3xl shadow-2xl shadow-black'>
            <div className='flex justify-center border-2 p-4 rounded-xl'>
              <div className='mr-4 items-center'>nileshbjadhawar@gmail.com</div>
              <div className='bg-yellow-500 rounded-3xl p-2 font-extrabold'>
                <a target="_blank" href="mailto:nileshbjadhawar@gmail.com">
                <FaMailBulk className='font-extrabold'/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center text-white font-bold mb-5'>
          <p>OR</p>
        </div>

        <div className='flex mx-auto mb-5'>
          <div className='flex px-12 py-12 mx-auto justify-center font-bold bg-black text-white rounded-3xl shadow-2xl shadow-black'>
            <div className='flex justify-center border-2 p-4 rounded-xl'>
              <div className='mr-4 items-center'>+91 8308885149</div>
              <div className='bg-yellow-500 font-extrabold rounded-3xl p-2'>
                <a target="_blank" href="https://wa.me/message/Y37N46MVEZIZC1">
                <FaWhatsapp/>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className='flex justify-center mx-auto my-5 pt-5'>
          <div className='mx-2 p-2 items-center border-4 border-white rounded-full text-2xl text-white hover:border-black hover:text-black duration-700'>
            <a target="_blank" href="https://www.linkedin.com/in/thenileshnj">
            <FaLinkedin/>
            </a>
          </div>
          <div className='mx-2 p-2 items-center border-4 border-white rounded-full text-2xl text-white hover:border-black hover:text-black duration-700'>
            <a target="_blank" href="https://www.instagram.com/thenileshnj/">
            <FaInstagram/>
            </a>
          </div>
          <div className='mx-2 p-2 items-center border-4 border-white rounded-full text-2xl text-white hover:border-black hover:text-black duration-700'>
            <a target="_blank" href="https://github.com/thenileshnj">
            <FaGithub/>
            </a>
          </div>
          <div className=' mx-2 p-2 items-center border-4 border-white rounded-full text-2xl text-white hover:border-black hover:text-black duration-700'>
            <a target="_blank" href="https://www.facebook.com/thenileshnj">
            <FaFacebook/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;