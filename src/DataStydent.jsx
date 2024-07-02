import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataStydent = () => {
       // const [student, setStudent] = useState(null);
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
                     } catch (error) {
                            console.error('Data fetch error:', error);
                     }
              };

              fetchData(); // Call the fetchData function when the component mounts

       }, []); // Empty dependency array ensures this runs once on mount


       if (!token) {
              return <div>Loading...</div>;
       }
}

export default DataStydent