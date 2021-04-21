import React, { useState } from 'react'
import Profile from '../Profile'

import avatar from '../images/avatar.png'
import bg from '../images/big-sur.png'

const ProfileWithState: React.FunctionComponent = () => {
  const [intro, setIntro] = useState('hobo')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIntro(e.target.value)
  }
  return (
    <div>
      <p className='mb-8'>
        <span className='text-2xl mr-4'>Intro: </span>
        <input
          className='rounded-xl h-12 bg-blue-200 outline-none'
          value={intro}
          onChange={handleInputChange}
        />
      </p>
      <Profile
        bg={bg}
        avatar={avatar}
        githubName='hehoku'
        intro={intro}
        labelList={['react', 'tailwindcss']}
        name='hehoku'
        twitterName='iHehoku'
      />
    </div>
  )
}

export default ProfileWithState
