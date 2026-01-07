import React from 'react'

const Glows = () => {
  return (
    <div className='h-350 absolute top-0 left-0 w-screen overflow-hidden -z-50'>
        <div className="h-200 w-200 bg-blue-600/30 rounded-full blur-3xl absolute -left-100 -top-70" />
        <div className="h-150 w-150 bg-yellow-600/30 rounded-full blur-3xl absolute -right-40 mt-150" />
    </div>
  )
}

export default Glows