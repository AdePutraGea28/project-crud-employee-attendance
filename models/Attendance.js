import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Attendance = new Schema({
  attendanceDate: {
    type: Date,
  },
  timeIn: {
    type: Date,
    default: '',
  },
  timeOut: {
    type: Date,
    default: '',
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
  },
});

export default mongoose.model('Attendance', Attendance);
