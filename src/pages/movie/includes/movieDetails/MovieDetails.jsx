import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMovieContext } from '../../../../context/movieContext'
import { MOVIES } from '../../../../movies'
import Details from './includes/Details'

const MovieDetails = () => {
    const {getSingleMovie, singleMovie, isSingleLoading} = useMovieContext()
    const {id} = useParams();

    
    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=ef3c33985e9b7c7786936c80eb99ded5&append_to_response=videos`;

        
    useEffect(() => {
        getSingleMovie(`${API}`)
    }, [])
    return (
        <div className='max-h-full  lg:flex-1 md:w-full m-1 overflow-y-scroll'>
            <div className="w-[95%] mx-auto my-[2rem] ">
                     <Details data={singleMovie} />
            </div>
        </div>
    )
}

export default MovieDetails