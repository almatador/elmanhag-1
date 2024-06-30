import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Dashboard } from './Layouts/AllLayouts'
import Header from './Components/Header';
function App() {
  // const [student, setStudent] = useState(null);

  // useEffect(() => {
  //   const getToken = async () => {
  //     try {
  //       const response = await axios.get('https://my.elmanhag.shop/api/user_token', {
  //       });

  //       // setStudent(response.data);
  //       // console.log(response.data);
  //       localStorage.setItem("token", response.data.token)
  //     } catch (error) {
  //       console.error('Student data fetch error:', error);
  //     }
  //   };
  //   getToken();

  //   const fetchStudentData = async () => {
  //     try {
  //       // Retrieve token from localStorage or wherever it is stored
  //       const token = localStorage.getItem('token');

  //       // Make a GET request to fetch student data
  //       const response = await axios.post('https://my.elmanhag.shop/api/user_data', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         }
  //       });

  //       // Set student state with the data received
  //       setStudent(response.data);
  //       // console.log(response.data);
  //     } catch (error) {
  //       console.error('Student data fetch error:', error);
  //     }
  //   };
  //   fetchStudentData();

  // }, []);

  // if (!student) {
  //   return <div>Loading...</div>;
  // }


  return (
    <>
      <div className="flex gap-x-4 flex-col">
        <Header />
        <Dashboard />
        {/* <h2>Welcome {student}</h2>
      <p>Email: {student}</p> */}
      </div>
    </>
  )
}

export default App
