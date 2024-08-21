import React, { useState } from 'react';
import axios from 'axios';
import InputCustom from '../../../../Components/InputCustom';
import { Button } from '../../../../Components/Button';
import { useAuth } from '../../../../Context/Auth'
import { useNavigate } from 'react-router-dom'



const AddCountryPage = () => {
    const auth = useAuth();
    const [nameEn, setNameEn] = useState('');
    const [nameAr, setNameAr] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate(-1, { replace: true });
      };
      
    const handleSubmitAdd = async (event) => {
        event.preventDefault();

        if (!nameEn) {
            auth.toastError('Please enter the English name.');
            return;
        }
        if (!nameAr) {
            auth.toastError('Please enter the Arabic name.');
            return;
        }
        if (!status) {
            auth.toastError('Please enter the status.');
            return;
        }

        setLoading(true);
        try {
            const requestData = {
                name: nameEn,
                ar_name: nameAr,
                status: status,
            };

            console.log('Submitting data:', requestData);

            const response = await axios.post('https://bdev.elmanhag.shop/admin/Settings/countries/add', requestData ,{
              headers: {
                     Authorization: `Bearer ${auth.user.token}`,
              },
       });

            if (response.status === 200) {
                console.log('Country added successfully');
                auth.toastSuccess('Country added successfully!');
                handleGoBack()
            } else {
                console.error('Failed to add country:', response.status, response.statusText);
                auth.toastError('Failed to add country.');
            }
        } catch (error) {
            console.error('Error adding country:', error?.response?.data?.errors || 'Network error');

            const errorMessages = error?.response?.data?.errors;
            let errorMessageString = 'Error occurred';

            if (errorMessages) {
                errorMessageString = Object.values(errorMessages).flat().join(' ');
            }

            auth.toastError('Error', errorMessageString);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <form onSubmit={handleSubmitAdd} className='w-full flex flex-col items-start justify-center gap-y-3'>
                <div className="grid md:gap-8 grid-cols-2 lg:w-[70%] sm:w-full">
                    <div className="w-full">
                        <InputCustom
                            type="text"
                            borderColor="secoundColor"
                            placeholder="Name En"
                            value={nameEn}
                            onChange={(e) => setNameEn(e.target.value)}
                            width="w-full"
                        />
                    </div>
                    <div className="w-full">
                        <InputCustom
                            type="text"
                            borderColor="secoundColor"
                            placeholder="Name Ar"
                            value={nameAr}
                            onChange={(e) => setNameAr(e.target.value)}
                            width="w-full"
                        />
                    </div>
                    <div className="w-full">
                        <InputCustom
                            type="text"
                            borderColor="secoundColor"
                            placeholder="Status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            width="w-full"
                        />
                    </div>
                </div>
                <div className="flex gap-4 mt-6">
                    <Button
                        stateLoading={loading}
                        Width="64"
                        Text="Done"
                        handleClick={handleSubmitAdd}
                    />
                    <Button
                        stateLoading={false}
                        Width="64"
                        Text="Cancel"
                        Color="text-mainColor"
                        BgColor="bg-thirdBgColor"
                        handleClick={handleGoBack}
                    />
                </div>
            </form>
        </>
    );
};

export default AddCountryPage;


// import React, { useState } from 'react';
// import axios from 'axios';
// import InputCustom from '../../../../Components/InputCustom';
// import { Button } from '../../../../Components/Button';
// import { useAuth } from '../../../../Context/Auth'
// import Loading from '../../../../Components/Loading';



// const AddCountryPage = () => {
//     const auth = useAuth();
//     const [nameEn, setNameEn] = useState('');
//     const [nameAr, setNameAr] = useState('');
//     const [status, setStatus] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleGoBack = () => {
//         navigate(-1, { replace: true });
//       };

//     const handleSubmitAdd = async (event) => {
//         event.preventDefault();

//         if (!nameEn) {
//             auth.toastError('Please enter the English name.');
//             return;
//         }
//         if (!nameAr) {
//             auth.toastError('Please enter the Arabic name.');
//             return;
//         }
//         if (!status) {
//             auth.toastError('Please enter the status.');
//             return;
//         }

//         setIsLoading(true);

//         try {
//             const requestData = {
//                 name: nameEn,
//                 ar_name: nameAr,
//                 status: status,
//             };

//             console.log('Submitting data:', requestData);

//             const response = await axios.post('https://bdev.elmanhag.shop/admin/Settings/countries/add', requestData ,{
//               headers: {
//                      Authorization: `Bearer ${auth.user.token}`,
//               },
//        });

//             if (response.status === 200) {
//                 console.log('Country added successfully');
//                 handleGoBack();
//                 setIsLoading(false)
//                 auth.toastSuccess('Country added successfully!');
//             } else {
//                 setIsLoading(false)
//                 console.log('Submitting Error data:', requestData);
//                 console.error('Failed to add country:', response.status, response.statusText);
//                 auth.toastError('Failed to add country.');
//             }
//         }
//          catch (error) {
//             setIsLoading(false)
//                      // Log the error for debugging
//                      console.error('Error adding student:', error?.response?.data.errors || 'Network error');

//                      // Extract error messages from the response
//                      const errorMessages = error?.response?.data.errors;
//                      let errorMessageString = 'Error occurred';

//                      if (errorMessages) {
//                             // Combine error messages into a single string
//                             errorMessageString = Object.values(errorMessages).flat().join(' ');
//                      }

//                      // Display the error message in a toast
//                      auth.toastError('Error', errorMessageString); 
//         } 
//         // finally {
//         //     setIsLoading(false);
//         // }
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmitAdd} className='w-full flex flex-col items-start justify-center gap-y-3'>
//                 <div className="grid md:gap-8 grid-cols-2 lg:w-[70%] sm:w-full">
//                     <div className="w-full">
//                         <InputCustom
//                             type="text"
//                             borderColor="secoundColor"
//                             placeholder="Name En"
//                             value={nameEn}
//                             onChange={(e) => setNameEn(e.target.value)}
//                             width="w-full"
//                         />
//                     </div>
//                     <div className="w-full">
//                         <InputCustom
//                             type="text"
//                             borderColor="secoundColor"
//                             placeholder="Name Ar"
//                             value={nameAr}
//                             onChange={(e) => setNameAr(e.target.value)}
//                             width="w-full"
//                         />
//                     </div>
//                     <div className="w-full">
//                         <InputCustom
//                             type="text"
//                             borderColor="secoundColor"
//                             placeholder="Status"
//                             value={status}
//                             onChange={(e) => setStatus(e.target.value)}
//                             width="w-full"
//                         />
//                     </div>
//                 </div>
//                 <div className="flex gap-4 mt-6">
//                     <Button
//                         stateLoading={isLoading}
//                         Width="64"
//                         Text="Done"
//                         handleClick={handleSubmitAdd}
//                     />
//                     <Button
//                         stateLoading={false}
//                         Width="64"
//                         Text="Cancel"
//                         Color="text-mainColor"
//                         BgColor="bg-thirdBgColor"
//                         handleClick={handleGoBack}
//                     />
//                 </div>
//             </form>
//         </>
//     );
// };

// export default AddCountryPage;

