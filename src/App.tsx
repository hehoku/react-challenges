import React from 'react'
import logo from './logo.svg'
import avatar from './images/avatar.png'
import bg from './images/big-sur.png'
import './App.css'

import Profile from './Profile'

const App: React.FunctionComponent = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          React Challenges
        </a>
      </header>
      <main className='felx justify-center align-middle justify-items-center'>
        <p className='text-lg font-bold my-10'>
          #1 Display Simple Data with JSX
        </p>
        <Profile
          bg={bg}
          avatar={avatar}
          githubName='hehoku'
          intro='hobo'
          labelList={['react', 'tailwindcss']}
          name='Hehoku'
          twitterName='iHehoku'
        />
      </main>
    </div>
  )
}

export default App
