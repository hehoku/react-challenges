import React, { CSSProperties } from 'react'
import { GitHub, Twitter } from 'react-feather'

import './index.css'

interface ProfileProps {
  bg: string
  avatar: string
  name: string
  intro: string
  githubName: string
  twitterName: string
  labelList: string[]
}

const Profile = ({
  bg,
  avatar,
  name,
  intro,
  githubName,
  twitterName,
  labelList
}: ProfileProps): JSX.Element => {
  const bgImg: CSSProperties = {
    backgroundImage: `url(${bg})`,
    width: '560px',
    height: '200px'
  }
  return (
    <div className='profileContainer mx-auto'>
      <div className='bg-cover bg-center rounded-md' style={bgImg}></div>
      <div className='flex -mt-16 ml-8'>
        <img
          className='w-32 h-32 rounded-full border-white border-4'
          src={avatar}
        />
        <div className='mt-16 ml-6'>
          <p className='text-lg font-bold text-left'>{name}</p>
          <p className='text-gray-400 text-left'>{intro}</p>
          <p className='mt-2'>
            <a href={`https://github.com/${githubName}`}>
              <GitHub className='inline' />
            </a>
            <a className='ml-4' href={`https://twitter.com/${twitterName}`}>
              <Twitter className='inline' />
            </a>
          </p>
        </div>
      </div>
      <p className='text-left mt-8 ml-10 labels'>
        {labelList.map(item => (
          <span
            className='px-4 rounded-full text-center text-white mr-8'
            key={item}
          >
            {item}
          </span>
        ))}
      </p>
    </div>
  )
}

export default Profile
