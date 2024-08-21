import React from "react";
import TitleHeader from "../../Components/TitleHeader";
import { CitiesPage } from "../../Pages/AllPages";
import { ButtonAdd } from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import HeaderPageSection from "../../Components/HeaderPageSection";

const CitiesLayout = () => {
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
        {/* <div className="flex items-center justify-between w-full">
          <button className="flex-none" onClick={handleGoBack}>
            <FaAngleLeft
              style={{ width: "24px", height: "24px", color: "#D01025" }}
            />
          </button>
          <div className="flex-1 text-center">
            <TitleHeader text={"Cities"} spaceBottom={3} />
          </div>
        </div> */}
        <HeaderPageSection handleClick={handleGoBack} name={'Cities'} />
        <div className="flex justify-start">
          <Link to={'add'}>
          <ButtonAdd
            Text="Add"
            BgColor="bg-AddButton"
            Color="text-AddText"
            handleClick={handleButtonClick}
            iconColor="#D01025"
            />
            </Link>
        </div>
        <CitiesPage />
      </div>
    </>
  );
};

export default CitiesLayout;
