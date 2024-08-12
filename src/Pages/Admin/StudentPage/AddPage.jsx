import React, { useEffect, useRef, useState } from 'react'
import TitleHeader from '../../../Components/TitleHeader'
import { IoIosArrowDown } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import InputCustom from '../../../Components/InputCustom'
import DropDownMenu from '../../../Components/DropDownMenu'
import { CiGlobe } from 'react-icons/ci'
import { Button } from '../../../Components/Button'
import axios from 'axios'
import { useAuth } from '../../../Context/Auth'

const AddPage = () => {
       const dropdownCountryStudentRef = useRef();
       const dropdownCityStudentRef = useRef();
       const dropdownLanguageStudentRef = useRef();
       const dropdownRelationStudentRef = useRef();

       const navigate = useNavigate();

       const [studentName, setStudentName] = useState('')
       const [studentNumber, setStudentNumber] = useState('')
       const [studentAcademicYear, setStudentAcademicYear] = useState('')
       const [studentPassword, setStudentPassword] = useState('')
       const [studentEmail, setStudentEmail] = useState('')
       /* Parent State */
       const [parentName, setParentName] = useState('')
       const [parentNumber, setParentNumber] = useState('')
       const [parentPassword, setParentPassword] = useState('')
       const [parentEmail, setParentEmail] = useState('')

       const [studentCountry, setStudentCountry] = useState('Choose Country')
       const [studentCityState, setStudentCityState] = useState('City')
       const [Cities, setCities] = useState([])
      
       const [languageStudent, setLanguageStudent] = useState('English')

       const [relationStudent, setRelationStudent] = useState('Choose Relation')
       const [adminData, setAdminData] = useState([])

       const [openCountry, setOpenCountry] = useState(false);
       const [openCity, setOpenCity] = useState(false);
       const [openLanguage, setOpenLanguage] = useState(false);
       const [openRelation, setOpenRelation] = useState(false);


       const auth = useAuth();

       useEffect(() => {
              const adminData = JSON.parse(localStorage.getItem('students'));
              setAdminData(adminData)
       }, [studentCountry, studentCityState, relationStudent])

       const handleOpenCountryStudent = () => {
              setOpenCountry(!openCountry);
       }
       const handleOpenCityStudent = () => {
              setOpenCity(!openCity);
       }
       const handleOpenLanguageStudent = () => {
              setOpenLanguage(!openLanguage);

       }
       const handleCountryStudent = (e) => {
              const inputElement = e.currentTarget.querySelector('.inputRel');
              const selectedOptionName = e.currentTarget.textContent.trim();
              const selectedOptionValue = inputElement ? inputElement.value : '';
              // setLanguageStudent(selectedOptionName);
              // setOpenLanguage(false);
              console.log('Selected NameL:', selectedOptionName);
              console.log('Selected ValueL:', selectedOptionValue);
       }
       const handleCityStudent = (e) => {
              // const inputElement = e.currentTarget.querySelector('.inputRel');
              // const selectedOptionName = e.currentTarget.textContent.trim();
              // const selectedOptionValue = inputElement ? inputElement.value : '';
              // setLanguageStudent(selectedOptionName);
              // setOpenLanguage(false);
              // console.log('Selected NameL:', selectedOptionName);
              // console.log('Selected ValueL:', selectedOptionValue);
       }
       const handleLanguageStudent = (e) => {
              const inputElement = e.currentTarget.querySelector('.inputRel');
              const selectedOptionName = e.currentTarget.textContent.trim();
              const selectedOptionValue = inputElement ? inputElement.value : '';
              setLanguageStudent(selectedOptionName);
              setOpenLanguage(false);
              console.log('Selected NameL:', selectedOptionName);
              console.log('Selected ValueL:', selectedOptionValue);
       }

       const handleOpenRelationStudent = () => {
              setOpenRelation(!openRelation);

       }
       const handleRelationStudent = (e) => {
              const inputElement = e.currentTarget.querySelector('.inputRel');
              const selectedOptionName = e.currentTarget.textContent.trim();
              const selectedOptionValue = inputElement ? inputElement.value : '';

              setRelationStudent(selectedOptionName);
              setOpenRelation(false);

              console.log('Selected NameRel:', selectedOptionName);
              console.log('Selected ValueRel:', selectedOptionValue);
       };



       const handleGoBack = () => {
              navigate(-1, { replace: true })
       }


       const handleSubmitAdd = async () => {
              try {
                     const response = await axios.post('https://bdev.elmanhag.shop/admin/student/add',
                            {
                                   studentName,
                                   studentCountry,
                                   studentNumber,
                                   studentCity,
                                   studentAcademicYear,
                                   studentPassword,
                                   studentEmail,
                                   parentName,
                                   parentNumber,
                                   parentPassword,
                                   parentEmail,
                                   languageStudent,
                                   relationStudent,
                            },
                            {
                                   headers: {
                                          Authorization: `Bearer ${auth.user.token}`,
                                   },
                            })
                     if (response.status === 200) {
                            console.log('Student add successfully');

                            // handleGoBack()
                            auth.toast.success('Student add successfully!');
                            return true;
                     } else {
                            console.error('Failed to add student:', response.status, response.statusText);
                            auth.toast.success('Failed to add.');
                            return false;
                     }
              } catch (error) {
                     console.error('Failed to add student:', response.status, response.statusText);
                     console.error('Error add student:', error);
                     return false;
              }


       }
       const handleClickOutside = (event) => {
              if (
                     (dropdownLanguageStudentRef.current && !dropdownLanguageStudentRef.current.contains(event.target)) &&
                     (dropdownRelationStudentRef.current && !dropdownRelationStudentRef.current.contains(event.target))
              ) {
                     setOpenLanguage(false);
                     setOpenRelation(false);
              }
       };

       useEffect(() => {
              document.addEventListener('mousedown', handleClickOutside);
              return () => {
                     document.removeEventListener('mousedown', handleClickOutside);
              };
       }, []);
       return (
              <>
                     <div className="w-full flex items-center justify-between">
                            <button type='button' onClick={handleGoBack}>
                                   <IoIosArrowDown className="rotate-90 text-mainColor text-5xl" />
                            </button>
                            <div className="w-7/12">
                                   <TitleHeader text={"Add"} />
                            </div>
                     </div>
                     <form onSubmit={handleSubmitAdd} className='w-full flex flex-col items-center justify-center gap-y-3'>
                            {/* Student Deatils */}
                            <div className="w-full flex flex-wrap items-center justify-start gap-3">
                                   <div className="w-full">
                                          <TitleHeader size="3xl" text="Student" />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <InputCustom type={"text"} borderColor={"none"} placeholder={"Student Name"} value={studentName} onChange={(e => setStudentName(e.target.value))} />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          {/* <InputCustom type={"text"} borderColor={"none"} placeholder={"Country"} value={studentCountry} onChange={(e => setStudentCountry(e.target.value))} /> */}
                                          <DropDownMenu
                                                 ref={dropdownCountryStudentRef}
                                                 handleOpen={handleOpenCountryStudent}
                                                 handleOpenOption={handleCountryStudent}
                                                 stateoption={studentCountry}
                                                 openMenu={openCountry}
                                                 options={adminData.countries}
                                          />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <DropDownMenu
                                                 ref={dropdownLanguageStudentRef}
                                                 iconMenu={<CiGlobe />}
                                                 handleOpen={handleOpenLanguageStudent}
                                                 handleOpenOption={handleLanguageStudent}
                                                 stateoption={languageStudent}
                                                 openMenu={openLanguage}
                                                 options={[{ id: 0, name: 'English' }, { id: 1, name: 'Arabic' }]}
                                          />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <InputCustom type={"number"} borderColor={"none"} placeholder={"Number"} value={studentNumber} onChange={(e => setStudentNumber(e.target.value))} />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          {/* <InputCustom type={"text"} borderColor={"none"} placeholder={"City"} value={studentCity} onChange={(e => setStudentCity(e.target.value))} /> */}
                                          <DropDownMenu
                                                 ref={dropdownCityStudentRef}
                                                 handleOpen={handleOpenCityStudent}
                                                 handleOpenOption={handleCityStudent}
                                                 stateoption={studentCityState}
                                                 openMenu={openCity}
                                                 options={Cities}
                                          />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <InputCustom type={"text"} borderColor={"none"} placeholder={"Academic Year"} value={studentAcademicYear} onChange={(e => setStudentAcademicYear(e.target.value))} />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <InputCustom type={"email"} borderColor={"none"} placeholder={"Email"} value={studentEmail} onChange={(e => setStudentEmail(e.target.value))} />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <InputCustom type={"password"} borderColor={"none"} placeholder={"Password"} value={studentPassword} onChange={(e => setStudentPassword(e.target.value))} />
                                   </div>

                            </div>
                            {/* Parent Deatils */}
                            <div className="w-full flex flex-wrap items-center justify-start gap-3">
                                   <div className="w-full">
                                          <TitleHeader size="3xl" text="Parents" />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <InputCustom type={"text"} borderColor={"none"} placeholder={"Parent Name"} value={parentName} onChange={(e => setParentName(e.target.value))} />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <InputCustom type={"number"} borderColor={"none"} placeholder={"Number"} value={parentNumber} onChange={(e => setParentNumber(e.target.value))} />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <DropDownMenu
                                                 ref={dropdownRelationStudentRef}
                                                 handleOpen={handleOpenRelationStudent}
                                                 handleOpenOption={handleRelationStudent}
                                                 stateoption={relationStudent}
                                                 openMenu={openRelation}
                                                 options={adminData.relations}
                                          />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <InputCustom type={"email"} borderColor={"none"} placeholder={"Email"} value={parentEmail} onChange={(e => setParentEmail(e.target.value))} />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <InputCustom type={"password"} borderColor={"none"} placeholder={"Password"} value={parentPassword} onChange={(e => setParentPassword(e.target.value))} />
                                   </div>

                            </div>
                            {/* Buttons */}
                            <div className="w-full flex items-center justify-start gap-x-28 mt-5">

                                   <Button type='submit' Text={"Done"} BgColor="bg-mainColor" Color="text-white" Size='text-2xl' px='px-28' rounded='rounded-2xl' handleClick={handleSubmitAdd} />

                                   <button onClick={handleGoBack} className='text-2xl text-mainColor'>Cancel</button>
                            </div>
                     </form>
              </>
       )
}

export default AddPage