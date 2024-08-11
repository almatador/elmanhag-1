import React from 'react'

const TitleHeader = ({ text, spaceBottom, size = "5xl" }) => {
       return (
              <div className={`py-3 mb-${spaceBottom}`}>
                     <span className={`text-${size} text-mainColor font-medium`}>{text}</span>
              </div>
       );
};

export default TitleHeader;

