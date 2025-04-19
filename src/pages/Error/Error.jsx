import React from 'react'
import { Link, useRouteError } from 'react-router'
import Buttons from '../../components/shared/Buttons/Buttons'
import Header from '../../components/Header/Header'

const Error = () => {
  const error = useRouteError()
  console.log(error?.error?.message)
  return (
    <>
      <Header/>
      <div className='py-24 text-center'>
        <h1 className='mb-8 text-7xl font-thin text-gray-900'>
          {error?.status || 404}
        </h1>
        <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
          {error?.error?.message || 'Something Went Wrong!'}
        </p>
        <Link to='/'>
          <Buttons to={'/'} label='Go To Homepage' />
        </Link>
      </div>
    </>
  )
}

export default Error