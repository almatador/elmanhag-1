import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputCustom from '../../../../Components/InputCustom'
import DropDownMenu from '../../../../Components/DropDownMenu'
import { Button } from '../../../../Components/Button'
import axios from 'axios'
import { useAuth } from '../../../../Context/Auth'
import TitleHeader from '../../../../Components/TitleHeader'

const EditCategoryPage = () => {
       const dropdownSelectParent = useRef();

       const navigate = useNavigate();

       const [adminData, setAdminData] = useState([])

       const [openSelectParent, setOpenSelectParent] = useState(false)
       const [selectParent, setSelectParent] = useState('Choose Parent')
       const [selectParentId, setSelectParentId] = useState('')

       const [isLoading, setIsLoading] = useState(false);


       const auth = useAuth();
       useEffect(() => {
              const adminData = JSON.parse(localStorage.getItem('students'));
              setAdminData(adminData)

       }, []); // Remove dependencies if you don't need to update on every change


       const handleOpenSelectParent = () => {
              setOpenSelectParent(!openSelectParent);
       }
       const handleSelectParent = (e) => {
              const inputElement = e.currentTarget.querySelector('.inputVal');
              const selectedOptionName = e.currentTarget.textContent.trim();
              const selectedOptionValue = inputElement ? inputElement.value : '';
              setOpenSelectParent(selectedOptionName);
              setSelectParent(parseInt(selectedOptionValue))
              setOpenSelectParent(false);
              console.log('Selected NameL:', selectedOptionName);
              console.log('Selected ValueL:', selectedOptionValue);
       }

       const handleGoBack = () => {
              navigate(-1, { replace: true });
       };

       const handleSubmitAdd = async (event) => {
              event.preventDefault();
              if (!selectParentId) {
                     auth.toastError('Please Select Parent.');
                     return;
              }

              setIsLoading(true)
              try {
                     const requestData = {
                            // name:,
                            // ar_name:,
                            // status:,
                            // tags:,
                            // thumbnail:,
                            // order:,

                     };

                     console.log('Submitting data:', requestData);

                     const response = await axios.post('https://bdev.elmanhag.shop/admin/category/add', requestData, {
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


       const handleClickOutside = (event) => {
              if (
                     (dropdownSelectParent.current && !dropdownSelectParent.current.contains(event.target))
              ) {
                     setOpenSelectParent(false);
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
                     <form onSubmit={handleSubmitAdd} className='w-full flex flex-col items-center justify-center gap-y-3'>
                            {/* <div className="w-full flex flex-wrap items-center justify-start gap-3">
                                   <div className="lg:w-[30%] sm:w-full">
                                          <DropDownMenu
                                                 ref={dropdownSelectParent}
                                                 handleOpen={handleOpenSelectParent}
                                                 handleOpenOption={handleSelectParent}
                                                 stateoption={selectParent}
                                                 openMenu={openSelectParent}
                                                 options={adminData.relations}
                                          />
                                   </div>
                                   <div className="lg:w-[30%] sm:w-full">
                                          ss    <InputCustom type={"number"} borderColor={"none"} placeholder={"Number"} value={studentNumber} onChange={(e => setStudentNumber(e.target.value))} />
                                   </div>

                            </div> */}
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

export default EditCategoryPage








