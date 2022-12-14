import React from 'react'
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';

const Welcome = () => {
  return (
    <div className='bg-gradient-to-t from-sec-blue via-main-blue to-black pt-10 w-full h-screen'>

       <div className=''>
          <Fade left big>
        <h1 className='text-xl pt-10 pl-10 md:pr-20 md:text-3xl md:flex text-lightest-slate'>Welcome, my name's</h1>
          </Fade>
        </div>
        <div>
          <Fade bottom big>
          <h1 className='flex justify-center font-extrabold text-7xl mt-10 text-transparent bg-clip-text
           bg-gradient-to-r from-lightest-slate to-regal-green'>0xraidr.</h1>
          </Fade>
        </div>
        <div>
          <h2 className='flex mt-10 justify-center text-2xl text-lightest-slate'>Currently Under Construction...</h2>
        </div>
    <div className='w-full pt-10 flex items-center justify-center'>
      <div className='text-center text-transparent pt-10 mt-10
      text-4xl bg-clip-text bg-gradient-to-r from-lightest-slate to-regal-green'>
          <Typewriter 
          options={{
              loop: true,
          }}
              onInit={(typewriter) => {
                  typewriter
                  .changeDelay(100)
                  .changeDeleteSpeed(10)
                  .typeString("I'm a Fullstack Developer.")
                  .pauseFor(1000)
                  .deleteChars(22)
                  .pauseFor(300)
                  .typeString("a Professional Googler =)")
                  .pauseFor(1000)
                  .deleteChars(31)
                  .pauseFor(300)
                  .typeString("and a Web3 Enjoyer.")
                  .pauseFor(1000)        
                  .start();
              }}
          />
      </div>   
  </div>
  <div className='animate-bounce mt-10'>
                <span className='flex justify-center text-regal-green'>
                <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </div>
  </div>
    )
  }

export default Welcome