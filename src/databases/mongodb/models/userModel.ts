import { Schema, model } from 'mongoose';
// Example model
const userSchema = new Schema<User>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  firstTimeLogin: { type: Boolean, required: true, default: true },
  status: {
    type: String,
    required: true,
    default: 'active',
    enum: ['active', 'inActive', 'suspended'],
  },
  // define other fields as needed
});

export const UserModel = model<User>('User', userSchema);
