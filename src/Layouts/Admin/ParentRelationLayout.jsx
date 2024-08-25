import React from "react";
import TitleHeader from "../../Components/TitleHeader";
import {useNavigate } from "react-router-dom";


const ParentRelationLayout = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
         navigate(-1); // This navigates back to the previous page
  };
  return (
    <>

                     <div className="flex flex-col items-center gap-y-4">
                            <TitleHeader text={"Parent relation"} spaceBottom={3} />
                            <ParentRelationPage />
                     </div>
    </>
  );
};

export default ParentRelationLayout;
