import { expect, test } from 'vitest'

import { getEnv } from './environment.ts'

test('return correct env for test', () => {
    process.env.NODE_ENV = 'test'
    const env = getEnv()
    expect(env.parsed).toHaveProperty('PORT', '3001')
})

test('return correct env for development', () => {
    process.env.NODE_ENV = 'development'
    const env = getEnv()
    expect(env.parsed).toHaveProperty('PORT', '3000')
})

test('return correct env for production', () => {
    process.env.NODE_ENV = 'production'
    const env = getEnv()
    expect(env.parsed).toHaveProperty('PORT', '8080')
})
