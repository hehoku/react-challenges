import React, { useEffect, useState } from 'react'

const AlertBaseInput: React.FunctionComponent = () => {
  const [pass, setPass] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPass(e.target.value)
  }

  useEffect(() => {
    if (pass === 'open the door') {
      alert('hold the door!!!')
    }
  }, [pass])

  return (
    <div className='bg-green-300 py-8'>
      <p className='text-2xl font-bold'>输入密码:</p>
      <input className='my-8' value={pass} onChange={handleChange} />
      <p className='text-sm'>Tips: open the door</p>
    </div>
  )
}

export default AlertBaseInput
