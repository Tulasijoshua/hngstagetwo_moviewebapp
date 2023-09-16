import React, { useState } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
import imdb from '../../../../../assets/commons/imdb.png'
import apple from '../../../../../assets/commons/pinapple.png'
import { NavLink } from 'react-router-dom'
// import mj1 from '../../../../../assets/jeans/mj-1.jpg'

const MovieCard = ({ data }) => {
    const { id, title, poster_path, release_date, popularity, vote_average } = data

    const popular = popularity.toString();
    const getPopular = popular.slice(0, 3);

    const [favColor, setFavColor] = useState('white');

    const handleFavIcon = () => {
        const newColor = favColor === 'white' ? '#BE123C' : 'white';
        setFavColor(newColor);
    };

    return (
        <NavLink to={`/movie/${id}`}>
            <div data-testid='movie-card' className='xl:w-[250px] xs:w-[270px] w-[200px] lg:w-[250px] md:w-[200px] sm:w-[260px] md:mb-[1.5rem] sm:mb-2 mb-[3rem]'>
                <div className="2xl:w-[260px] w-full xl:w-[280px] lg:w-[250px] md:w-[200px] sm:w-[260px] lg:h-[370px] md:h-[270px] sm:h-[340px] xs:h-[360px] h-[320px] relative mb-3">
                    <img data-testid='movie-poster' src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="w-full h-full object-cover" />
                    <div className='absolute top-1 right-2 left-2'>
                        <div className="flex justify-between items-center mt-3 mb-2">
                            <div className="font-sans lg:text-[12px] md:text-[8px] text-[10px] lg:ml-2 md:ml-[6px] text-black font-bold bg-white opacity-[0.7] rounded-xl sm:py-[4px] py-[2px] px-[10px] uppercase">tv series</div>
                            <div className="relative mr-2 lg:w-[30px] md:w-[25px] sm:w-[30px] w-[25px] lg:h-[30px] md:h-[25px] sm:h-[30px] h-[25px] rounded-full bg-gray-300 opacity-[0.95] text-white">
                                <AiTwotoneHeart
                                    onClick={handleFavIcon}
                                    style={{ color: favColor }}
                                    className="lg:text-xl sm:text-base absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='md:mb-[3rem] sm:mb-[2rem]'>
                    <div data-testid='movie-release-date' className='uppercase text-gray-400 font-bold text-xs lg:mb-3 mb-2'>
                        {release_date}
                    </div>
                    <div>
                        <h3 data-testid='movie-title' className='lg:text-lg xs:text-base text-sm capitalize text-gray-700 font-bold mb-2'>{title}</h3>
                        <div className="flex justify-between items-center text-sm sm:mb-2">
                            <div className='flex justify-center items-center'>
                                <div className='w-[25px] h-[15px] mr-3'>
                                    <img className="w-full h-full object-cover" src={imdb} />
                                </div>
                                <div className='xs:text-sm text-xs'>{getPopular}</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className='w-[15px] h-[15px] mr-3'>
                                    <img className="w-full h-full object-cover" src={apple} />
                                </div>
                                <div className='xs:text-sm text-xs'>{vote_average * 10}%</div>
                            </div>
                        </div>
                        <div className='capitalize font-bold text-xs text-gray-400'>
                            action, adventure, horror
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default MovieCard