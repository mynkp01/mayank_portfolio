import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='max-w-6xl mx-auto flex flex-col items-center gap-5 px-4 my-10'>
        <div className='grid md:grid-cols-3 gap-5 w-full'>
            <div className='flex flex-col gap-5'>
                <h4 className='font-semibold uppercase'>Contact Info</h4>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-500 flex gap-2'>Email: <Link href={"mailto:mayankparmar462@gmail.com"} className='text-white'>mayankparmar462@gmail.com</Link></p>
                    <p className='text-sm text-gray-500 flex gap-2'>Phone: <Link href={"tel:(+91)9409141581"} className='text-white'>+91 940 914 1581</Link></p>
                    <p className='text-sm text-gray-500 flex gap-2'>Location: <Link href={"tel:(+91)9409141581"} className='text-white'>9, Kalpesh Rang Upavan Society,<br /> Vejalpur – 380051, Ahmedabad,<br /> Gujrat, India</Link></p>
                </div>
            </div>
            <div className='col-span-2 flex flex-col gap-2 w-full group md:col-span-2 bg-[#111111] rounded-3xl p-4 md:p-8 shadow-lg border border-gray-900'>
                <h3 className='text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight'>Let’s Work <span className='text-blue-400'>Together.</span></h3>
                <p className='text-sm text-gray-500'>I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
                <form className="w-full flex flex-col gap-4 mt-4">
                    <input
                    type="text"
                    placeholder="Name *"
                    className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none"
                    />
                    <input
                    type="email"
                    placeholder="Email *"
                    className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none"
                    />
                    <input
                    type="text"
                    placeholder="Your Subject *"
                    className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none"
                    />
                    <textarea
                    placeholder="Your Message *"
                    rows="5"
                    className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none resize-none"
                    ></textarea>
                    <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#2c2c2c] text-white font-medium py-2 rounded-md hover:text-black hover:bg-white transition duration-300"
                    >
                    Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default page