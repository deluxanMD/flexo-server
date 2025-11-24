import { describe, it, expect, vi } from 'vitest'

import * as envUtils from './environment.ts'

describe('Environment', () => {
  it('return correct env for test', () => {
    vi.stubEnv('NODE_ENV', 'test')

    const mockEnv = {
      parsed: {
        PORT: '3001',
      },
    }

    vi.spyOn(envUtils, 'getEnv').mockReturnValue(mockEnv)
    const env = envUtils.getEnv()
    expect(env.parsed).toHaveProperty('PORT', '3001')
  })

  it('return correct env for development', () => {
    vi.stubEnv('NODE_ENV', 'development')

    const mockEnv = {
      parsed: {
        PORT: '3000', //
      },
    }

    vi.spyOn(envUtils, 'getEnv').mockReturnValue(mockEnv)
    const env = envUtils.getEnv()
    expect(env.parsed).toHaveProperty('PORT', '3000')
  })

  it('return correct env for production', () => {
    vi.stubEnv('NODE_ENV', 'production')

    const mockEnv = {
      parsed: {
        PORT: '8080',
      },
    }

    vi.spyOn(envUtils, 'getEnv').mockReturnValue(mockEnv)
    const env = envUtils.getEnv()
    expect(env.parsed).toHaveProperty('PORT', '8080')
  })
})
