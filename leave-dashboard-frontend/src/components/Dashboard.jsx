import  axios  from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ApexChart from "./ApexChart";
import LeavePage from "./LeavePage";
const Dashboard = () => {
  const [isLeave,setIsLeave]=useState(false);
  const [employee,setEmployee]=useState([]);
  const [value,setValue]=useState([])
  useEffect(() => {
    fetchEmpLeave();
  }, []);

  const fetchEmpLeave = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-user-leave`);
      
      setEmployee(response.data);
      setValue([response.data[0]?.sick, response.data[0]?.casual, response.data[0]?.earned]);
    } catch (err) {

      //here we can handle the errors using status code
      console.error("Error fetching employee leave:", err);
    }
  };
  return (
    <React.Fragment>

      <div className="bg-white p-4 rounded shadow-md mb-6">
        <div className="flex items-center justify-between mb-4 mt-5">
          <p className="text-lg font-bold"> Dashboard</p>
          <Link onClick={()=>setIsLeave(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Apply Leave
          </Link>
        </div>

        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Sick Leaves</th>
              <th className="border px-4 py-2">Casual Leaves</th>
              <th className="border px-4 py-2">Earned Leaves</th>
              <th className="border px-4 py-2">Total Leaves</th>
              <th className="border px-4 py-2">Availed Leaves</th>
              <th className="border px-4 py-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{employee.name}</td>
                <td className="border px-4 py-2">{employee.sick}</td>
                <td className="border px-4 py-2">{employee.casual}</td>
                <td className="border px-4 py-2">{employee.earned}</td>
                <td className="border px-4 py-2">{employee.total}</td>
                <td className="border px-4 py-2">{employee.availed}</td>
                <td className="border px-4 py-2">{employee.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
      <div className="flex flex-wrap min-h-screen">
      {isLeave && (<>
        <div className="w-full md:w-1/2 p-4">
          <LeavePage setIsLeave={setIsLeave} employee={employee[0]} fetchEmpLeave={fetchEmpLeave}/>
        </div>
      <div className="w-full md:w-1/2 p-4">
        <ApexChart value={value}/>
      </div>
      </>

      )}
      {!isLeave && (
        <div className="flex items-center justify-center w-full h-full">
          <ApexChart value={value}/>
        </div>
      )}
    </div>
    </React.Fragment>
  );
};

export default Dashboard;
