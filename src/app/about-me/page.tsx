import { ArrowIcon, Mayank } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='max-w-6xl mx-auto flex flex-col items-center gap-5 px-4 my-10'>
        <div className='grid md:grid-cols-3 gap-5 w-full'>
            <div className="group bg-[#111111] rounded-3xl p-6 w-full shadow-lg border border-gray-900">
                <Image
                    src={Mayank.src}
                    alt="Mayank"
                    width={300}
                    height={300}
                    className="object-cover rounded-2xl w-full h-full"
                />
            </div>
            <div className='md:col-span-2 flex flex-col gap-4 justify-between group bg-[#111111] rounded-3xl p-6 w-full shadow-lg border border-gray-900'>
                <div className="flex flex-col gap-3">
                    <div>
                        <p className="text-xs uppercase text-gray-400">A Web Designer</p>
                        <h2 className="text-4xl font-semibold leading-tight">
                            Mayank Parmar<span className="text-blue-400">.</span>
                        </h2>
                    </div>
                    <p className="text-sm text-gray-500">
                    I am a highly skilled and creative web designer with 2+ Years Of expertise creating visually appealing, user-friendly
                    websites. I have extensive experience creating e-commerce sites, dynamic, static, and custom designs. My skills include
                    HTML, CSS, Tailwind CSS, JavaScript React.js, NextJs, and a variety of CMS platforms such as WordPress and
                    Magento.
                    </p>
                    <div className='space-y-2'>
                        <h4 className='font-semibold'>EDUCATION</h4>
                        <div>
                            <p className='text-base font-medium'>Computer Engineering</p>
                            <p className="text-sm text-gray-500">Goverment Polytechnic Gandhinagar</p>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <p>Central Academy Sr. Sec. School Secondary Education</p>
                        <ul className='list-disc text-sm text-gray-500 ml-5'>
                            <li>Completed Secondary Education 2014.</li>
                            <li>Completed Senior Secondary Education in Arts Stream in 2019.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <Link href={"/mayank-parmar-cv.pdf"} download={true} className="bg-gray-800 h-fit px-5 py-2 rounded-full text-sm cursor-pointer hover:text-black hover:bg-white transition">
                    CV Download
                    </Link>
                    <Link href={""}><ArrowIcon className="group-hover:text-blue-400 transition-all" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page