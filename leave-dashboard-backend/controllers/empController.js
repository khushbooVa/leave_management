 const employeeData =require('../models/index');
const { calculateDaysBetweenDates } = require('../utils/Index');

 const getUsersleaveDetails = async (req, res) => {
    try {
        const users = await employeeData.find();
        if(!users){
            res.status(404).json({ message: 'No users found' })
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const addNewLeave = async (req, res) => {
    const { user_Id, leaveType, startDate, endDate, comments } = req.body;
    try {
      const leaveDays = calculateDaysBetweenDates(startDate, endDate);
      const updatedEmployee = await employeeData.findByIdAndUpdate(
        user_Id,           
        {
          $inc: {
            [leaveType]: leaveDays, 
            availed: leaveDays,     
            balance: -leaveDays     
          }
        },
        { new: true, runValidators: true }
      );
        if (!updatedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
      }
      res.status(200).json({message:"Leave added successfully"});
    } catch (error) {
      console.error("Error updating leave: ", error);
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports = { getUsersleaveDetails,addNewLeave}
