import React from 'react'
import logo from './logo.svg'
import './App.css'

import ProfileWithState from './ProfileWithState'

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
        <p className='text-lg font-bold my-10'>#3 use state</p>
        <ProfileWithState />
      </main>
    </div>
  )
}

export default App
