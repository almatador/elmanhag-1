import axios from 'axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
       const [data, setData] = useState(null);
       const [error, setError] = useState(null);

       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');

       const [navigate, setNavigate] = useState(false);

       const handleSubmit = (event) => {
              event.preventDefault();
              // Handle RegisterPage logic here
              console.log('Email:', email);
              console.log('Password:', password);

              // POST request 
              axios({
                     method: 'post',
                     url: 'https://elmanhag.shop/backend/public/api/admin/auth/login',
                     data: {
                            email,
                            password,
                     }
              }).then(function (response) {
                     if (response.status === 200) {
                            setData(response.data.success);
                            console.log("response", response);
                            setNavigate(true); // Set navigation state
                     } else {
                            setError('Failed to post data');
                            console.log("error", error);
                     }
              }).catch(error => {
                     setError('There was an error posting the data!');
                     console.error(error);
              });
       };

       if (navigate) {
              return <Navigate to="/DashboardStudent" replace={true} />;
       }

       return (
              <div className="flex items-center justify-center min-h-screen bg-gray-100">
                     <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                            <h2 className="text-2xl font-bold text-center">RegisterPage</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                   <div>
                                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                          <input
                                                 id="email"
                                                 type="email"
                                                 value={email}
                                                 onChange={(e) => setEmail(e.target.value)}
                                                 required
                                                 className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          />
                                   </div>
                                   <div>
                                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                          <input
                                                 id="password"
                                                 type="password"
                                                 value={password}
                                                 onChange={(e) => setPassword(e.target.value)}
                                                 required
                                                 className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          />
                                   </div>
                                   <div>
                                          <button
                                                 type="submit"
                                                 className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                          >
                                                 Login
                                          </button>
                                   </div>
                            </form>
                            {error && <div className="text-red-500">{error}</div>}
                            {data && <div>{data} sss</div>}
                     </div>
              </div>
       );
};

export default RegisterPage;
