import React, { createContext, useEffect, useState } from 'react'
import HeaderPageSection from '../../Components/HeaderPageSection'
import { EditParentRelationPage } from '../../Pages/AllPages'
import { useNavigate, useParams } from 'react-router-dom';
export const parentRelationEditContext = createContext()

const EditParentRelationLayout = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1, { replace: true });
  };
  const [parentRelationEdit,setParentRelationEdit] = useState(null)

  const { parentRelationId } = useParams();

  useEffect(() => {
    const parentRelations = JSON.parse(localStorage.getItem('ParentRelation')) || [];
    console.log('ParentRelation from local storage:', parentRelations); // Debugging log

    if (parentRelations.length > 0) {
        const parent_Relation = parentRelations.find(c => c.id === parseInt(parentRelationId));
        console.log('Selected ParentRelation:', parent_Relation); // Debugging log

        setParentRelationEdit(parent_Relation)
    } else {
        console.warn('No Parent Relation available in local storage.'); // Warn if no countries are found
    }
}, [parentRelationId]);

  return (
    <> 
    <div className="flex flex-col items-center gap-y-9">
      <HeaderPageSection handleClick={handleGoBack} name="Edit Parent Relation" />
      <parentRelationEditContext.Provider value={parentRelationEdit}>
        <EditParentRelationPage />
      </parentRelationEditContext.Provider>
    </div>
    </>  )
}

export default EditParentRelationLayout