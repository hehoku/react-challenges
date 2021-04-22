import React, { useState } from 'react'

const Calculator: React.FunctionComponent = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [sum, setSum] = useState(num1 + num2)

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNum1(+e.target.value)
  }

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNum2(+e.target.value)
  }

  const handleSum = (): void => {
    const sum = num1 + num2
    setSum(sum)
  }

  return (
    <div>
      <p className='text-5xl font-bold my-12'>Adding calculator</p>
      <input
        className='bg-blue-100 rounded-lg mr-12 h-8 outline-none mb-12'
        value={num1}
        onChange={handleInputChange1}
      />
      <input
        className='bg-blue-100 rounded-lg mr-12 h-8 outline-none mb-12'
        value={num2}
        onChange={handleInputChange2}
      />
      <p>
        <button
          className='w-60 h-12 bg-green-400 text-2xl font-bold rounded-3xl mb-12'
          onClick={handleSum}
        >
          Add Theme
        </button>
      </p>
      <p className='text-3xl font-bold'>{sum}</p>
    </div>
  )
}

export default Calculator
