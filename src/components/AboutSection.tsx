import { ArrowIcon, BlogImage, Linkedin, StarIcon } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutSection() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-4 gap-y-5 lg:gap-5 w-full'>
        <Link href={"/blog"} className="group lg:block hidden bg-[#111111] rounded-3xl min-h-10 p-4 shadow-lg border border-gray-900">
            <BlogImage />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Blog</p>
                <h3 className="text-xl font-semibold text-white">Articals</h3>
              </div>
              <ArrowIcon className="group-hover:text-blue-400 transition-all" />
            </div>
        </Link>
        <Link href={""} className="flex flex-col justify-between gap-5 group md:col-span-2 bg-[#111111] rounded-3xl min-h-10 p-4 pt-0 shadow-lg border border-gray-900">
            <Image
            src={StarIcon.src}
            width={30}
            height={30}
            alt="Staricon"
            />
            <div className="flex justify-between items-end">
                <div>
                    <p className="text-3xl sm:text-5xl font-medium text-gray-400">Let’s</p>
                    <h3 className="text-3xl sm:text-5xl font-semibold text-white">Work <span className="text-blue-400">Together.</span></h3>
                </div>
                <ArrowIcon className="group-hover:text-blue-400 transition-all" />
            </div>
        </Link>
        <div className='grid sm:grid-cols-2 lg:grid-cols-1 gap-5 w-full'>
            <Link href={"/blog"} className="group lg:hidden bg-[#111111] rounded-3xl min-h-10 p-4 shadow-lg border border-gray-900">
                <div className="flex justify-center">
                    <BlogImage />
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-400">Blog</p>
                        <h3 className="text-xl font-semibold text-white">Articals</h3>
                    </div>
                    <ArrowIcon className="group-hover:text-blue-400 transition-all" />
                </div>
            </Link>
            <div className="flex flex-col justify-between gap-5 group bg-[#111111] rounded-3xl min-h-10 p-4 shadow-lg border border-gray-900">
                <Link href={"https://www.linkedin.com/in/mayank-parmar-625359226/"} target='_blank' className="flex justify-center">
                    <Image
                        src={Linkedin.src}
                        width={80}
                        height={80}
                        alt="Linkedin"
                    />
                </Link>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-400">Stay With Me</p>
                        <h3 className="text-xl font-semibold text-white">Profiles</h3>
                    </div>
                    <ArrowIcon className="group-hover:text-blue-400 transition-all" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection