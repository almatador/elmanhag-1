import React from 'react'

const TitleHeader = ({ text }) => {
       return (
              <div className="py-3 mb-5">
                     <span className='text-mainColor text-5xl font-medium'>{text}</span>
              </div>
       )
}

export default TitleHeader