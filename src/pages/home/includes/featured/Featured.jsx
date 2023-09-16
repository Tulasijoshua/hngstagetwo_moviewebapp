import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import MovieCard from './includes/MovieCard'
import { useMovieContext } from '../../../../context/movieContext'


const Featured = () => {
    const { movies } = useMovieContext();
    // console.log(movies);
    return (
        <div className='lg:w-[85%] sm:w-[90%] mx-auto'>
            <div className='w-full flex justify-between items-center md:mb-[3rem] sm:mb-[1.7rem]'>
                <h2 className="md:text-[1.8rem] sm:text-[1.4rem] font-[600] capitalize">featured movie</h2>
                <div className='flex items-center justify-center font-semibold text-red-600'>
                    <div className="md:text-lg sm:text-base pr-3">See more</div>
                    <FiChevronRight />
                </div>
            </div>
            <div className='w-full mb-[2rem] flex xl:justify-between md:justify-around sm:justify-between  items-start xl:gap-[4rem] lg:gap-[2rem] gap-[2rem] flex-wrap'>
                {movies.map((curElem, index) => {
                    return <MovieCard key={index} data={curElem} />
                })}
                
            </div>
        </div>
    )
}

export default Featured