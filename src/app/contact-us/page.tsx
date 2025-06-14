"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';

function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'sending' | 'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await axios.post('https://anantaayurved.in/contact_backend/contact.php', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);

      if (response.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(response.data.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message || 'An error occurred. Please try again.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='max-w-6xl mx-auto flex flex-col items-center gap-5 px-4 my-10'>
      <div className='grid md:grid-cols-3 gap-5 w-full'>
        <div className='flex flex-col gap-5'>
          <h4 className='font-semibold uppercase'>Contact Info</h4>
          <div className='flex flex-col gap-4'>
            <p className='text-sm text-gray-500 flex gap-2'>
              Email: <Link target='_blank' href={"mailto:mayankparmar462@gmail.com"} className='text-white'>mayankparmar462@gmail.com</Link>
            </p>
            <p className='text-sm text-gray-500 flex gap-2'>
              Phone: <Link target='_blank' href={"tel:(+91)9409141581"} className='text-white'>+91 940 914 1581</Link>
            </p>
            <p className='text-sm text-gray-500 flex gap-2'>
              Location: <Link target='_blank' href={"https://www.google.com/maps/place/9,+Kalpesh+Rang+Upvan+Society,+Mahavir+Nagar,+Meldinagar,+Vejalpur,+Ahmedabad,+Gujarat+380051/@23.0072067,72.5149007,17z/data=!3m1!4b1!4m6!3m5!1s0x395e9ad45659934f:0x376de6c8797b2916!8m2!3d23.0072018!4d72.5174756!16s%2Fg%2F11c5p3h7g_?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"} className='text-white'>
                9, Kalpesh Rang Upavan Society,<br /> Vejalpur – 380051, Ahmedabad,<br /> Gujrat, India
              </Link>
            </p>
          </div>
          <div className='rounded-3xl'>
            <iframe
              className='rounded-2xl'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4511473225207!2d72.5174756!3d23.007201800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ad45659934f%3A0x376de6c8797b2916!2s9%2C%20Kalpesh%20Rang%20Upvan%20Society%2C%20Mahavir%20Nagar%2C%20Meldinagar%2C%20Vejalpur%2C%20Ahmedabad%2C%20Gujarat%20380051!5e0!3m2!1sen!2sin!4v1749922123452!5m2!1sen!2sin"
              width="350"
              height="320"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full group md:col-span-2 bg-[#111111] rounded-3xl p-4 md:p-8 shadow-lg border border-gray-900'>
          <h3 className='text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight'>
            Let’s Work <span className='text-blue-400'>Together.</span>
          </h3>
          <p className='text-sm text-gray-500'>
            I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <form className="w-full flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Your Subject *"
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#2c2c2c] text-white font-medium py-2 rounded-md hover:text-black hover:bg-white transition duration-300"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-green-500 text-center">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-500 text-center">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;