import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';

const LoginPage = () => {
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [data, setData] = useState(null);
       const [type, setType] = useState('');
       const [error, setError] = useState('');
       const [isloading, setIsloading] = useState(false);


       const navigate = useNavigate();

       // const [type, setType] = useState('');

       useEffect(() => {
              if (type === "admin" || type === "super admin") {
                     navigate("/DashboardAdmin/Dashboard", { replace: true });
                     setIsloading(false)
              } else if (type === "student") {
                     navigate("/DashboardStudent/Dashboard", { replace: true });
                     setIsloading(false)
              }
       }, [type]);

       const handleSubmit = async (event) => {
              event.preventDefault();

              // Ensure email and password are defined
              if (!email || !password) {
                     console.error("Email or Password is missing");
                     return;
              }

              console.log('Email:', email);
              console.log('Password:', password);

              setIsloading(true)
              try {
                     const response = await axios.post('https://bdev.elmanhag.shop/api/admin/auth/login', {
                            email,
                            password,
                     });

                     if (response.status === 200) {
                            setData(response.data.success);
                            setType(response.data.detailes.type);
                            console.log("response", response);
                     } else {
                            setError('Failed to post data');
                            console.log("error", error);
                     }
              } catch (error) {
                     setError('There was an error posting the data!');
                     console.error(error);
              }
              console.log("data", data);
              console.log("type", type);

       };
       if (isloading) {
              return (
                     <div className="w-1/4 h-screen flex items-center justify-center m-auto">
                            <Loading />
                     </div>
              )
       }


       return (
              <>

                     <div className="flex items-center justify-center min-h-screen bg-gray-100">
                            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                                   <h2 className="text-2xl font-bold text-center">Login Page</h2>
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
                                          {/* <Loading /> */}
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
              </>
       );
};

export default LoginPage;
