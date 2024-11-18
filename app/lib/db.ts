import mongoose from 'mongoose'

// Define the connection state type
interface ConnectionState {
  isConnected?: number
}

// Define the cached mongoose type
interface CachedMongoose {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

// Declare global mongoose cache
declare global {
  var mongooseCache: CachedMongoose | undefined
}

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env.local')
}

const MONGODB_URI = process.env.MONGODB_URI

// Initialize the cache
const cached: CachedMongoose = global.mongooseCache ?? {
  conn: null,
  promise: null,
}

// Cache the connection
if (!global.mongooseCache) {
  console.log('Initializing new mongoose cache')
  global.mongooseCache = cached
}

async function dbConnect() {
  try {
    // Check for existing connection
    if (cached.conn) {
      console.log('Using existing MongoDB connection')
      return cached.conn
    }

    // Check for existing connection promise
    if (!cached.promise) {
      console.log('Creating new MongoDB connection...')
      const opts = {
        bufferCommands: false,
      }

      // Log connection attempt with safe URI (hiding credentials)
      const safeUri = MONGODB_URI.replace(
        /mongodb(\+srv)?:\/\/([^:]+):([^@]+)@/,
        'mongodb$1://<username>:<password>@'
      )
      console.log('Connecting to:', safeUri)

      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        console.log('MongoDB connection established successfully')
        return mongoose
      })
    } else {
      console.log('Using existing connection promise')
    }

    try {
      console.log('Waiting for MongoDB connection...')
      cached.conn = await cached.promise
      console.log('MongoDB connection ready')
    } catch (error) {
      console.error('MongoDB connection error:', error)
      cached.promise = null
      throw error
    }

    return cached.conn
  } catch (error) {
    console.error('Database connection failed:', error)
    throw error
  }
}

export default dbConnect
