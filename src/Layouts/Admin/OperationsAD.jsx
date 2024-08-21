import React from 'react'
import { OperationsPage } from '../../Pages/AllPages'
import TitleHeader from '../../Components/TitleHeader'
import { Button } from '../../Components/Button'
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";

const OperationsAD = () => {
       const handleButtonClick = () => {
              alert('Button clicked!');
            };

            const navigate = useNavigate();

       const handleGoBack = () => {
       navigate(-1); // This navigates back to the previous page
       };
       return (
              <>

       <div className="flex flex-col gap-y-4">
              <div className="flex items-center justify-between w-full">
                     <button className="flex-none" onClick={handleGoBack}>
                            <FaAngleLeft style={{ width: "24px", height: "24px", color: "#D01025" }} />
                     </button>
                     <div className="flex-1 text-center">
                            <TitleHeader text={"Operations"} spaceBottom={3} />
                     </div>
              </div>

              <div className="flex justify-between">
                     <div style={{display:"flex",alignItems:"center",gap:"50px",marginTop:"50px",marginBottom:"50px"}}>          
                            <h1 style={{color:"#5E5E5E",
                            fontSize:"24px",fontWeight:"400"}}>Logout All</h1>
                            <Button type='submit' Text={"Submit"} BgColor="bg-mainColor" Color="text-white" Width='36' Size='text-xl' stateLoding={false} />
                     </div>

                     <div style={{display:"flex",alignItems:"center",gap:"50px",marginTop:"50px",marginBottom:"50px"}}>                          
                            <h1 style={{color:"#5E5E5E",
                            fontSize:"24px",fontWeight:"400"}}>+1 Year</h1>
                            <button type='submit' className={`bg-thirdBgColor text-mainColor w-36 text-xl font-medium border rounded-xl border-mainColor pt-2 py-3 px-7`} >
                                   Submit
                            </button>
                     </div>
              </div>

              <OperationsPage />
       </div>
              </>
       )
}

export default OperationsAD