import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full my-[3.5rem] bg-white">
        <div className="w-[85%] mx-auto">
            <div className='flex justify-center items-center gap-[2.5rem] text-2xl mb-[2rem]'>
                <div>
                    <FaFacebookSquare />
                </div>
                <div>
                    <FaInstagram />
                </div>
                <div>
                    <FaTwitter />
                </div>
                <div>
                    <FaYoutube />
                </div>
            </div>
            <div className="flex justify-center items-center gap-[2.5rem] text-lg font-bold text-gray-900 mb-[1.5rem]">
                <p>Condition of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <div className="text-center font-bold text-gray-500 text-lg">
                <p>© 2023 MovieBox by Adriana Eka Prayudha  </p>
            </div>
        </div>
    </div>
  )
}

export default Footer