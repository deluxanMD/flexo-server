import dotenv from 'dotenv'
import path from 'path'

export const getEnv = () => {
    console.log('current working directory', process.cwd())
    // Determine the environment and set the path to the corresponding .env file
    const env = process.env.NODE_ENV || 'development'
    const envPath = path.resolve(process.cwd(), `.env.${env}`)

    // Load the environment variables
    const result = dotenv.config({ path: envPath })

    if (result.error) {
        // You might want to throw an error in a real application
        console.error(`Error loading .env file: ${envPath}`, result.error)
    }

    console.log('result', result)

    return result
}
