import React from "react";
import { OperationsPage } from "../../Pages/AllPages";
import TitleHeader from "../../Components/TitleHeader";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import HeaderPageSection from "../../Components/HeaderPageSection";


const OperationsLayout = () => {
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
       <HeaderPageSection handleClick={handleGoBack} name={'Operations'} />

        <div className="w-full flex justify-between">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <h1
              style={{ color: "#5E5E5E", fontSize: "24px", fontWeight: "400" }}
            >
              Logout All
            </h1>
            <Button
              type="submit"
              Text={"Submit"}
              BgColor="bg-mainColor"
              Color="text-white"
              Width="36"
              Size="text-xl"
              stateLoding={false}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <h1
              style={{ color: "#5E5E5E", fontSize: "24px", fontWeight: "400" }}
            >
              +1 Year
            </h1>
            <button
              type="submit"
              className={`bg-thirdBgColor text-mainColor w-36 text-xl font-medium border rounded-xl border-mainColor pt-2 py-3 px-7`}
            >
              Submit
            </button>
          </div>
        </div>

        <OperationsPage />
      </div>
    </>
  );
};

export default OperationsLayout;
