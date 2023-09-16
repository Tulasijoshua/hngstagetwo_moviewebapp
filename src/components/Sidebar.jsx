import React, { useRef } from 'react'
import './sidebar.css';
import { GoHome } from 'react-icons/go'
import { BiCameraMovie } from 'react-icons/bi'
import { MdOndemandVideo } from 'react-icons/md'
import { BsCalendar3 } from 'react-icons/bs'
import { IoLogOutOutline } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import tv from '../assets/commons/tv.png'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
  return (
    <div className='relative xl:w-[240px] lg:w-[200px] max-h-full'>
      <div onClick={showNavbar} className="w-fit nav-btn my-4 mx-[5px] text-3xl">
        <BiMenu />
      </div>
      <div ref={navRef} className='sideBar absolute top-0 left-0 bg-white xl:w-[240px] w-[270px] lg:w-[200px] max-h-full border rounded-r-[3rem] overflow-y-auto '>
        <div className='w-full py-[2rem] overflow-y-hidden '>
          <div className="mb-[1rem] flex justify-between items-center px-4 pt-4">
            <div className="flex justify-center items-center lg:gap-[1.5rem] xl:mb-[2rem] lg:mb-[1.5rem]">
              <div className="mr-3 w-[30px] xl:w-[30px] h-[30px] xl:h-[30px] lg:w-[25px] lg:h-[25px]">
                <img className="w-full h-full" src={tv} />
              </div>
              <div className="text-xl xl:text-lg lg:text-base font-semibold">MovieBox</div>
            </div>
            <div className="nav-btn text-xl mr-4" onClick={showNavbar}>
              <AiOutlineClose />
            </div>
          </div>
          <div className="mx-auto flex flex-col justify-center text-gray-600 mb-[2rem] xl:mb-[2rem] lg:mb-[1.5rem]">
            <NavLink to='/'>
              <div className="py-[1.5rem] xl:py-[1.5rem] lg:py-[1rem] px-[3rem] xl:px-[3rem] lg:px-[2rem] flex items-center justify-start gap-4 cursor-pointer hover:bg-red-200 hover:border-r-[0.3rem] border-red-900">
                <div className='h-full hover:text-black xl:text-xl lg:text-lg'>
                  <GoHome />
                </div>
                <div className="red-clr xl:text-lg lg:text-base capitalize font-semibold">home</div>
              </div>
            </NavLink>

            <div className="py-[1.5rem] xl:py-[1.5rem] lg:py-[1rem] px-[3rem] xl:px-[3rem] lg:px-[2rem] flex items-center justify-start gap-4 cursor-pointer hover:bg-red-200 hover:border-r-[0.3rem] border-red-900">
              <div className='xl:text-xl lg:text-lg'>
                <BiCameraMovie />
              </div>
              <div className="xl:text-lg lg:text-base capitalize font-semibold">movie</div>
            </div>
            <div className="py-[1.5rem] xl:py-[1.5rem] lg:py-[1rem] px-[3rem] xl:px-[3rem] lg:px-[2rem] flex items-center justify-start gap-4 cursor-pointer hover:bg-red-200 hover:border-r-[0.3rem] border-red-900">
              <div className='xl:text-xl lg:text-lg'>
                <MdOndemandVideo />
              </div>
              <div className="xl:text-lg lg:text-base capitalize font-semibold">TV series</div>
            </div>
            <div className="py-[1.5rem] xl:py-[1.5rem] lg:py-[1rem] px-[3rem] xl:px-[3rem] lg:px-[2rem] flex items-center justify-start gap-4 cursor-pointer hover:bg-red-200 hover:border-r-[0.3rem] border-red-900">
              <div className='xl:text-xl lg:text-lg'>
                <BsCalendar3 />
              </div>
              <div className="xl:text-lg lg:text-base capitalize font-semibold">upcoming</div>
            </div>
          </div>
          <div className='w-[80%] mx-auto my-5 p-2 xl:p-2 lg:p-3 bg-red-50 border border-red-400 rounded-lg'>
            <h3 className='mt-6 xl:mt-6 lg:mt-4 mb-2 text-base xl:text-base lg:text-sm font-semibold text-gray-700'>Play movie quizzes and earn <br /> free ticket</h3>
            <p className="mb-3 xl:mb-3 lg:mb-2 xl:text-sm lg:text-xs text-gray-600 font-semibold">50k people are playing now</p>
            <div className='w-[70%] xl:w-[70%] lg:w-[90%] mx-auto'>
              <button className="px-3 xl:px-3 lg:px-[12px] py-[4px] bg-red-200 rounded-2xl xl:text-sm lg:text-xs font-semibold text-red-700">start playing</button>
            </div>
          </div>
          <NavLink to='/'>
            <div className="mt-4 mb-3  flex items-center justify-center text-gray-600 font-semibold cursor-pointer">
              <div className="text-xl mr-3">
                <IoLogOutOutline />
              </div>
              <div className="xl:text-lg lg:text-base">Log out</div>
            </div>
          </NavLink>
        </div>
      </div >
    </div>
  )
}

export default Sidebar