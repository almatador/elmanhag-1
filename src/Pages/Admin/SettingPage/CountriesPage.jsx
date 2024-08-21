import React, { useState, useEffect } from 'react';
import Table from '../../../Components/Table';
import axios from 'axios';
import { useAuth } from '../../../Context/Auth';
import Loading from '../../../Components/Loading';

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();

  const headers = ["#", "Country", "Status", "Actions"];

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://bdev.elmanhag.shop/admin/Settings/countries', {
        headers: {
          Authorization: `Bearer ${auth.user.token}`
        }
      });
      if (response.status === 200) {
        console.log(response.data);
        setCountries(response.data.countries || []);
      }
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://bdev.elmanhag.shop/admin/Settings/countries/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.user.token}`
        }
      });

      if (response.status === 200) {
        console.log("Deleted country with id:", id);
        // Update the countries state to remove the deleted country
        setCountries(countries.filter(country => country.id !== id));
      } else {
        console.error('Failed to delete country:', response);
      }
    } catch (error) {
      console.error('Error deleting country:', error);
    }
  };

  if (!countries) {
    return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No countries data available</div>;
}

  const tableData = countries.map((country, index) => ({
    id: country.id,
    number: index + 1,
    country: country.name,
    status: country.status,
  }));

  return (
    <>
      {loading ? (
       <div className="w-1/4 h-screen flex items-center justify-center m-auto">
       <Loading />
     </div>
      ) : (
        <Table
          headers={headers}
          data={tableData}
          editPath="/dashboardAdmin/countries/addcountry"
          handleDelete={handleDelete}
          pageName = "Countries"
        />
      )}
    </>
  );
}

export default CountriesPage;






//code for add country page 

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import InputCustom from '../../../Components/InputCustom';
// import { Button } from '../../../Components/Button';
// import TitleHeader from '../../../Components/TitleHeader';

// const AddCountry = () => {
//     const { id } = useParams(); // Get the country ID from the URL
//     const [nameEn, setNameEn] = useState('');
//     const [nameAr, setNameAr] = useState('');
//     const [status, setStatus] = useState('');
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         if (id) {
//             // Fetch the country data based on the id and populate the fields
//             // Example:
//             // fetchCountry(id).then(data => {
//             //     setNameEn(data.nameEn);
//             //     setNameAr(data.nameAr);
//             //     setStatus(data.status);
//             // });
//         }
//     }, [id]);

//     const handleSubmit = () => {
//         setLoading(true);
//         // Perform submit actions here
//         // Simulate a delay
//         setTimeout(() => setLoading(false), 2000);
//     };

//     return(
//         <>
//             <div className="flex flex-col gap-y-4">
//                 <div className="flex-1 text-center">
//                     <TitleHeader text={id ? "Edit Country" : "Add Country"} spaceBottom={3} />
//                 </div>
//                 <div className="p-6 w-[700px] h-[1024px]">
//                     <div className="grid grid-cols-2 gap-8 mb-20">
//                         <InputCustom
//                             type="text"
//                             borderColor="secoundColor"
//                             placeholder="Name En"
//                             value={nameEn}
//                             onChange={(e) => setNameEn(e.target.value)}
//                             width="w-full"
//                         />
//                         <InputCustom
//                             type="text"
//                             borderColor="secoundColor"
//                             placeholder="Name Ar"
//                             value={nameAr}
//                             onChange={(e) => setNameAr(e.target.value)}
//                             width="w-full"
//                         />
//                         <InputCustom
//                             type="text"
//                             borderColor="secoundColor"
//                             placeholder="Status"
//                             value={status}
//                             onChange={(e) => setStatus(e.target.value)}
//                             width="w-full"
//                         />
//                     </div>
//                     <div className="flex gap-4">
//                         <Button
//                             stateLoading={loading}
//                             Width="64"
//                             Text="Done"
//                             handleClick={handleSubmit}
//                         />
//                         <Button
//                             stateLoading={false}
//                             Width="64"
//                             Text="Cancel"
//                             Color="text-mainColor"
//                             BgColor="bg-thirdBgColor"
//                             handleClick={() => console.log('Cancel clicked')}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AddCountry;