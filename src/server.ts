import express from 'express'

import { getEnv } from '#utils/environment/environment.ts'
import { connectDB } from '#config/db.ts'

getEnv()
connectDB()

const app = express()
const port = process.env.PORt || 3000

app.get('/', (_req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

export default app
