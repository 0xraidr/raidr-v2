import React from 'react'
import Fade from 'react-reveal/Fade';

const About = () => {
  return (

    <div name='About' className=' text-center w-full  text-lightest-slate bg-gradient-to-b from-sec-blue via-main-blue to-black pt-10 h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
         justify-center w-full h-full'>
            <div className='pb-8'>
            <Fade left big>
               <h2 className=' text-4xl font-bold inline'>01. About Me</h2> 
               </Fade>
            </div>
            <div>
            <Fade left big>
            <p className='text-lg text-an-slate'>
            Crypto and the Web3 space as a whole was what attracted me to tech and learning to code. Ever since meeting friends in 
            Solana's community I've been scavenging the internet for learning material and things to become a better developer.
            I've actually been active within the community on the Solana blockchain for about a year and a half. I've also 
            built smooth front end minting experiences for NFT projects using Metaplex's Candy Machine.
            </p>
            </Fade>
            </div>
            
            <br />
        </div>
    </div>
  )
}

export default About