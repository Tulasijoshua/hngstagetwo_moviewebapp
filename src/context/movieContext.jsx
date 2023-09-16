import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/moviereducer'
import axios from 'axios';
import { MOVIES } from "../movies";

const MovieContext = createContext();

const API = "https://api.themoviedb.org/3/movie/top_rated?api_key=ef3c33985e9b7c7786936c80eb99ded5";

const initialState = {
    isLoading: false,
    isError: false,
    movies: [],
    // singleMovie: [],
    // featureProducts: [],
    isSingleLoading: false,
    singleMovie: [],
    trailer: [],
};


const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getMovies = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const movies = await res.data.results;
            dispatch({ type: "SET_API_DATA", payload: movies });
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    const getSingleMovie = async (url) => {

        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleMovie = await res.data;
            dispatch({ type: "SET_SINGLE_MOVIE", payload: singleMovie }) 
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" }) 

        }
    }
    const getMovieTrailer = async (url) => {
        dispatch({ type: "SET_TRAILER_LOADING" });
        try {
            const res = await axios.get(url);
            const singleMovie = await res.data;
            
            const trailer = singleMovie.videos.results.find((video) => video.type === 'Trailer');

            dispatch({ type: "SET_MOVIE_TRAILER", payload: trailer.key }) 


        } catch (error) {
            dispatch({ type: "SET_TRAILER_ERROR" }) 

        }
    }

    useEffect(() => {
        getMovies(API);
    }, [])

    return <MovieContext.Provider value={{ ...state, getSingleMovie, getMovieTrailer }}>
        {children}
    </MovieContext.Provider>
}

export const useMovieContext = () => {
    return useContext(MovieContext);
}

export default MovieContextProvider;