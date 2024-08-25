import React, { useState, useEffect } from "react";
import Table from "../../../../Components/Table";
import axios from "axios";
import { useAuth } from "../../../../Context/Auth";
import Loading from "../../../../Components/Loading";

const PaymentMethodPage = () => {
  const [paymentMethod, setPaymentMethod] = useState([]); // State to hold the parent relation data
  const [loading, setLoading] = useState(true); // State to handle loading status
  const auth = useAuth();

  const headers = ["#","thumbnails","title","Status","Actions"];

  const fetchPaymentMethod = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://bdev.elmanhag.shop/admin/Settings/paymentMethods",
        {
          headers: {
            Authorization: `Bearer ${auth.user.token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        setPaymentMethod(response.data.paymentMethods|| []); // Adjust this based on the API's response structure
      }
    } catch (error) {
      console.error("Error fetching Payment Method:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentMethod();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://bdev.elmanhag.shop/admin/Settings/paymentMethods/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.user.token}`
        }
      });

      if (response.status === 200) {
        console.log("Deleted Payment Method with id:", id);
        // Update the parentRelation state to remove the deleted item
        setPaymentMethod(paymentMethod.filter(PM => PM.id !== id));
      } else {
        console.error('Failed to delete Payment Method:', response);
      }
    } catch (error) {
      console.error('Error deleting Payment Method:', error);
    }
  };

  const tableData = paymentMethod.map((PM, index) => ({
    id: PM.id, // This is important for linking to edit and delete
    number: index + 1,
    thumbnails:PM.thumbnails,
    title:PM.title,
    status:PM.status
  }));

  localStorage.setItem("PaymentMethod", JSON.stringify(paymentMethod));


  return (
    <>
      {loading ? (
        <div className="w-1/4 h-screen flex items-center justify-center m-auto">
        <Loading />
      </div>      ) : (
        <Table
          headers={headers}
          data={tableData}
          editPath="edit"
          handleDelete={handleDelete}
          pageName = "Payment Method"
        />
      )}
    </>
  );
}

export default PaymentMethodPage