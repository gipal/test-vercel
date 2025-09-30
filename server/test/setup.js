import mongoose from 'mongoose'
import { afterAll, beforeAll } from 'vitest'

beforeAll(async () => {
  // 在所有测试开始前执行
})

afterAll(async () => {
  // 在所有测试结束后执行
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close()
  }
})