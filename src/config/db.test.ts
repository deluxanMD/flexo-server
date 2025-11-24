import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import mongoose from 'mongoose'
import { connectDB } from './db.ts' // Adjust this import path to your actual file

// 1. Mock the mongoose module
vi.mock('mongoose', () => ({
  default: {
    connect: vi.fn(),
  },
}))

describe('Database Connection', () => {
  // Save original process.env to restore later
  const originalEnv = process.env

  beforeEach(() => {
    vi.resetModules()
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
    vi.clearAllMocks()
  })

  it('should connect to MongoDB successfully', async () => {
    // Arrange
    const testUri = 'mongodb://localhost:27017/test'
    process.env.MONGODB_CONNECTION_URI = testUri

    // Mock successful resolution
    vi.mocked(mongoose.connect).mockResolvedValueOnce({} as never)

    // Spy on console.log to verify success message
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    // Act
    await connectDB()

    // Assert
    expect(mongoose.connect).toHaveBeenCalledWith(testUri)
    expect(consoleSpy).toHaveBeenCalledWith('MongoDB Connected')
  })

  it('should handle connection failure and exit process', async () => {
    // Arrange
    const mockError = new Error('Connection failed')

    // Mock rejected promise (simulating DB error)
    vi.mocked(mongoose.connect).mockRejectedValueOnce(mockError)

    // Spy on console.error
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    // CRITICAL: Mock process.exit to prevent Vitest from crashing
    // usage of `undefined as never` satisfies TS return type for exit
    const exitSpy = vi
      .spyOn(process, 'exit')
      .mockImplementation(() => undefined as never)

    // Act
    await connectDB()

    // Assert
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'MongoDB Connection Error:',
      mockError
    )
    expect(exitSpy).toHaveBeenCalledWith(1)
  })
})
