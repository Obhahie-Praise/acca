import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div className='relative'>
      <div className="absolute text-sm top-0 w-screen flex items-center justify-between bg-white py-3 px-6 border-b border-zinc-300 shadow-sm">
        <p className=""> <span className="font-semibold">Coming soon: </span>Preview the affiliate marketing feature</p>
        <button className="flex items-center gap-3 py-1.5 px-4 rounded-lg font-light bg-blue-500">
          <Image src="/x-logo.svg" width={15} height={15} alt='X' />
          <p className="">View details</p>
          <Image src="/open-new tab.svg" width={15} height={15} alt='open x' />
        </button>
      </div>
    </div>
  )
}

export default HomePage