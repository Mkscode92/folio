'use client'

import React from 'react'
import { useState } from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "8a2d1e45-fbc2-4e56-93a9-510c536827f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success! I will respond to your message as soon as I can." : "Error.");
  };
  return (
    <div>
      <h1 className='text-5xl text-center pb-6'><b>Contact Me!</b></h1>
      <p className='text-center pb-8'>Want to chat? Just shoot me a <a href="mailto:mksrinivasula5@gmail.com" className='text-blue-700 underline'>direct email</a> or a message <br></br>in the form box below and I'll respond whenever I can.</p>
      <div className="w-full mx-auto">
          <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                      <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 border rounded"/>
                  </div>

                  <div> 
                      <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 border rounded"/>
                  </div>

                  <div className="col-span-2 row-span">
                      <textarea name="message" placeholder="Message" rows={8} required className="w-full px-4 py-2 border rounded"></textarea>
                  </div>

                  <div className="col-span-2">
                      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Send Message</button>
                  </div>
              </div>
              <p>{result}</p>
          </form>
      </div>
    </div>
  )
}

export default Contact