import Attendance from '../models/Attendance.js';
import moment from 'moment-timezone';

export const attendance = async (req, res) => {
  let status = req.body.status;
  const employeeId = req.body.employeeId;
  try {
    if (status.toLowerCase() === 'masuk') {
      const attendance = new Attendance({
        attendanceDate: moment().format('YYYY-MM-DD'),
        timeIn: moment().format(),
        employeeId: employeeId,
      });
      await attendance.save();
      return res.status(201).json({ msg: 'Attend in Success' });
    } else if (status.toLowerCase() === 'keluar') {
      const find = await Attendance.findOneAndUpdate(
        { employeeId: employeeId, attendanceDate: moment().format('YYYY-MM-DD') },
        {
          $set: {
            timeOut: moment().format(),
          },
        }
      );
      return res.status(200).json({ msg: 'Attend out Success' });
    } else {
      return res.status(500).json({ msg: 'Status Unknown' });
    }
  } catch (error) {
    res.json({ msg: error.message });
  }

  // const deleteA = await Attendance.remove();
  // res.json(deleteA);
};
