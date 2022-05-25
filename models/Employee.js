import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Employee = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Employee', Employee);
