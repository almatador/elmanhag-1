import React from 'react'

const UserIcon = ({ Width = "24", Height = "24", isActive = false }) => {
       return (
              <svg width={Width} height={Height} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12.1605 11.87C12.0605 11.86 11.9405 11.86 11.8305 11.87C9.45055 11.79 7.56055 9.84 7.56055 7.44C7.56055 4.99 9.54055 3 12.0005 3C14.4505 3 16.4405 4.99 16.4405 7.44C16.4305 9.84 14.5405 11.79 12.1605 11.87Z" stroke={isActive ? "#D01025" : "#B5B5B5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M7.1607 15.56C4.7407 17.18 4.7407 19.82 7.1607 21.43C9.9107 23.27 14.4207 23.27 17.1707 21.43C19.5907 19.81 19.5907 17.17 17.1707 15.56C14.4307 13.73 9.9207 13.73 7.1607 15.56Z" stroke={isActive ? "#D01025" : "#B5B5B5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

       )
}

export default UserIcon