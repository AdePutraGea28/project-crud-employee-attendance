import Leave from '../models/Leave.js';
import moment from 'moment';

export const checkIfLeave = async (req, res, next) => {
  const employeeId = req.body.employeeId;

  const find = await Leave.find({ employeeId: employeeId, isApprove: true });

  let isLeave = false;
  const startDate = new Date();

  find.forEach((leaves) => {
    let startDate = moment(leaves.startDate).subtract(1, 'days');
    startDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    startDate.toISOString();
    startDate.format();
    let endDate = moment(leaves.endDate).add(1, 'days');
    endDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    endDate.toISOString();
    endDate.format();
    let today = moment();
    today.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    today.toISOString();
    today.format();
    isLeave = today.isBetween(startDate, endDate);
  });

  if (isLeave) {
    res.json({ message: 'Cannot attend' });
  } else {
    next();
  }
};
