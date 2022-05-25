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
    const getAll = await Attendance.find({});
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// this to get all data leave
export const getAllDataLeave = async (req, res) => {
  try {
    const getAll = await Leave.find({});
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
