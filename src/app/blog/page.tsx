import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='max-w-5xl mx-auto flex flex-col items-center gap-5 px-4 my-10'>
        <h3 className='text-4xl font-semibold leading-tight'>Why Good Web Design Isn’t Just About Looks – It’s About Results</h3>
        <div className='space-y-3'>
          <p className="text-sm text-gray-500">In today's digital world, your website is your first impression—sometimes your only chance to win a customer. As a web designer, I’ve seen businesses flourish just by transforming their outdated websites into sleek, user-friendly platforms. But web design is more than just colors, fonts, and layouts—it’s about crafting an experience that drives real results.</p>
          <h5 className='font-semibold'>What Makes a Website “Good”?</h5>
          <p className="text-sm text-gray-500">A well-designed website isn’t just visually appealing. It must be:</p>
          <ul className='list-disc text-sm text-gray-500 ml-5'>
              <li><span className='text-white font-medium'>Responsive</span> – Looks great on any device.</li>
              <li><span className='text-white font-medium'>Fast-loading</span> – Users don’t wait; they leave.</li>
              <li><span className='text-white font-medium'>User-friendly</span> – Easy to navigate, intuitive, and accessible.</li>
              <li><span className='text-white font-medium'>Goal-focused</span> – Whether it’s to generate leads, sell products, or build a brand, every element should serve a purpose.</li>
          </ul>
          <h5 className='font-semibold'>Design with Purpose</h5>
          <p className="text-sm text-gray-500">Every section, button, and animation should guide your visitor closer to a goal—like filling out a contact form, making a purchase, or signing up for a newsletter. I always start by asking: What does the client want users to do? Then I build around that.</p>
          <h5 className='font-semibold'>Trends Come and Go, But Functionality Lasts</h5>
          <p className="text-sm text-gray-500">While I love exploring the latest design trends like neumorphism, dark mode, or micro-interactions, I never let them compromise usability. Trends should enhance the experience—not distract from it.</p>
          <h5 className='font-semibold'>My Design Philosophy</h5>
          <p className="text-sm text-gray-500">I believe great design:</p>
          <ul className='list-disc text-sm text-gray-500 ml-5'>
              <li>Reflects the brand’s identity</li>
              <li>Makes people feel something</li>
              <li>Works beautifully under the hood</li>
          </ul>
          <p className="text-sm text-gray-500">It’s about finding that sweet spot where creativity meets clarity.</p>
          <h5 className='font-semibold'>Final Thoughts</h5>
          <p className="text-sm text-gray-500">Your website isn’t just your online presence—it’s your 24/7 salesperson. Investing in great web design isn’t an expense; it’s a growth strategy.</p>
          <p className="text-sm text-gray-500">Need a modern, responsive website that actually performs?</p>
          <Link href={""} className='text-blue-400'>Let’s talk! </Link>
        </div>
    </div>
  )
}

export default page