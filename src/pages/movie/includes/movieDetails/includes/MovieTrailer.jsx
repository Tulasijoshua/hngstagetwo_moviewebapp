import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import { useMovieContext } from '../../../../../context/movieContext';
import { useParams } from 'react-router-dom';

const MovieTrailer = ({ data }) => {
    const { getMovieTrailer, isTrailerError, isTrailerLoading, trailer } = useMovieContext()

    const { id } = useParams();


    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=ef3c33985e9b7c7786936c80eb99ded5&append_to_response=videos`;

    const videoId = `${trailer}`;

    useEffect(() => {
        getMovieTrailer(`${API}`)
       
    }, [])

    const opts = {
        height: '450px',
        width: '100%',
        playerVars: {
            autoplay: 1, 
        },
        borderRadius: '2rem'
    };


    if (isTrailerLoading) {
        return <div className='text-center text-4xl font-bold'> 
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
         </div>
    }

    if (isTrailerError) {
        console.log("error occured")
        return <div className='text-center text-4xl font-bold'> 
            404!! 
            <div className='my-[3rem] text-2xl'>An error occured</div>  </div>
    }

    return (
            <div className="w-full xl:h-[450px] lg:h-[450px] mb-[2rem] rounded-2xl">

                <YouTube className="object-cover rounded-2xl" videoId={videoId} 
                opts={opts} 
                />
            </div>
    )
}

export default MovieTrailer