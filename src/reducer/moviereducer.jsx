const MovieReducer = (state, action) => {
    switch (action.type) {

        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_API_DATA":

            return {
                ...state,
                isLoading: false,
                movies: action.payload,
                // featureProducts: featureData,
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };

        case "SET_SINGLE_MOVIE":
            return {
                ...state,
                isSingleLoading: false,
                singleMovie: action.payload,
            };

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            };

        case "SET_TRAILER_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };

        case "SET_MOVIE_TRAILER":

            return {
                ...state,
                isTrailerLoading: false,
                trailer: action.payload,
            };

        case "SET_TRAILER_ERROR":
            return {
                ...state,
                isTrailerLoading: false,
                isTrailerError: true,
            };

        default:
            return state;
    }
}

export default MovieReducer;