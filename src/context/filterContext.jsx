// import { createContext, useContext, useEffect, useReducer } from "react";
// import { useMovieContext } from "./movieContext";
// import reducer from "../reducer/filterReducer";

// const FilterContext = createContext();

// const initialState = {
//     movies: [],
//     filter_movies: [],
//     filters: {
//         text: "",
//     },
// };

// const FilterContextProvider = ({children}) => {
//     const { movies } = useMovieContext()

//     const [state, dispatch] = useReducer(reducer, initialState);

//     //  update filter values
//      const getSearchMovie = (e) => {
//         let name = e.target.name;
//         let value = e.target.value;
//         console.log(name)

//         dispatch({type: "SEARCH_MOVIE", payload: {name, value}})
//     };

//     useEffect(() => {
//         dispatch({type: "FILTER_MOVIES"})
//     }, [movies, state.filters])

//     useEffect(() => {
//         dispatch({type: "LOAD_SEARCH_PRODUCTS", payload: movies });
//     }, [movies])

//     return <FilterContext.Provider 
//     value={{...state, getSearchMovie, }}
//     >
//         {children}
//     </FilterContext.Provider>
// }

// export const useFilterContext = () => {
//     return useContext(FilterContext)
// }

// export default FilterContextProvider;
