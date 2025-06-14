import { ArrowIcon, Mayank } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='max-w-6xl mx-auto flex flex-col items-center gap-5 px-4 my-10'>
        <div className='grid md:grid-cols-3 gap-5 w-full'>
            <div className="group sticky top-[120px] bg-[#111111] rounded-3xl p-6 w-full h-fit shadow-lg border border-gray-900">
                <Image
                    src={Mayank.src}
                    alt="Mayank"
                    width={300}
                    height={300}
                    className="object-cover rounded-2xl w-full h-full"
                />
            </div>
            <div className='md:col-span-2 flex flex-col gap-6 justify-between group bg-[#111111] rounded-3xl p-6 w-full shadow-lg border border-gray-900'>
                <div className="flex flex-col gap-5">
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
                <div className="flex flex-col gap-5">
                    <h4 className='font-semibold'>EXPERIENCE</h4>
                    <div className='flex justify-between'>
                        <div className='space-y-2'>
                            <div className='space-y-0.5'>
                                <p className="text-sm text-gray-500">January 2025 - Present</p>
                                <p className='text-base font-medium'>Web Designer</p>
                                <p className="text-sm text-blue-400">Mighty Ventures</p>
                            </div>
                            <ul className='list-disc text-sm text-gray-500 ml-5'>
                                <li>Creating interactive and responsive user experiences with React.js and Next.js component-based
                                    architecture and Tailwind CSS.</li>
                                <li>Working with the team to keep the brand consistent across all platforms and enhancing the UI/UX in
                                    response to user input.</li>
                                <li>Participating in daily stand-up meetings, code reviews, and sprint planning to ensure timely and high-
                                    quality project delivery.</li>
                            </ul>
                        </div>
                        <p className='text-base font-medium'>Ahmedabad, Gujarat</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='space-y-2'>
                            <div className='space-y-0.5'>
                                <p className="text-sm text-gray-500">November 2022 - December 2024</p>
                                <p className='text-base font-medium'>Web And Graphic Designer</p>
                                <p className="text-sm text-blue-400">Cynoinfotech</p>
                            </div>
                            <ul className='list-disc text-sm text-gray-500 ml-5'>
                                <li>I am working as a Web Designer for CynoInfotech, where I specialize in producing visually appealing
                                    and practical designs.</li>
                                <li>My primary responsibilities involve designing graphic materials that adhere to UI/UX design, web
                                    design, and user-cantered concepts.</li>
                                <li>Focus on creating intuitive and visually appealing user interfaces that enhance the user experience across
                                    digital platforms.</li>
                                <li>Work together with developers to guarantee that designs are implemented successfully, maintaining both
                                    functionality and design integrity.</li>
                            </ul>
                        </div>
                        <p className='text-base font-medium'>Ahmedabad, Gujarat</p>
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