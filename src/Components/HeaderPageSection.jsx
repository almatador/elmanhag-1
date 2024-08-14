import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import TitleHeader from './TitleHeader'

const HeaderPageSection = ({ handleClick, name }) => {
       return (
              <>
                     <div className="w-full flex items-center justify-between">
                            <button type='button' onClick={handleClick}>
                                   <IoIosArrowDown className="rotate-90 text-mainColor text-5xl" />
                            </button>
                            <div className="w-7/12">
                                   <TitleHeader text={name} />
                            </div>
                     </div>
              </>
       )
}

export default HeaderPageSection