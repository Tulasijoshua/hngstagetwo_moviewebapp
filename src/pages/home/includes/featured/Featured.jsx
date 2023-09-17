import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import MovieCard from './includes/MovieCard'
import { useMovieContext } from '../../../../context/movieContext'


const Featured = () => {
    const { movies, search, isLoading, isError } = useMovieContext();
    
    
    const filters = movies.filter((item) => {
        return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
    })

    if (isLoading) {
        return <div className='text-center text-4xl font-bold'> 
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
         </div>
    }

    if (isError) {
        console.log("error occured")
        return <div className='text-center text-4xl font-bold'> 
            404!! 
            <div className='my-[3rem] text-2xl'>An error occured</div>  </div>
    }
    // console.log(movies);
    return (
        <div className='lg:w-[85%] sm:w-[90%] w-[80%] mx-auto'>
            <div className='w-full flex justify-between items-center md:mb-[3rem] sm:mb-[1.7rem] mb-[1.4rem]'>
                <h2 className="md:text-[1.8rem] sm:text-[1.4rem] xs:text-[1.1rem] text-[.9rem] font-[600] capitalize">featured movie</h2>
                <div className='flex items-center justify-center font-semibold text-red-600'>
                    <div className="md:text-lg sm:text-base xs:text-sm text-xs xs:pr-3 pr-2">See more</div>
                    <FiChevronRight className='sm:text-base text-sm' />
                </div>
            </div>
            <div className='w-full mb-[2rem] flex sm:flex-row flex-col xl:justify-between md:justify-around sm:justify-between justify-center  sm:items-start items-center xl:gap-[4rem] lg:gap-[2rem] sm:gap-[2rem] flex-wrap'>
                {filters.map((curElem, index) => {
                    return <MovieCard key={index} data={curElem} />
                })}
                
            </div>
        </div>
    )
}

export default Featured