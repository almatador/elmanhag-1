import React from 'react'

const CartStudent = ({ name, count }) => {
       return (
              <div className='w-64 min-h-36 overflow-hidden p-3 flex flex-col items-center justify-start bg-mainColor rounded-xl'>
                     <span className='w-full text-left text-xl text-secoundColor font-medium'>{name}</span>
                     <span className='w-full mt-6 text-center text-5xl text-secoundColor font-medium'>{count}</span>
              </div>
       )
}

export default CartStudent