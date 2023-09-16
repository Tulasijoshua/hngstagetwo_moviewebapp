import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import { useMovieContext } from '../../../../../context/movieContext';
import { useParams } from 'react-router-dom';

const MovieTrailer = ({ data }) => {
    const { getMovieTrailer, trailer } = useMovieContext()

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

    return (
            <div className="w-full xl:h-[450px] lg:h-[450px] mb-[2rem] rounded-2xl">

                <YouTube className="object-cover rounded-2xl" videoId={videoId} 
                opts={opts} 
                />
            </div>
    )
}

export default MovieTrailer