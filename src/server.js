import express from 'express';
import { Prisma } from '@prisma/client/extension';
const app = express()
const PORT = 3000

app.use(express.json())

app.listen(PORT, () => {
    console.log("Server Rodando na porta " + PORT)
})
