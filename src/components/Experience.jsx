import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import firebaseImg from "../assets/firebaseImg.png"
import sanityImage from "../assets/sanityImage.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import reactNativeimg from "../assets/reactNativeimg.jpg"
import next from "../assets/next.png"

const Experience = () => {
    const techs =[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500',
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500',
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-blue-600',
        },
        {
          id:5,
          src:reactNativeimg,
          title:'React Native',
          style:'shadow-blue-400',
      },
      {
        id:6,
        src:next,
        title:'Next.js',
        style:'shadow-blue-800',
    },

        {
            id:7,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400',
        },
        {
            id:8,
            src:firebaseImg,
            title:'Firebase',
            style:'shadow-yellow-400',
        },
        {
            id:9,
            src:sanityImage,
            title:'Sanity',
            style:'shadow-orange-500',
        },
        {
            id:10,
            src:github,
            title:'GitHub',
            style:'shadow-gray-400',
        },
       
    ]

  return (

    
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
      <div className='mt-10'>
        <p className='text-4xl font-bold border-r-4 border-gray-500 p-2 inline'>Experience</p>
        <p className='py-4 text-lg'>These are the technologies I've worked with</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {techs.map(({ id, src, title, style }) => (
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt={title} className='w-20 mx-auto' />
            <p className='mt-4'>{title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};
  

export default Experience