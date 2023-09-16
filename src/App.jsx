import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Movie from './pages/movie/Movie'
import ErrorPage from './pages/errorPage/ErrorPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<Movie />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App