import express, { Application, Response, Request } from 'express'
import cors from 'cors'

const app: Application = express()

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

export default app
