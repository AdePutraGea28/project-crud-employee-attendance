import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Leave = new Schema({
  submissionDate: {
    type: Date,
    default: '',
  },
  approveDate: {
    type: Date,
    default: '',
  },
  isApprove: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: Date,
    default: '',
  },
  endDate: {
    type: Date,
    default: '',
  },
  intervalDateLeave: {
    type: Number,
    default: 0,
  },
  employeeId: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
});

export default mongoose.model('Leave', Leave);
