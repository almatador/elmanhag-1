import React, { createContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { EditCategoryPage } from '../../Pages/AllPages';
import HeaderPageSection from '../../Components/HeaderPageSection';

export const CategoryDataContext = createContext();

const EditCategoryLayout = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [categoryEdit, setCategoryEdit] = useState(null);
  const { categoryId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const allCategoriesData = () => {
      const allCategories = JSON.parse(localStorage.getItem('Categories'));
      if (allCategories) {
        setAllCategories(allCategories);
      }
    };
    allCategoriesData();
  }, []);

  useEffect(() => {
    if (allCategories.length > 0 && categoryId) {
      const filteredCategories = allCategories.find(
        (category) => category.id === parseInt(categoryId)
      );
      setCategoryEdit(filteredCategories);
    }
  }, [allCategories, categoryId]);

  console.log('allCategories', allCategories);
  console.log('CategoryEdit', categoryEdit);





  const handleGoBack = () => {
    navigate(-1, { replace: true });
  }
  return (
    <>
      <HeaderPageSection handleClick={handleGoBack} name="Edit" />
      <CategoryDataContext.Provider value={categoryEdit}>
        <EditCategoryPage />
      </CategoryDataContext.Provider>
      <h1>Profile ID: {categoryId}</h1>
    </>
  )
}

export default EditCategoryLayout