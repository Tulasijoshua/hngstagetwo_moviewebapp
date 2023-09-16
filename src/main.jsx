import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MovieContextProvider from './context/movieContext.jsx'
// import FilterContextProvider from './context/filterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieContextProvider>
      {/* <FilterContextProvider> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </FilterContextProvider> */}
    </MovieContextProvider>
  </React.StrictMode>,
)
