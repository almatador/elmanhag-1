import React from 'react'

const ReportsIcon = ({ Width = "24", Height = "24", isActive = false }) => {
       return (
              <svg width={Width} height={Height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_732_6)">
                            <path d="M9 21H15M9 21V16M9 21H3.6C3.26863 21 3 20.7314 3 20.4V16.6C3 16.2686 3.26863 16 3.6 16H9M15 21V9M15 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H15.6C15.2686 3 15 3.26863 15 3.6V9M9 16V9.6C9 9.26863 9.26863 9 9.6 9H15" stroke={isActive ? "#D01025" : "#B5B5B5"} stroke-width="1.5" />
                     </g>
                     <defs>
                            <clipPath id="clip0_732_6">
                                   <rect width={Width} height={Height} fill="white" />
                            </clipPath>
                     </defs>
              </svg>

       )
}

export default ReportsIcon