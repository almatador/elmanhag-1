import React, { useContext, useEffect, useState } from 'react'
import { SubjectEditContext } from '../../../../Layouts/Admin/EditSubjectLayout'

const EditSubjectPage = () => {
  const [subjectContent, setSubjectContent] = useState()
  const [nameSubject, setNameSubject] = useState('')


  const subjectEditData = useContext(SubjectEditContext)

  useEffect(() => {
    setSubjectContent(subjectEditData);
    setNameSubject(subjectEditData?.name || '');
  }, [subjectEditData]);

  return (
    <>
      {nameSubject}
      <div>EditSubjectPage</div>
    </>
  )
}

export default EditSubjectPage