import React from 'react'
import Button from '../../components/Button'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="w-[70%] mx-auto py-20 ">
      <h2 className="mb-6 text-6xl text-red-700 font-bold text-center">404</h2>
      <h3 className="text-4xl font-semibold text-center mb-4">UH OH! You're lost.</h3>
      <p className="w-[60%] mx-auto text-xl font-medium text-black mb-6">
        The page you are looking for does not exist. How you got here is a mystery.
        But you can click the button below to go back to the homepage.
      </p>
      <div className="flex justify-center items-center text-white">
        <NavLink to="/">
          <Button

            text="Back to Home"
            backgroundColor="#BE123C"
            width="100%"
          >
          </Button>
        </NavLink>
      </div>

    </div>
  )
}

export default ErrorPage