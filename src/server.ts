import express from 'express'
import { getEnv } from '#utils/environment/environment.ts'

getEnv()

const app = express()
const port = process.env.PORT || 3000

app.get('/', (_req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

export default app
