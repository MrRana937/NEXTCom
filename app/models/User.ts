import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { validateEmail } from '@/app/lib/validation/utils'

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    sparse: true,
    validate: {
      validator: validateEmail,
      message: 'Please enter a valid email address',
    }
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    select: false, // Don't include password in queries by default
  },
  image: {
    type: String,
    default: '/images/default-avatar.png',
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, 12)
  next()
})

// Method to check password
userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return await bcrypt.compare(candidatePassword, this.password)
}

export default mongoose.models.User || mongoose.model('User', userSchema)
