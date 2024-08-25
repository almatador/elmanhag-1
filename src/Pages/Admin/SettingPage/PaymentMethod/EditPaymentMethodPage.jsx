import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import InputCustom from '../../../../Components/InputCustom';
import { Button } from '../../../../Components/Button';
import { useAuth } from '../../../../Context/Auth';
import { useNavigate, useParams } from 'react-router-dom';
import { paymentMethodEditContext } from '../../../../Layouts/Admin/EditPaymentMethodLayout';

const EditPaymentMethodPage = () => {
    const paymentMethodData = useContext(paymentMethodEditContext);

    const auth = useAuth();
    const [paymentContent, setPaymentContent] = useState({});
    const [thumbnails, setThumbnails] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1, { replace: true });
    };

    useEffect(() => {
      setPaymentContent(paymentMethodData);
      setTitle(paymentMethodData?.title || '');
      setThumbnails(paymentMethodData?.thumbnails || '');
      setStatus(paymentMethodData?.status || 0);
  }, [paymentMethodData]);


  const handleSubmitEdit = async (event) => {
    event.preventDefault();

    if (!thumbnails) {
        auth.toastError('Please enter the Thumbnails.');
        return;
    }
    if (!title) {
        auth.toastError('Please enter the Title.');
        return;
    }
    if (!description) {
      auth.toastError('Please enter the Description.');
      return;
    }
    if (!status) {
        auth.toastError('Please enter the status.');
        return;
    }

    setLoading(true);
    try {
        const requestData = {
            title: title,
            // description:description,
            thumbnail:thumbnails,
            status: status,
        };

        console.log('Submitting data:', requestData);

        const response = await axios.post(`https://bdev.elmanhag.shop/admin/Settings/paymentMethods/update/${paymentContent.id}`, requestData ,{
        headers: {
                Authorization: `Bearer ${auth.user.token}`,
        },
      });

        if (response.status === 200) {
            console.log('Payment Method added successfully');
            auth.toastSuccess('Payment Method added successfully!');
            handleGoBack()
        } else {
            console.error('Failed to add Payment Method:', response.status, response.statusText);
            auth.toastError('Failed to add Payment Method.');
        }
    } catch (error) {
        console.error('Error adding Payment Method:', error?.response?.data?.errors || 'Network error');

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
            <form onSubmit={handleSubmitEdit} className='w-full flex flex-col items-start justify-center gap-y-3'>
                <div className="grid md:gap-8 grid-cols-2 lg:w-[70%] sm:w-full">
                    <div className="w-full">
                        <InputCustom
                            type="text"
                            borderColor="secoundColor"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            width="w-full"
                        />
                    </div>
                    <div className="w-full">
                        <InputCustom
                            type="text"
                            borderColor="secoundColor"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            width="w-full"
                        />
                    </div>
                    <div className="w-full">
                        <InputCustom
                            type="text"
                            borderColor="secoundColor"
                            placeholder="Thumbnails"
                            value={thumbnails}
                            onChange={(e) => setThumbnails(e.target.value)}
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
  )
}

export default EditPaymentMethodPage
