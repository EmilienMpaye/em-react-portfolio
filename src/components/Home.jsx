import React from 'react'
import heroImage from "../assets/heroImage.jpeg"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen  w-full bg-gradient-to-b via-black from-black
    to bg-gray-800 '> 
    <div className='max-w-screen-lg mx-auto flex flex-col items-center  h-full px-4 md:flex-row  sm:flex-row mt-4 '>
        <div className='flex flex-col justify-center  h-full'>
            <h2 className='text-4xl sm:text-6xl font-bold
            text-white'>
                I'm Full stack Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
               I have 2 years of experience building and designing
               software.
               currently, i love to work on web application using 
               technologies like javaScript
               ,React,React Native, Tailwind,Noje.js,firebase and Sanity 
              
            </p>
                
            <div>
                <Link to='portfolio' smooth duration={400} className='text-white w-fit px-6 py-3 my-2
                 flex items-center rounded-nd  bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer'>
                    Portfolio
                    <span className='hover:rotate-90 duration-300 '>
                    <MdOutlineKeyboardArrowRight size={30} className='ml-1'/>  
                    </span>
           
                </Link> 
                
            </div>
            
        </div>
        <div className='flex items-end justify-end   pb-40 ' >
      <img src={heroImage} 
      alt='my pic' 
      className='rounded-2xl  w-2/3  md:mr-2 xl:mt-5 '/>  
    </div>
  </div>

</div>
  );
};

export default Home;