import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='text-lightest-slate
    bg-gradient-to-t from-sec-blue via-main-blue to-black w-full h-screen'>
        <div className='flex flex-col px-4 justify-center
         max-w-screen-lg mx-auto h-full'>
            <div className='pb-3 text-center'>
                <h2 className='text-4xl font-bold inline'>04. Contact</h2>
                <p className='py-6'>Submit the form below to get in touch with me.</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/34fecda7-12a1-465c-97e7-b90c69aff0ae' 
                method='POST' className='flex flex-col w-full
                 md:w-1/2'>
                    <input type='text' name='name' 
                    placeholder='Enter your name'
                     className='p-2 bg-transparent border-2
                      rounded-md text-white focus:outline-none'
                      />
                      <input type='text' name='email' 
                    placeholder='Enter your email'
                     className='my-4 p-2 bg-transparent border-2
                      rounded-md text-white focus:outline-none' 
                      />
                      <textarea name='message'
                      placeholder='Enter your message' rows='10' className='p-2
                       bg-transparent border-2 rounded-md text-white
                        focus:outline-none'
                         ></textarea>

                         <button className='text-white bg-gradient-to-tl from-main-blue to-regal-green
                          px-6 py-3 my-8 mx-auto flex items-center rounded-md
                           hover:scale-110 duration-300'>Let's Chat!</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact