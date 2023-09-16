// const filterReducer = (state, action) => {
//     switch (action.type) {
//         case "LOAD_SEARCH_PRODUCTS":
//             return {
//                 ...state,
//                 filter_movies: [...action.payload],
//             };

//         case "FILTER_MOVIES":

//             let { movies } = state;
//             let tempFilterProduct = [...movies];

//             const { text, } = state.filters;

//             if (text) {
//                 tempFilterProduct = tempFilterProduct.filter((curElem) => {
//                     return curElem.name.toLowerCase().includes(text);
//                 });
//             }


//         case "SEARCH_MOVIE":
//             const { value } = action.payload;

//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     [name]: value,
//                 }
//             }
//     }
// }

// export default filterReducer;