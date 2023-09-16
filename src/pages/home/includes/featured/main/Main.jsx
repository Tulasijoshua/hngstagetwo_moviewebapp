import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import mainImg from '../../../items/Poster.jpg'
import tv from '../../../../../assets/commons/tv.png'
import imdb from '../../../../../assets/commons/imdb.png'
import apple from '../../../../../assets/commons/pinapple.png'
import Button from '../../../../../components/Button'
import watch from '../../../../../assets/commons/watch.png'
// import { useFilterContext } from '../../../../../context/filterContext';

const Main = () => {
    // const { filters: {text}, getSearchMovie } = useFilterContext()
    return (
        <div className='w-full  relative text-white md:mb-[4rem] mb-[3rem] '>
            <div className='w-full xl:h-[600px] lg:h-[500px] md:h-[450px] sm:h-[400px] h-[320px]'>
                <img className='w-full h-full object-cover' src={mainImg} />
            </div>
            <div className='w-full my-4 absolute top-0 left-0'>
                <nav className='w-[85%] mx-auto sm:flex justify-between items-center hidden'>
                    <div className='flex items-center'>
                        <div className="xl:w-[35px] md:w-[30px] sm:w-[25px] xl:h-[35px] md:h-[30px] sm:h-[25px] mr-4">
                            <img className="w-full h-full" src={tv} />
                        </div>
                        <div className='xl:text-xl md:text-lg sm:text-sm font-semibold'>MovieBox</div>
                    </div>
                    <div className='xl:w-[500px] lg:w-[350px] md:w-[300px] sm:w-[250px] relative'>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input className="w-full bg-transparent border-2 rounded xl:py-[4px] sm:py-[2px] px-2 xl:text-base lg:text-sm sm:text-xs text-white lg:font-semibold sm:font-normal outline-[none]"
                                type="text"
                                // name='text' value={text} onChange={getSearchMovie}
                                placeholder="What do you want to watch?"
                            />
                        </form>

                        <div className="absolute lg:top-2 md:top-[6px] top-[5px] md:right-2 sm:right-2 ">
                            <BiSearch className="xl:text-xl md:text-base" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="xl:text-lg md:text-base sm:text-sm mr-5">
                            sign in
                        </div>
                        <div className="xl:w-[35px] xl:h-[35px] md:w-[30px] sm:w-[25px] md:h-[30px] sm:h-[25px] relative rounded-full bg-red-600">
                            <HiMenuAlt4 className="absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] font-extrabold xl:text-2xl md:text-base sm:text-sm" />
                        </div>
                    </div>
                </nav>
                <nav className='w-[85%] mx-auto mb-3 justify-between items-center sm:hidden block'>
                    <div className="w-full flex justify-between xs:mb-[1rem] mb-[.7rem]">
                        <div className='flex items-center'>
                            <div className="w-[25px] h-[25px] xs:mr-4 mr-2">
                                <img className="w-full h-full" src={tv} />
                            </div>
                            <div className='xs:text-base text-sm font-semibold'>MovieBox</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className=" xs:text-lg text-sm mr-3">
                                sign in
                            </div>
                            <div className=" w-[25px] h-[25px] relative rounded-full bg-red-600">
                                <HiMenuAlt4 className="absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] font-extrabold xl:text-2xl md:text-base sm:text-sm" />
                            </div>
                        </div>
                    </div>
                    <div className='xs:w-[60%] w-[70%] mx-auto relative'>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input className="w-full bg-transparent border-2 rounded py-[2px] px-4 xs:text-xs text-[10px] text-white font-normal outline-[none]"
                                type="text"
                                // name='text' value={text} onChange={getSearchMovie}
                                placeholder="What do you want to watch?"
                            />
                        </form>

                        <div className="absolute top-[7px] right-2 ">
                            <BiSearch className="text-sm" />
                        </div>
                    </div>

                </nav>
                <div className='w-[85%] mx-auto lg:my-[6.5rem] md:my-[4.5rem] sm:my-[3rem] xs:my-[2rem] my-[1.1rem]'>
                    <div className="xl:w-[35%] lg:w-[40%] md:w-[45%] sm:w-[60%] xs:w-[75%]w-[80%]">
                        <div className='sm:mb-5 mb-3'>
                            <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg font-semibold capitalize sm:tracking-wide sm:leading-loose leading-tight">John wick 3 : <br /> parabellum</h2>
                        </div>
                        <div>
                            <div className="flex items-center md:mb-4 sm:mb-3 mb-2">
                                <div className="flex justify-center items-center mr-8">
                                    <div className='md:w-[] md:h-[] sm:w-[25px] sm:h-[15px] w-[20px] h-[10px] sm:mr-4 mr-2'>
                                        <img className='w-full h-full object-cover' src={imdb} />
                                    </div>
                                    <div className="xl:text-base md:text-sm xs:text-xs text-[10px]"><p>86.0/100</p> </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className='w-[10px] sm:w-[15px] sm:h-[20px] h-[12px] sm:mr-4 mr-2'>
                                        <img className="w-full h-full" src={apple} />
                                    </div>
                                    <div className="xl:text-base md:text-sm xs:text-xs text-[10px]"><p>86.0/100</p> </div>
                                </div>

                            </div>
                            <div className="lg:text-sm sm:text-xs text-[9px] mr-4 xl:mb-4 sm:mb-6 xs:mb-4 mb-4 leading-normal text-gray-100">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil sit nobis? Aspernatur
                                    dolorem nostrum impedit, maiores tempora magnam repudiandae! Iure obcaecati expedita
                                    voluptatum, itaque labore corrupti aliquid.
                                </p>
                            </div>
                            <div >
                                <Button
                                    text="Watch trailer"
                                    image={watch}
                                    backgroundColor="#BE123C"
                                    textTransform="uppercase"
                                />
                            </div>
                            <div></div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main