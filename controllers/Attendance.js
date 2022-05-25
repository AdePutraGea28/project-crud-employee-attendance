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
      return res.json({ msg: 'Attend in Success' });
    } else if (status.toLowerCase() === 'keluar') {
      const find = await Attendance.findOneAndUpdate(
        { employeeId: employeeId, attendanceDate: moment().format('YYYY-MM-DD') },
        {
          $set: {
            timeOut: moment().format(),
          },
        }
      );
      return res.json({ msg: 'Attend out Success', result: find });
    } else {
      return res.json({ msg: 'Status Unknown' });
    }
  } catch (error) {
    res.json({ msg: error.message });
  }

  // const deleteA = await Attendance.remove();
  // res.json(deleteA);
};

//
//
//
//
//
//
//
//
//
//
//

// function addZero(i) {
//   if (i < 10) {
//     i = '0' + i;
//   }
//   return i;
// }

// function getTime() {
//   const d = new Date();
//   let h = addZero(d.getHours());
//   let m = addZero(d.getMinutes());
//   let s = addZero(d.getSeconds());
//   let time = h + ':' + m;
//   return time;
// }
