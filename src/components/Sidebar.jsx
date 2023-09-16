import React from 'react'
import { GoHome } from 'react-icons/go'
import { BiCameraMovie } from 'react-icons/bi'
import { MdOndemandVideo } from 'react-icons/md'
import { BsCalendar3 } from 'react-icons/bs'
import { IoLogOutOutline } from 'react-icons/io5'
import tv from '../assets/commons/tv.png'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[240px] max-h-full border rounded-r-[3rem]'>
      <div className='w-full py-[2rem]'>
        <div className="flex justify-center items-center gap-[1.5rem] mb-[2rem]">
          <div className="w-[30px] h-[30px]">
            <img className="w-full h-full" src={tv} />
          </div>
          <div className="text-lg font-semibold">MovieBox</div>
        </div>
        <div className="mx-auto flex flex-col justify-center text-gray-600 mb-[2rem]">
          <NavLink to='/'>
            <div className="py-[1.5rem] px-[3rem] flex items-center justify-start gap-4 cursor-pointer hover:bg-red-200 hover:border-r-[0.3rem] border-red-900">
              <div className='h-full hover:text-black text-xl'>
                <GoHome />
              </div>
              <div className="red-clr text-lg capitalize font-semibold">home</div>
            </div>
          </NavLink>

          <div className="py-[1.5rem] px-[3rem] flex items-center justify-start gap-4 cursor-pointer hover:bg-red-200 hover:border-r-[0.3rem] border-red-900">
            <div className='text-xl'>
              <BiCameraMovie />
            </div>
            <div className="text-lg capitalize font-semibold">movie</div>
          </div>
          <div className="py-[1.5rem] px-[3rem] flex items-center justify-start gap-4 cursor-pointer hover:bg-red-200 hover:border-r-[0.3rem] border-red-900">
            <div className='text-xl'>
              <MdOndemandVideo />
            </div>
            <div className="text-lg capitalize font-semibold">TV series</div>
          </div>
          <div className="py-[1.5rem] px-[3rem] flex items-center justify-start gap-4 cursor-pointer hover:bg-red-200 hover:border-r-[0.3rem] border-red-900">
            <div className='text-xl'>
              <BsCalendar3 />
            </div>
            <div className="text-lg capitalize font-semibold">upcoming</div>
          </div>
        </div>
        <div className='w-[80%] mx-auto my-5 p-2 bg-red-50 border border-red-400 rounded-lg'>
          <h3 className='mt-6 mb-2 text-base font-semibold text-gray-700'>Play movie quizzes and earn <br /> free ticket</h3>
          <p className="mb-3 text-sm text-gray-600 font-semibold">50k people are playing now</p>
          <div className='w-[70%] mx-auto'>
            <button className="px-3 py-[4px] bg-red-200 rounded-2xl text-sm font-semibold text-red-700">start playing</button>
          </div>
        </div>
        <NavLink to='/'>
        <div className="mt-4 mb-3  flex items-center justify-center text-gray-600 font-semibold cursor-pointer">
          <div className="text-xl mr-3">
            <IoLogOutOutline />
          </div>
          <div className="text-lg">Log out</div>
        </div>
      </NavLink>
    </div>
    </div >
  )
}

export default Sidebar