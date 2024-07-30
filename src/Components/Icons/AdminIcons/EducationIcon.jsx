import React from 'react'

const EducationIcon = ({ Width = "24", Height = "24", isActive = false }) => {
       return (
              <svg width={Width} height={Height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.5 10L12 4L22.5 10L12 16L1.5 10Z" stroke={isActive ? "#D01025" : "#B5B5B5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M5.25 12.25V18.25L12 22L18.75 18.25V12.25" stroke={isActive ? "#D01025" : "#B5B5B5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M22.5 18.25V10" stroke={isActive ? "#D01025" : "#B5B5B5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M12 16V22" stroke={isActive ? "#D01025" : "#B5B5B5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

       )
}

export default EducationIcon