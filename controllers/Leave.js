import Leave from '../models/Leave.js';
// import moment from 'moment';
import moment from 'moment-timezone';

export const leave = async (req, res) => {
  const id = req.body.id;
  //   const set = moment.tz(new Date(), 'Asia/Jakarta');

  try {
    if (id) {
      const leave = new Leave({
        submissionDate: new Date(),
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        intervalDateLeave: req.body.interval,
        employeeId: id,
      });

      const saveLeave = await leave.save();
      res.status(201).json(saveLeave);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

