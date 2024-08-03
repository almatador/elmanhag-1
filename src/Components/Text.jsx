import React from 'react'

const TextTitle = ({ text, size , color, font }) => {
       return (
              <span
                     className={`text-${size} text-${color} font-${font} `}
              >
                     {text}
              </span>
       );
};

export default TextTitle;