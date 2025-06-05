import Logo from '@/assets/logo/Logo'
import React from 'react'

function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 items-center justify-between">
      <div>
        <Logo  className='w-14 h-fit' />
      </div>
      <p>© All rights reserved by <span className='text-blue-400'>Mayank Parmar</span></p>
    </div>
  )
}

export default Footer