import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import InputCustom from '../../../../Components/InputCustom';
import { Button } from '../../../../Components/Button';
import { useAuth } from '../../../../Context/Auth';
import { useNavigate, useParams } from 'react-router-dom';
import { countryEditContext } from '../../../../Layouts/Admin/EditCountryLayout';

const EditCountryPage = () => {
    const countryData = useContext(countryEditContext)

    const auth = useAuth();
    const [countryContent,setCountryContent] = useState()
    const [nameEn, setNameEn] = useState('');
    const [nameAr, setNameAr] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    console.log('countryData',countryData)
    useEffect(()=>{
        setCountryContent(countryData)
        setNameEn(countryData?.name || '')
        setNameAr(countryData?.name_ar || '')
        setStatus(countryData?.status || 0)
    },[countryData])
    console.log('countryContent',countryContent)
    console.log('nameEn',nameEn)

    // const { countryId } = useParams();  // Capture the ID from the URL
    // Retrieve countries from localStorage
    // useEffect(() => {
    //     const countries = JSON.parse(localStorage.getItem('Countries')) || [];
    //     console.log('Countries from local storage:', countries); // Debugging log
    
    //     if (countries.length > 0) {
    //         const country = countries.find(c => c.id === parseInt(countryId));
    //         console.log('Selected Country:', country); // Debugging log
    
    //         if (country) {
    //             setNameEn(country.name || '');
    //             setNameAr(country.ar_name || '');
    //             setStatus(country.status);
    //         } else {
    //             console.warn('No country found with the given ID:', countryId); // Warn if no match found
    //         }
    //     } else {
    //         console.warn('No countries available in local storage.'); // Warn if no countries are found
    //     }
    // }, [countryId]);
    

    const handleGoBack = () => {
        navigate(-1, { replace: true });
    };

    const handleSubmitEdit = async (event) => {
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

            const response = await axios.put(`https://bdev.elmanhag.shop/admin/Settings/countries/update/${countryContent.id}`, requestData, {
                headers: {
                    Authorization: `Bearer ${auth.user.token}`,
                },
            });

            if (response.status === 200) {
                auth.toastSuccess('Country updated successfully!');
                handleGoBack();
                        } else {
                auth.toastError('Failed to update Country.');
            }
        } catch (error) {
            console.error('Error updating Country:', error?.response?.data?.errors || 'Network error');
            auth.toastError('Error updating Country.');
        } finally {
            setLoading(false);
        }      
    };

    return (
        <>
            <form onSubmit={handleSubmitEdit} className='w-full flex flex-col items-start justify-center gap-y-3'>
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
                        handleClick={handleSubmitEdit}
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

export default EditCountryPage;











