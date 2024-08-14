import React from 'react'
import { NavLink } from 'react-router-dom'

const Taps = ({ path, name }) => {
       return (

                     <NavLink to={path} className="w-1/6 text-thirdColor text-center text-2xl font-medium">{name}</NavLink>
       )
}

export default Taps