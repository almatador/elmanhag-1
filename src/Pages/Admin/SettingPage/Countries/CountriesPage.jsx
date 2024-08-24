import React, { useState, useEffect } from 'react';
import Table from '../../../../Components/Table';
import axios from 'axios';
import { useAuth } from '../../../../Context/Auth';
import Loading from '../../../../Components/Loading';

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
        setCountries(countries.filter(country => country.id !== id));
      } else {
        console.error('Failed to delete country:', response);
      }
    } catch (error) {
      console.error('Error deleting country:', error);
    }
  };

  if (!countries) {
    return (
      <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No countries data available</div>
    )
  }

  const tableData = countries.map((country, index) => ({
    id: country.id,
    number: index + 1,
    country: country.name,
    status: country.status,
  }));

  localStorage.setItem("Countries", JSON.stringify(countries));


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
          editPath="edit"
          handleDelete={handleDelete}
          pageName="Countries"
        />
      )}
    </>
  );
}

export default CountriesPage;


