import React from 'react'

const DashboardIcon = ({ Width = "24", Height = "24", isActive = false }) => {
       return (
              <svg width={Width} height={Height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M9.02 3.82258L3.63 8.02258C2.73 8.72258 2 10.2126 2 11.3426V18.7526C2 21.0726 3.89 22.9726 6.21 22.9726H17.79C20.11 22.9726 22 21.0726 22 18.7626V11.4826C22 10.2726 21.19 8.72258 20.2 8.03258L14.02 3.70258C12.62 2.72258 10.37 2.77258 9.02 3.82258Z" stroke={isActive ? "#D01025" : "#B5B5B5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M12 18.9727V15.9727" stroke={isActive ? "#D01025" : "#B5B5B5"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

       )
}

export default DashboardIcon