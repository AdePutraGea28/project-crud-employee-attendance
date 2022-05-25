import express from 'express';
import { attendance } from '../controllers/Attendance.js';
import { leave } from '../controllers/Leave.js';
import { approvement } from '../controllers/Approve.js';
import { attendanceReport } from '../controllers/AttendanceReport.js';
import { getAllDataEmployee, getAllDataAttendance, getAllDataLeave } from '../controllers/GetData.js';
import { checkIfLeave } from '../controllers/CheackLeave.js';

const router = express.Router();

// home page
router.get('/home', (req, res) => {
  res.send('Welcome to Home Page');
});
// get all data employee
router.get('/get/employee', getAllDataEmployee);
// create attendance
router.post('/attendance', checkIfLeave, attendance);
// get all data attendance
router.get('/get/attendance', getAllDataAttendance);
// create leave
router.post('/leave', leave);
// get all data leave
router.get('/get/leave', getAllDataLeave);
// approve by appaveId
router.patch('/approve/:leaveId', approvement);
// get all attendance data by employeeId
router.get('/report/:employeeId', attendanceReport);

export default router;
