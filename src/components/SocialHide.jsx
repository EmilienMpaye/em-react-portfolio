import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialHide = () => {
    const links =[ 
        {
            id:1,
            child:(
                <>
                Linkedin<FaLinkedin size={20}/>
                </>
            ),
          href:'https://www.linkedin.com/in/emilien-zia-2569b6256' ,
           style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                GitHub<FaGithub size={20}/>
                </>
            ),
          href:'https://github.com/EmilienMpaye' ,
        },
        {
            id:3,
            child:(
                <>
                Mail<HiOutlineMail size={20}/>
                </>
            ),
          href:'mailto:mpayimanaemilien@gmail.com' ,
        
        },
        {
            id:4,
            child:(
                <>
                Resume<BsFillPersonLinesFill size={20}/>
                </>
            ),
          href:'/Resume.docx' ,
           style:'rounded-br-md',
           download:true,
        }
    ]
  return (
    
    <div name="socialLink" className=' flex items-center justify-center bg-gray-800 ' >
        <ul className='flex flex-row space-x-2'>
             {links.map(({id,child,href,style,download})=>(
 
 <li key={id}  >
    
     <a href={href} 
     className=' text-yellow-500 font-bold flex flec-row  py-3'
      download={download}
      target='-blank'
      rel="noreferrer">
        
         {child}
         </a>
  </li>
             ) )}

           
        </ul>
    </div>
  )
}

export default SocialHide