"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import hiBitmoji from '../public/assets/hi-bitmoji.webp';
import toast, {Toaster} from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [disabled, setDisabled]  = React.useState(true);

  useEffect(() => {
    if(name.length > 0 && email.length > 0 && message.length > 0){
        setDisabled(false);
    }
  },[message, email,name])

  async function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get("email");
    const message = formData.get('message');
    toast.promise(fetch('api/email', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      })
    })
    .then((response) => {
      if(response.ok){
        document.getElementById('contact-form').reset();
        return response.json()
      }
      throw new Error('Something went wrong');
    }), {
      loading: 'Loading',
      success: 'Email Sent',
      error: 'Server Error',
    })
  }
  return (
    <section id="contact" className="relative font-share container">
      <div className="px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Image
            width="100%"
            height="100%"
            src={hiBitmoji}
            alt={"hello bitmoji"}
          />
        </div>
        <form
          id='contact-form'
          onSubmit={(e)=> handleSubmit(e)}
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
                Let&apos;s Connect
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e)=> setName(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-main focus:ring-2 focus:ring-red-main/50 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-main focus:ring-2 focus:ring-red-main/50 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-main focus:ring-2 focus:ring-red-main/50 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            disabled={disabled}
            className="disabled:opacity-30 text-white bg-red-main border-0 py-2 px-6 focus:outline-none hover:bg-red-main/30 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
      <Toaster position='top center' gutter={8} toastOptions={{
        style:{
          marginTop: '5rem'
        },       
      }}/>
    </section>

  )
}

export default Contact