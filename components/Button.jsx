import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-red-main hover:bg-red-main/40 focus:ring-4 focus:ring-red-main/20 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">{children}</button>
  )
}

export default Button