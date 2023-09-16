import React from 'react'
import Sidebar from '../../components/Sidebar'
import MovieDetails from './includes/movieDetails/MovieDetails'

const Movie = () => {
  return (
    <div className="h-[100vh] flex">
        <Sidebar />
        <MovieDetails />
    </div>
  )
}

export default Movie