import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const InputCustom = ({ type, placeholder, value, onChange }) => {
       const [show, setShow] = useState(false)
       if (type === "password") {
              return (<>
                     <div className="relative w-full">
                            <input type={show ? "text" : "password"} placeholder={placeholder} className=' w-full border-2 rounded-2xl border-mainColor outline-none px-2 py-3 text-2xl font-normal text-thirdColor' value={value}
                                   onChange={onChange} required />
                            {show ? <IoMdEye className='absolute top-4 right-2 text-2xl text-mainColor cursor-pointer' onClick={() => { setShow(!show) }} /> : <IoMdEyeOff className='absolute top-4 right-2 text-2xl text-mainColor cursor-pointer' onClick={() => setShow(!show)} />}
                     </div>
              </>)
       }
       return (
              <>
                     <input type={type} placeholder={placeholder} className='w-full border-2 rounded-2xl border-mainColor outline-none px-2 py-3 text-2xl font-normal text-thirdColor' value={value}
                            onChange={onChange} required />
              </>

       )
}

export default InputCustom