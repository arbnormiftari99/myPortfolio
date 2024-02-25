import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'




const HeaderSosial = () => {
  return (
    <div className='header__sosial'>
       <a href="https://www.linkedin.com/in/arbnor-miftari-087033253/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
       <a href="https://github.com/arbnormiftari99" target="_blank" rel="noreferrer"><FaGithub/></a>
       
    </div>
  )
}

export default HeaderSosial