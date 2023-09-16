import React from 'react'
import Main from './includes/featured/main/Main'
import Featured from './includes/featured/Featured'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className='w-full bg-white'>
      <Main />
      <Featured />
      <Footer />
    </div>
  )
}

export default Home