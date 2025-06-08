import { ArrowIcon, Cynoinfotech, EkamNgo, EventBazaar, MergeExperinace, NextKart, Ratnaafin, Tunex, ZeroTime } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project =[
  {
    image: EventBazaar.src,
    title: "NextJs, Web Design",
    name: "Event Bazaar",
    path: "https://eventbazaar.com/"
  },
  {
    image: Ratnaafin.src,
    title: "NextJs, Web Design",
    name: "Event Bazaar",
    path: "https://www.ratnaafin.com/"
  },
  {
    image: ZeroTime.src,
    title: "React.js, Web Design",
    name: "Zerotime Solutions",
    path: "https://zerotimesolutions.com/"
  },
  {
    image: Cynoinfotech.src,
    title: "Magento, Web Design",
    name: "Cynoinfotech",
    path: "https://cynoinfotech.com/"
  },
  {
    image: NextKart.src,
    title: "NextJs, Web Design",
    name: "NextKart",
    path: "https://nextkart.vercel.app/"
  },
  {
    image: Tunex.src,
    title: "NextJs, Web Design",
    name: "TuneX",
    path: "https://tunex-nu.vercel.app/"
  },
  {
    image: MergeExperinace.src,
    title: "WordPress, Web Design",
    name: "Merge Experiance",
    path: "https://mergeexperiences.com/"
  },
  {
    image: EkamNgo.src,
    title: "WordPress, Web Design",
    name: "Ekam Ngo",
    path: "https://ekam.ngo/"
  }
]

function page() {
  return (
    <div className='max-w-6xl mx-auto flex flex-col gap-5 px-4 my-10'>
        <h3 className='text-4xl font-semibold leading-tight'>All Projects</h3>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {Project.map ((item, index) => (
            <Link key={index} href={item?.path} target='_blank' className="flex flex-col justify-between gap-5 group bg-[#111111] rounded-3xl min-h-10 p-4 shadow-lg border border-gray-900">
              <div className="flex justify-center">
                <Image
                  src={item?.image}
                  width={220}
                  height={220}
                  alt="Signature"
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">{item?.title}</p>
                  <h3 className="text-xl font-semibold text-white">{item?.name}</h3>
                </div>
                <ArrowIcon className="group-hover:text-blue-400 transition-all" />
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default page