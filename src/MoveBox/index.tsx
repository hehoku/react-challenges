import React, { CSSProperties, useState } from 'react'

const MoveBox: React.FunctionComponent = () => {
  const [bottom, setBottom] = useState(200)

  const bottomStyle: CSSProperties = {
    bottom: bottom
  }

  const handleClick = (): void => {
    setBottom(bottom + 10)
  }

  return (
    <div>
      <p className='text-2xl font-bold'>Move The Box</p>
      <div
        onClick={handleClick}
        className='w-40 h-10 rounded-lg bg-yellow-200 mx-auto my-8 cursor-pointer leading-10'
      >
        Move Up
      </div>
      <div
        className='w-20 h-20 bg-green-500 absolute left-1/2 -ml-10'
        style={bottomStyle}
      ></div>
    </div>
  )
}

export default MoveBox
