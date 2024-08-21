import React, { useState, useEffect } from 'react';
import Table from '../../../../Components/Table';
import axios from 'axios';
import { useAuth } from '../../../../Context/Auth';
import Loading from '../../../../Components/Loading';

const CitiesPage = () => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();

  const headers = ["#", "City", "Country", "Status", "Actions"];

  const fetchCities = async () => {
    try {
      const response = await axios.get('https://bdev.elmanhag.shop/admin/Settings/cities', {
        headers: {
          Authorization: `Bearer ${auth.user.token}`
        }
      });
      if (response.status === 200) {
        console.log('Cities Data:', response.data.cities);
        setCities(response.data.cities || []);
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://bdev.elmanhag.shop/admin/Settings/countries', {
        headers: {
          Authorization: `Bearer ${auth.user.token}`
        }
      });
      if (response.status === 200) {
        console.log('Countries Data:', response.data.countries);
        setCountries(response.data.countries || []);
      }
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([fetchCities(), fetchCountries()]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getCountryNameById = (countryId) => {
    const id = Number(countryId);
    const country = countries.find(c => Number(c.id) === id);
    return country ? country.name : 'Unknown';
  };

  const tableData = cities.map((city, index) => ({
    id: city.id,
    number: index + 1,
    city: city.name,
    country: getCountryNameById(city.country_id), // Use country_id from the city data
    status: city.status,
  }));

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://bdev.elmanhag.shop/admin/Settings/cities/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.user.token}`
        }
      });

      if (response.status === 200) {
        console.log("Deleted item with id:", id);
        // Update the cities state to remove the deleted city
        setCities(cities.filter(city => city.id !== id));
      } else {
        console.error('Failed to delete city:', response);
      }
    } catch (error) {
      console.error('Error deleting city:', error);
    }
  };

  return (
    <>
      {loading ? (
        // <div>Loading...</div>
        <div className="w-1/4 h-screen flex items-center justify-center m-auto">
       <Loading />
     </div>
      ) : (
        <Table
          headers={headers}
          data={tableData}
          editPath="/dashboardAdmin/cities/addcity"
          handleDelete={handleDelete}
          pageName = "Cities"
        />
      )}
    </>
  );
};

export default CitiesPage;
