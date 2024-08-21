import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const InputCustom = ({ type, borderColor = "none", placeholder, value, readonly = false, onChange, onClick }) => {
       const [show, setShow] = useState(false)
       if (type === "password") {
              return (<>
                     <div className="relative w-full">
                            <input type={show ? "text" : "password"} placeholder={placeholder} className={`w-full border-2 rounded-2xl outline-none px-2 py-3 text-2xl font-normal text-thirdColor border-${borderColor}`} value={value}
                                   onChange={onChange} required />
                            {show ? <IoMdEye className='absolute top-4 right-2 text-2xl text-mainColor cursor-pointer' onClick={() => { setShow(!show) }} /> : <IoMdEyeOff className='absolute top-4 right-2 text-2xl text-mainColor cursor-pointer' onClick={() => setShow(!show)} />}
                     </div>
              </>)
       }
       return (
              <>
                     <input type={type}
                            placeholder={placeholder}
                            className={`w-full border-2 rounded-2xl border-${borderColor} 
                       outline-none px-2 py-3 text-2xl font-normal text-thirdColor`}
                            value={value}
                            onChange={onChange}
                            onClick={onClick}
                            readOnly={readonly}
                            required />
              </>

       )
}

export default InputCustom