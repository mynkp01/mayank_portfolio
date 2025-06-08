
import { Logo } from '@/assets'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4 items-center justify-between">
      <div><Logo  className='w-14 h-fit' /></div>
        <div className='grid sm:flex gap-1 sm:gap-4'>
          <Link href={"mailto:mayankparmar462@gmail.com"} className='hover:text-blue-400 text-center'>mayankparmar462@gmail.com</Link>
          <Link href={"tel:(+91)9409141581"} className='hover:text-blue-400 text-center'>(+91) 9409141581</Link>
        </div>
      <p>Copyright © 2025 by All rights reserved</p>
    </div>
  )
}

export default Footer