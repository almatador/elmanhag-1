import React, { useEffect, useState } from 'react'
import Button from "./Button"
import axios from 'axios';

const Header = () => {
       const [student, setStudent] = useState(null); // Initialize student state to null
       const [token, setToken] = useState(null);

       useEffect(() => {
              const fetchData = async () => {
                     try {
                            // Fetch token from API
                            const tokenResponse = await axios.get('https://my.elmanhag.shop/api/user_token');
                            const newToken = tokenResponse.data.token;

                            // Set token state and store in localStorage
                            setToken(newToken);
                            localStorage.setItem("token", newToken);

                            // Use token to fetch student data
                            const studentDataResponse = await axios.post('https://my.elmanhag.shop/api/user_data', null, {
                                   headers: {
                                          Authorization: `Bearer ${newToken}`, // Use the newly fetched token
                                   },
                            });

                            console.log('Student data:', studentDataResponse.data);
                            // Set student state with the fetched data
                            setStudent(studentDataResponse.data);
                            localStorage.setItem("studentData", JSON.stringify(studentDataResponse.data)); // Store as JSON string

                     } catch (error) {
                            console.error('Data fetch error:', error);
                     }
              };

              fetchData(); // Call the fetchData function when the component mounts

       }, []); // Empty dependency array ensures this runs once on mount

       if (!token || !student) { // Check if token or student data is not yet available
              return <div>Loading...</div>;
       }

       return (
              <>
                     <div className="w-full flex items-center justify-between m-2 mr-2 p-4 shadow-md rounded-lg">
                            <div>
                                   {/* Display student name */}
                                   <span className='text-2xl font-medium text-mainColor'>أهلا بك {student.user_data.name}</span>
                            </div>
                            <Button Text="تسجيل خروج" BgColor="#D01025" Color="#fff" Size="xl" />
                     </div>
              </>
       );
};


export default Header