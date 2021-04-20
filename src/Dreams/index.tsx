import React from 'react'
import data from './data'
import './index.css'

const Dreams: React.FunctionComponent = () => {
  return (
    <div className='dreams w-4/5 flex flex-col items-center m-auto'>
      {data.map(item => (
        <Dream key={item.obj} emoji={item.emoji} name={item.name} />
      ))}
    </div>
  )
}

interface DreamProps {
  emoji: string
  name: string
}

const Dream = ({ emoji, name }: DreamProps): JSX.Element => {
  return (
    <div className='dream mb-10 flex flex-col justify-center rounded-lg'>
      <p className='text-3xl mb-5'>{emoji}</p>
      <p className='text-2xl font-bold'>{name}</p>
    </div>
  )
}

export default Dreams
