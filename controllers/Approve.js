import Leave from '../models/Leave.js';

export const approvement = async (req, res) => {
  const approveStatus = req.body.isApprove;
  try {
    if (approveStatus === true) {
      const update = await Leave.findOneAndUpdate(
        { _id: req.params.leaveId },
        {
          $set: {
            approveDate: new Date(),
            isApprove: approveStatus,
          },
        }
      );
      res.status(200).json({ result: 'leave is approved' });
    } else {
      res.json({ result: 'leave is rejected' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
