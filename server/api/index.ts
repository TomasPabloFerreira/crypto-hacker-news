import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(
	process.env.MONGO_URI,
	{useNewUrlParser: true, useUnifiedTopology: true}
)

app.get('*', (req, res) => {
	res.send('Funciona!')
})

module.exports = app
