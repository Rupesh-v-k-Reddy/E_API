import express from "express";
import user from "./routes";
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use('/api', user);
export default app