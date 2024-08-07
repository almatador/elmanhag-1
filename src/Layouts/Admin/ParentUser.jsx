import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ButtonAdd } from '../../Components/Button'

const ParentUser = () => {
       const navigate = useNavigate();

       const handleAddClick = () => {
              navigate('addParent');
       };
       return (
              <>

                     <ButtonAdd Text={"Add"} BgColor={"mainColor"} Color={"secoundColor"} Size={"xl"} handelClick={handleAddClick} />
                     ParentUser</>
       )
}

export default ParentUser