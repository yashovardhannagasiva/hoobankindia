import React from 'react'

const Button = ({value,styles}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient rounded-sm max-md:rounded-full font-poppins font-medium text-lg text-primary outline-none  ${styles} `}>
      {value}
    </button>
  )
}

export default Button