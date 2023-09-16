import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import showTimes from '../../../../../assets/commons/showtimes.png'
import mj2 from '../../../../../assets/jeans/mj-2.jpg'
import options from '../../../../../assets/commons/options.png'
import whiteOption from '../../../../../assets/commons/WhiteOptions.png'
import movie from '../../../../../assets/jeans/mj-1.jpg'
import Button from '../../../../../components/Button'
import { useMovieContext } from '../../../../../context/movieContext'
import MovieTrailer from './MovieTrailer'

const Details = ({ data }) => {
    // const {singleMovie} = useMovieContext
    const { title, poster_path, release_date, runtime, overview, genres} = data;

    // const fullTime = runtime.toString();
    // const hrTime = fullTime.slice(0, 1);
    // const minTime = fullTime.slice(1, 3);
    // const popular = popularity.toString();
    // const getPopular = popular.slice(0, 3);

    console.log(data)
    return (
        <div>
            <MovieTrailer data={data} />
            <div>
                <div className="w-full flex justify-between items-center">
                    <div className="">
                        <div className="mr-2 flex items-center text-xl text-gray-700 font-medium">
                            <div className="mr-4 capitalize">top gun: {title}</div>
                            <ul className="ml-6 flex justify-center items-center ">
                                <li className="list-disc pr-5 mr-4">{release_date}</li>
                                <li className="list-disc pr-5 mr-4 uppercase">pg-13</li>
                                <li className="list-disc pr-2">
                                    {/* {hrTime}h {minTime}m */}
                                </li>
                            </ul>
                            <div className="flex items-center justify-center text-[15px]  text-red-900">
                                <button className="py-[2px] px-[8px] rounded-xl text-bold border mr-2">Action</button>
                                <button className="py-[2px] px-[8px] rounded-xl  border">Drama</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">
                            <AiFillStar className="text-yellow-400 text-2xl" />
                        </div>
                        <div className="mr-2 text-xl text-gray-300 font-semibold">8.5</div>
                        <div className="w-[2.5px] h-[13px] bg-gray-700 mr-2"></div>
                        <div className="text-base">
                            <p>350k</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className='w-[65%] my-[1rem]'>
                        <div className="mb-[1rem]">
                            <p>
                                {overview}
                            </p>
                        </div>
                        <div className='mb-4'>
                            <div className="py-[1rem] flex justify-start items-center font-semibold text-base border-t border-gray-100">
                                <div className="text-gray-600 mr-2">Director :  </div><div className="text-red-700"> Joseph Kosinski</div>
                            </div>
                            <div className="py-[1rem] flex justify-start items-center font-semibold text-base border-t border-gray-100">
                                <div className="text-gray-600 mr-2">Writers :  </div><div className="text-red-700"> Jim Cash, Jack Epps Jr,  Peter Craig</div>
                            </div>
                            <div className="py-[1rem] flex justify-start items-center font-semibold text-base border-y border-gray-100">
                                <div className="text-gray-600 mr-2">Stars :  </div><div className="text-red-700"> Tom Cruise, Jennifer Connelly, Miles Teller</div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center border-[3px] border-gray-200 rounded-lg">
                            <div className="flex justify-center items-center text-white">
                                <Button
                                    text="Top rated movie #65"
                                    backgroundColor="#BE123C"
                                />
                                <div className="font-medium text-gray-600 pl-4 ">Awards 9 nominations</div>
                            </div>
                            <div className="mr-4 text-gray-500">
                                <BsChevronDown />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-[360px] mx-auto">
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
                                        <img className='w-full h-full' src={mj2} />
                                    </div>
                                    <div className='w-1/3 h-full mr-1'>
                                        <img className='w-full h-full' src={mj2} />
                                    </div>
                                    <div className='w-1/3 h-full'>
                                        <img className='w-full h-full' src={mj2} />
                                    </div>
                                </div>
                                <div className="w-full px-2 py-1 absolute bottom-0 left-0 flex justify-between bg-black opacity-[0.4]  overflow-hidden">
                                    <div className="w-[20px] h-[20px]">
                                        <img className="w-full h-full object-cover" src={whiteOption} />
                                    </div>
                                    <div className="text-sm text-white">The Best Movies and Shows in September</div>
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