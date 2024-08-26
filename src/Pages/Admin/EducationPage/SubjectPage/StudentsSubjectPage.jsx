import React, { useContext, useEffect, useState } from 'react'
import { SubjectStudentContext } from '../../../../Layouts/Admin/StudentsSubjectLayout'

const StudentsSubjectPage = () => {
       const [subjectContent, setSubjectContent] = useState()
       const [nameSubject, setNameSubject] = useState('')


       const subjectStudentData = useContext(SubjectStudentContext)

       useEffect(() => {
              if (subjectStudentData) {
                     setSubjectContent(subjectStudentData);
                     setNameSubject(subjectStudentData.name || '');
              }
       }, [subjectStudentData]);

       return (
              <>
                     {nameSubject}
                     {subjectContent?.name || 'No Subject Name'}
                     <div>StudentsSubjectPage</div>
              </>
       )
}

export default StudentsSubjectPage