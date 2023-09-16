import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import showTimes from '../../../../../assets/commons/showtimes.png'
import mj1 from '../../../../../assets/jeans/mj-2.jpg'
import mj2 from '../../../../../assets/jeans/mj-2.jpg'
import mj3 from '../../../../../assets/jeans/mj-2.jpg'
import options from '../../../../../assets/commons/options.png'
import whiteOption from '../../../../../assets/commons/WhiteOptions.png'
import Button from '../../../../../components/Button'
import MovieTrailer from './MovieTrailer'

const Details = ({ data }) => {
    const { title, poster_path, release_date, runtime, overview, genres } = data;


    return (
        <div className="w-full">

            <MovieTrailer data={data} />
            <div className="w-[95%] mx-auto">
                <div className="w-full flex lg:flex-row flex-col lg:justify-between sm:items-start lg:items-center md:gap-1 gap-2">

                    <div className="xl:mr-2 lg:mr-[10px] flex xs:flex-row flex-col xs:justify-center xs:items-center items-start xl:text-xl lg:text-sm md:text-xs sm:text-sm xs:text-sm text-base text-gray-700 font-medium">
                        <div className="flex sm:flex-row sm:justify-center justify-start sm:gap-0 gap-5 sm:items-center items-start">
                            <div data-testid='movie-title' className="xl:mr-4 sm:mr-3 mr-2 capitalize">top gun: {title}</div>
                            <ul className="xl:ml-6 sm:ml-3 ml-2 mt-2 flex justify-center items-center ">
                                <li data-testid='movie-release-date' className="sm:list-disc sm:pr-5 mr-4">
                                    {release_date}
                                    
                                </li>
                                <li className="sm:list-disc sm:pr-5 mr-4 uppercase">pg-13</li>
                                <li data-testid='movie-runtime' className="sm:list-disc pr-2">
                                    {runtime}<span>mins</span>
    
                                </li>
                            </ul>
                            <div className="md:flex hidden items-center justify-center xl:text-[15px] sm:text-[12px]  text-red-900">
                                <button className="xl:py-[2px] lg:py-[1px] xl:px-[8px] sm:px-[6px] rounded-xl text-bold border mr-2">Action</button>
                                <button className="xl:py-[2px] lg:py-[1px] xl:px-[8px] sm:px-[6px] rounded-xl  border">Drama</button>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">
                            <AiFillStar className="text-yellow-400 xl:text-2xl text-xl" />
                        </div>
                        <div className="mr-2 xl:text-xl sm:text-lg text-sm text-gray-300 font-semibold">8.5</div>
                        <div className="lg:w-[2.5px] sm:w-[2px] w-[2px] lg:h-[13px] sm:h-[10px] h-[12px] bg-gray-700 mr-2"></div>
                        <div className="xl:text-base text-sm">
                            <p>350k</p>
                        </div>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col items-start sm:mt-[1.5rem] mt-[0.5rem]">
                    <div className='sm:w-[65%] w-[95%] my-[1rem] mr-4'>
                        <div className="mb-[1rem]">
                            <p data-testid='movie-overview' className='xl:text-lg sm:text-sm xs:text-sm text-xs'>
                                {overview}
                            </p>
                        </div>
                        <div className='mb-4'>
                            <div className="xl:py-[1rem] sm:py-[0.5rem] py-[0.5rem] flex xs:flex-row flex-col justify-start items-center font-semibold xl:text-base sm:text-sm text-sm border-t border-gray-100">
                                <div className="text-gray-600 mr-2">Director :  </div><div className="text-red-700"> Joseph Kosinski</div>
                            </div>
                            <div className="xl:py-[1rem] sm:py-[0.5rem] py-[0.5rem] flex xs:flex-row flex-col justify-start items-center font-semibold xl:text-base md:text-sm sm:text-xs text-sm  border-t border-gray-100">
                                <div className="text-gray-600 mr-2">Writers :  </div><div className="text-red-700"> Jim Cash, Jack Epps Jr,  Peter Craig</div>
                            </div>
                            <div className="xl:py-[1rem] sm:py-[0.5rem] py-[0.5rem] flex xs:flex-row flex-col justify-start items-center font-semibold xl:text-base md:text-sm sm:text-xs text-sm  border-y border-gray-100">
                                <div className="text-gray-600 mr-2">Stars :  </div><div className="text-red-700"> Tom Cruise, Jennifer Connelly, Miles Teller</div>
                            </div>
                        </div>
                        <div className="w-full  flex justify-start xs:flex-row flex-col items-center text-white">
                            <div className='w-fit mt-1'>
                                <Button
                                    text="Top rated movie #65"
                                    backgroundColor="#BE123C"
                                    width='100%'
                                />

                            </div>
                            <div className="flex-1 xs:mt-1 mt-[1rem] flex justify-between items-center xs:py-[5px] py-[8px] px-2 xs:border-y-[3px] xs:border-r-[3px] border-[3px] border-gray-200 xs:rounded-r-lg rounded-lg">
                                <div className="xl:text-base lg:text-sm md:text-xs sm:text-xs xs:text-[8px] text-[8px] font-medium text-gray-600 pl-4 mr-[2rem] ">Awards 9 nominations</div>
                                <div className="mr-4 text-gray-500">
                                    <BsChevronDown />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex-1 ">
                        <div className="w-full my-[1rem]">
                            <div className='w-full mb-[1rem] text-base text-white font-medium text-uppercase'>
                                <Button
                                    text="See Showtimes"
                                    image={showTimes}
                                    backgroundColor="#BE123C"
                                    width="100%"
                                />
                            </div>
                            <div className='w-full text-sm mb-[1.5rem]'>
                                <Button
                                    text="More watch options"
                                    image={options}
                                    backgroundColor="#FEF2F2"
                                    width="100%"
                                    border="1px solid #BE123C"
                                />
                            </div>
                            <div className="relative">
                                <div className="w-full h-full flex rounded-lg overflow-hidden">
                                    <div className='w-1/3 h-full mr-1'>
                                        <img className='w-full h-full' src={mj1} />
                                    </div>
                                    <div className='w-1/3 h-full mr-1'>
                                        <img className='w-full h-full' src={mj2} />
                                    </div>
                                    <div className='w-1/3 h-full'>
                                        <img className='w-full h-full' src={mj3} />
                                    </div>
                                </div>
                                <div className="w-full px-2 py-1 absolute bottom-0 left-0 flex justify-between bg-black opacity-[0.4]  overflow-hidden">
                                    <div className="w-[20px] h-[20px]">
                                        <img className="w-full h-full object-cover" src={whiteOption} />
                                    </div>
                                    <div className="xs:text-sm text-[10px] text-white">The Best Movies and Shows in September</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details