import Attendance from '../models/Attendance.js';
import Employee from '../models/Employee.js';
import Leave from '../models/Leave.js';

// this to get all data employee
export const getAllDataEmployee = async (req, res) => {
  try {
    const getAll = await Employee.find({});
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// this to get all data attendance
export const getAllDataAttendance = async (req, res) => {
  try {
    const getAll = await Attendance.aggregate([
      {
        $lookup: {
          from: 'employees',
          localField: 'employeeId',
          foreignField: '_id',
          as: 'hasil',
        },
      },
    ]);
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// this to get all data leave
export const getAllDataLeave = async (req, res) => {
  try {
    const getAll = await Leave.aggregate([
      {
        $lookup: {
          from: 'employees',
          localField: 'employeeId',
          foreignField: '_id',
          as: 'hasil',
        },
      },
    ]);
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
