import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import HeaderPageSection from '../../Components/HeaderPageSection';
import { EditSubjectPage } from '../../Pages/AllPages';

export const SubjectEditContext = createContext()

const EditSubjectLayout = () => {
  const navigate = useNavigate();

  const { subjectId } = useParams();

  const [subjectEdit, setSubjectEdit] = useState(null)


  useEffect(() => {
    const allSubjects = JSON.parse(localStorage.getItem('subjects')) || [];
    console.log('Subject from local storage:', allSubjects); // Debugging log

    if (allSubjects.length > 0) {
      const Subject = allSubjects.find(c => c.id === parseInt(subjectId));
      console.log('Selected Subject:', Subject); // Debugging log

      setSubjectEdit(Subject)
    } else {
      console.warn('No Subject available in local storage.'); // Warn if no countries are found
    }
  }, [subjectId]);


  const handleGoBack = () => {
    navigate(-1, { replace: true });
  };

  return (
    <>
      <HeaderPageSection handleClick={handleGoBack} name="Edit" />
      <SubjectEditContext.Provider value={subjectEdit}>
        <EditSubjectPage />
      </SubjectEditContext.Provider>
    </>
  )
}

export default EditSubjectLayout