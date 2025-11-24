import dotenv from 'dotenv'
import path from 'path'

export const getEnv = () => {
  // Determine the environment and set the path to the corresponding .env file
  const env = process.env.NODE_ENV
  const envPath = path.resolve(process.cwd(), `.env.${env}`)

  // Load the environment variables
  return dotenv.config({ path: envPath })
}
