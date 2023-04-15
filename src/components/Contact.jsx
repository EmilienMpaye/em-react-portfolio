import React from 'react'


const Contact = () => {
  return (
    <div name="contact"
     className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white '>
      <div className='flex flex-col p-4 justify-center max-w-screen mx-auto h-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col  w-full '>
         <p className='text-4xl font-bold inline  '>Contact </p> 
         <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
         <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/a3fbf87f-54e7-48f7-a285-840767918d6a' method='POST'
          className='flex flex-col w-full md:w-1/2'>
            <input type='text' name="name" placeholder='Enter your name'
            className='p2 bg-transparent border-2 rounded-md text-while 
              focus:outline-none '/>
               <input type='text' name="name" placeholder='Enter your Email'
            className='p2 bg-transparent border-2 rounded-md text-while my-4
              focus:outline-none '/>
              <textarea name='message' placeholder='Enter your message' rows="7" className='p-2 bg-transparent border-2 rounded-md 
              text-white focus:outline-none'></textarea>
              <button className='text-white bg-gradient-to-b  
              from-cyan-500   to-blue-500 px-6 py-3 my-8 
             mx-auto flex items-center rounded-md hover:scale-110 duration-300' >Let's talk</button>
          </form>

         </div>
      </div>
      <div className='flex justify-center items-center'>
     
      </div>
    </div>
  )
}

export default Contact