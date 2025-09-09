import mongoose, { Document, Schema } from 'mongoose'

export interface IFormData extends Document {
  name: string
  email: string
  phone: string
  country: string
  target: string
  createdAt: Date
  updatedAt: Date
}

const FormDataSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true
  },
  target: {
    type: String,
    required: [true, 'Target degree is required'],
    trim: true
  }
}, {
  timestamps: true
})

export default mongoose.models.FormData || mongoose.model<IFormData>('FormData', FormDataSchema)
