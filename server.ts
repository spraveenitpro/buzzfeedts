import axios, { AxiosResponse } from 'axios'
import express, { Request, Response } from 'express'
import { QuizData } from './interfaces'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = 8000
const app = express()

//The server running on http://localhost:8000 must be configured with the header option of {'Access-Control-Allow-Origin': 'http://localhost:5173'}

// @ts-ignore
app.get('/quiz-item', async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const response: AxiosResponse = await axios.get(process.env.URL, {
            headers: {
                'X-Cassandra-Token': process.env.TOKEN,
                accept: 'application/json',
            },
        })
        if (response.status === 200) {
            // @ts-ignore
            const quizItem: QuizData = await response.data.data[process.env.ID]
            res.setHeader(
                'Access-Control-Allow-Origin',
                'http://localhost:5173'
            )
            res.send(quizItem)
        }
    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
