import React from 'react'

const TitleHeader = ({ text, spaceBottom }) => {
       return (
              <div className={`py-3 mb-${spaceBottom}`}>
                     <span className='text-mainColor text-5xl font-medium'>{text}</span>
              </div>
       )
}

export default TitleHeader