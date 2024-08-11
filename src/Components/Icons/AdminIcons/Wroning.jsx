import React from 'react'

const Wroning = ({ Width = "3", Height = "3" }) => {
       return (
              // <svg className={`w-${Width} h-${Height}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" >
              //        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              // </svg >
               <svg className={`w-${Width} h-${Height} mx-auto mb-4 text-mainColor`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
           </svg>
       )
}

export default Wroning