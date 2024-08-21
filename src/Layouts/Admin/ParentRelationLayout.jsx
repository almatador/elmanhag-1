import React from "react";
import TitleHeader from "../../Components/TitleHeader";
import { ButtonAdd } from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { ParentRelationPage } from "../../Pages/AllPages";
import HeaderPageSection from "../../Components/HeaderPageSection";


const ParentRelationAD = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This navigates back to the previous page
  };
  return (
    <>
      <div className="w-full flex items-center flex-col gap-y-3">
        <HeaderPageSection handleClick={handleGoBack} name={'Parent relation'} />

        <div className="flex justify-start">
          <Link to={"add"}>
            <ButtonAdd
              Text="Add"
              BgColor="bg-AddButton"
              Color="text-AddText"
              handleClick={handleButtonClick}
              iconColor="#D01025"
            />
          </Link>
        </div>
        <ParentRelationPage />
      </div>
    </>
  );
};

export default ParentRelationAD;
