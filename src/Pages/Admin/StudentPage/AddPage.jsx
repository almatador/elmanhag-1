import React, { useEffect, useRef, useState } from 'react'
import TitleHeader from '../../../Components/TitleHeader'
import { useNavigate } from 'react-router-dom'
import InputCustom from '../../../Components/InputCustom'
import DropDownMenu from '../../../Components/DropDownMenu'
import { CiGlobe } from 'react-icons/ci'
import { Button } from '../../../Components/Button'
import axios from 'axios'
import { useAuth } from '../../../Context/Auth'
import { LiaObjectGroup } from 'react-icons/lia'
import Loading from '../../../Components/Loading'
import HeaderPageSection from '../../../Components/HeaderPageSection'

const AddPage = () => {
       const dropdownCountryStudentRef = useRef();
       const dropdownCityStudentRef = useRef();
       const dropdownCategoryStudentRef = useRef();
       const dropdownLanguageStudentRef = useRef();
       const dropdownRelationStudentRef = useRef();

       const navigate = useNavigate();

       const [adminData, setAdminData] = useState([])


       const [studentName, setStudentName] = useState('')
       const [studentNumber, setStudentNumber] = useState('')
       const [studentAcademicYear, setStudentAcademicYear] = useState('')
       const [studentEmail, setStudentEmail] = useState('')
       const [studentPassword, setStudentPassword] = useState('')
       /* Parent State */
       const [parentName, setParentName] = useState('')
       const [parentNumber, setParentNumber] = useState('')
       const [parentPassword, setParentPassword] = useState('')
       const [parentEmail, setParentEmail] = useState('')

       const [studentCountry, setStudentCountry] = useState('Choose Country')
       const [countryId, setCountryId] = useState('')
       const [countries, setCountries] = useState([])
       const [studentCityState, setStudentCityState] = useState('City')
       const [cityId, setCityId] = useState('')
       const [cities, setCities] = useState([])
       const [categoryState, setCategoryState] = useState('Academic Year')
       const [categoryId, setCategoryId] = useState('')
       const [category, setCategory] = useState([])

       const [languageStudent, setLanguageStudent] = useState('Type of Learning')
       const [languageId, setLanguageId] = useState('')

       const [relationStudent, setRelationStudent] = useState('Choose Relation')
       const [relationId, setRelationId] = useState('')


       const [openCountry, setOpenCountry] = useState(false);
       const [openCity, setOpenCity] = useState(false);
       const [openLanguage, setOpenLanguage] = useState(false);
       const [openCategory, setOpenCategory] = useState(false);
       const [openRelation, setOpenRelation] = useState(false);

       const [isLoading, setIsLoading] = useState(false);


       const auth = useAuth();
       useEffect(() => {
              const adminData = JSON.parse(localStorage.getItem('students'));
              setAdminData(adminData)
              setCountries(adminData.countries)
              setCategory(adminData.categories)
       }, []); // Remove dependencies if you don't need to update on every change


       const handleOpenCountryStudent = () => {
              setOpenCountry(!openCountry);
              setOpenCity(false);
              setOpenLanguage(false);
              setOpenRelation(false);
       }
       const handleOpenCityStudent = () => {
              setOpenCountry(false);
              setOpenCity(!openCity);
              setOpenLanguage(false);
              setOpenCategory(false);
              setOpenRelation(false);
       }
       const handleOpenLanguageStudent = () => {
              setOpenCountry(false);
              setOpenCity(false);
              setOpenLanguage(!openLanguage);
              setOpenRelation(false);

       }
       const handleOpenCategoryStudent = () => {
              setOpenCountry(false);
              setOpenCity(false);
              setOpenLanguage(false);
              setOpenCategory(!openCategory);
              setOpenRelation(false);

       }
       const handleCountryStudent = (e) => {
              const inputElement = e.currentTarget.querySelector('.inputVal');
              const selectedOptionName = e.currentTarget.textContent.trim();
              const selectedOptionValue = inputElement ? parseInt(inputElement.value) : '';
              const cities = adminData.cities.filter((city) => city.country_id === selectedOptionValue)
              setStudentCountry(selectedOptionName);
              setCountryId(selectedOptionValue)
              setOpenCountry(false);
              setStudentCityState(cities.length > 0 ? 'City' : "No cities available")
              setCities(cities)

              console.log('Selected NameL:', selectedOptionName);
              console.log('Selected ValueL:', selectedOptionValue);
       }
       const handleCityStudent = (e) => {
              const inputElement = e.currentTarget.querySelector('.inputVal');
              const selectedOptionName = e.currentTarget.textContent.trim();
              const selectedOptionValue = inputElement ? inputElement.value : '';
              setStudentCityState(selectedOptionName);
              setCityId(parseInt(selectedOptionValue))
              setOpenCity(false);
              console.log('Selected NameL:', selectedOptionName);
              console.log('Selected ValueL:', selectedOptionValue);
       }
       const handleLanguageStudent = (e) => {
              const inputElement = e.currentTarget.querySelector('.inputVal');
              const selectedOptionName = e.currentTarget.textContent.trim();
              const selectedOptionValue = inputElement ? inputElement.value : '';
              setLanguageStudent(selectedOptionName);
              setLanguageId(parseInt(selectedOptionValue))
              setOpenLanguage(false);
              console.log('Selected NameL:', selectedOptionName);
              console.log('Selected ValueL:', selectedOptionValue);
       }
       const handleCategoryStudent = (e) => {
              const inputElement = e.currentTarget.querySelector('.inputVal');
              const selectedOptionName = e.currentTarget.textContent.trim();
              const selectedOptionValue = inputElement ? inputElement.value : '';
              setCategoryState(selectedOptionName);
              setCategoryId(parseInt(selectedOptionValue))
              setOpenCategory(false);
              console.log('Selected NameL:', selectedOptionName);
              console.log('Selected ValueL:', selectedOptionValue);
       }

       const handleOpenRelationStudent = () => {
              setOpenLanguage(false);
              setOpenCountry(false);
              setOpenCity(false);
              setOpenRelation(!openRelation);

       }
       const handleRelationStudent = (e) => {
              const inputElement = e.currentTarget.querySelector('.inputVal');
              const selectedOptionName = e.currentTarget.textContent.trim();
              const selectedOptionValue = inputElement ? inputElement.value : '';

              setRelationStudent(selectedOptionName);
              setRelationId(parseInt(selectedOptionValue))

              setOpenRelation(false);

              console.log('Selected NameRel:', selectedOptionName);
              console.log('Selected ValueRel:', selectedOptionValue);
       };



       const handleGoBack = () => {
              navigate(-1, { replace: true });
       };

       const handleSubmitAdd = async (event) => {
              event.preventDefault();
              if (!countryId) {
                     auth.toastError('Please Choose Country.');
                     return;
              }
              if (languageId === "") {
                     auth.toastError('Please Choose Language.');
                     console.log("languageIdss", languageId)
                     return;
              }
              if (!cityId) {
                     auth.toastError('Please Choose City.');
                     return;
              }
              if (!categoryId) {
                     auth.toastError('Please Choose Category.');
                     return;
              }
              if (!relationId) {
                     auth.toastError('Please Choose Relation.');
                     return;
              }

              setIsLoading(true)
              try {
                     const requestData = {
                            name: studentName,
                            phone: studentNumber,
                            education_id: languageId,
                            country_id: countryId,
                            city_id: cityId,
                            category_id: categoryId,
                            email: studentEmail,
                            password: studentPassword,
                            parent_name: parentName,
                            parent_phone: parentNumber,
                            parent_password: parentPassword,
                            parent_email: parentEmail,
                            relation_id: relationId,
                     };

                     console.log('Submitting data:', requestData);

                     const response = await axios.post('https://bdev.elmanhag.shop/admin/student/add', requestData, {
                            headers: {
                                   Authorization: `Bearer ${auth.user.token}`,
                            },
                     });

                     if (response.status === 200) {
                            // setIsLoading(false)
                            console.log('Student added successfully');
                            handleGoBack();
                            setIsLoading(false)
                            auth.toastSuccess('Student added successfully!');
                            console.log('Submitting success data:', requestData);

                     } else {
                            setIsLoading(false)
                            console.log('Submitting Error data:', requestData);
                            console.error('Failed to add student:', response.status, response.statusText);
                            auth.toastError('Failed to add student.');
                     }
              } catch (error) {
                     setIsLoading(false)
                     // Log the error for debugging
                     console.error('Error adding student:', error?.response?.data.errors || 'Network error');

                     // Extract error messages from the response
                     const errorMessages = error?.response?.data.errors;
                     let errorMessageString = 'Error occurred';

                     if (errorMessages) {
                            // Combine error messages into a single string
                            errorMessageString = Object.values(errorMessages).flat().join(' ');
                     }

                     // Display the error message in a toast
                     auth.toastError('Error', errorMessageString);
              }

       };
       // const handleSubmitAdd = async (event) => {
       //        event.preventDefault();

       //        if (!studentName || !studentEmail || !studentPassword || !parentName || !parentEmail || !parentPassword) {
       //               auth.toastError('Please fill in all required fields.');
       //               return;
       //        }

       //        try {
       //               const requestData = {
       //                      name: studentName,
       //                      phone: studentNumber || null,
       //                      language: languageId || null,
       //                      country_id: countryId || null,
       //                      city_id: cityId || null,
       //                      category_id: categoryId || null,
       //                      email: studentEmail,
       //                      password: studentPassword,
       //                      parent_name: parentName,
       //                      parent_phone: parentNumber || null,
       //                      parent_password: parentPassword,
       //                      parent_email: parentEmail,
       //                      relation_id: relationId || null,
       //               };

       //               console.log('Submitting data:', requestData);

       //               const response = await axios.post('https://bdev.elmanhag.shop/admin/student/add', requestData, {
       //                      headers: {
       //                             Authorization: `Bearer ${auth.user.token}`,
       //                      },
       //               });

       //               if (response.status === 200) {
       //                      console.log('Student added successfully');
       //                      auth.toastSuccess('Student added successfully!');
       //               } else {
       //                      console.error('Failed to add student:', response.status, response.statusText);
       //                      auth.toastError('Failed to add student.');
       //               }
       //        } catch (error) {
       //               console.error('Error adding student:', error?.response?.data.errors || 'Network error');
       //               auth.toastError('Error adding student.');
       //        }
       // };



       const handleClickOutside = (event) => {
              if (
                     (dropdownLanguageStudentRef.current && !dropdownLanguageStudentRef.current.contains(event.target)) &&
                     (dropdownRelationStudentRef.current && !dropdownRelationStudentRef.current.contains(event.target)) &&
                     (dropdownCountryStudentRef.current && !dropdownCountryStudentRef.current.contains(event.target)) &&
                     (dropdownCategoryStudentRef.current && !dropdownCategoryStudentRef.current.contains(event.target)) &&
                     (dropdownCityStudentRef.current && !dropdownCityStudentRef.current.contains(event.target))
              ) {
                     setOpenCountry(false);
                     setOpenCity(false);
                     setOpenLanguage(false);
                     setOpenCategory(false);
                     setOpenRelation(false);
              }
       };

       useEffect(() => {
              document.addEventListener('mousedown', handleClickOutside);
              return () => {
                     document.removeEventListener('mousedown', handleClickOutside);
              };
       }, []);

       // if (isLoading) {
       //        return (
       //               <div className="w-1/4 h-screen flex items-center justify-center m-auto">
       //                      <Loading />
       //               </div>
       //        )
       // }

       return (
              <>
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
                                                 options={countries}
                                          />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          <DropDownMenu
                                                 ref={dropdownLanguageStudentRef}
                                                 handleOpen={handleOpenLanguageStudent}
                                                 handleOpenOption={handleLanguageStudent}
                                                 stateoption={languageStudent}
                                                 openMenu={openLanguage}
                                                 options={adminData.education}
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
                                                 options={cities}
                                          />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          {/* <InputCustom type={"text"} borderColor={"none"      } placeholder={"Academic Year"} value={studentAcademicYear} onChange={(e => setStudentAcademicYear(e.target.value))} /> */}
                                          <DropDownMenu
                                                 ref={dropdownCategoryStudentRef}
                                                 handleOpen={handleOpenCategoryStudent}
                                                 handleOpenOption={handleCategoryStudent}
                                                 stateoption={categoryState}
                                                 openMenu={openCategory}
                                                 options={category}
                                          />
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
                            <div className="w-full flex sm:flex-col lg:flex-row items-center justify-start sm:gap-y-5 lg:gap-x-28 sm:my-8 lg:my-0">

                                   {/* <Button type='submit' Text={"Done"} BgColor="bg-mainColor" Color="text-white" Size='text-2xl' px='px-28' rounded='rounded-2xl' handleClick={handleSubmitAdd} /> */}
                                   <div className="flex items-center justify-center w-72">
                                          <Button type='submit' Text={"Done"} BgColor="bg-mainColor" Color="text-white" Width='full' Size='text-2xl' px='px-28' rounded='rounded-2xl' stateLoding={isLoading} />
                                   </div>

                                   <button onClick={handleGoBack} className='text-2xl text-mainColor'>Cancel</button>
                            </div>
                     </form>
              </>
       )
}

export default AddPage