import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import request from 'supertest'
import mongoose from 'mongoose'
import app from '../index.js'

describe('Auth API', () => {
  beforeEach(async () => {
    // Connect to MongoDB
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    }
  })

  afterEach(async () => {
    // Clean up database
    await mongoose.connection.db.dropDatabase()
  })

  afterAll(async () => {
    // Close database connection
    await mongoose.connection.close()
  })

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'password123'
      })
    
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('token')
  }, 50000)

  it('should login existing user', async () => {
    // First register a user
    await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'password123'
      })

    // Then login
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'password123'
      })
    
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('token')
  }, 50000)
})