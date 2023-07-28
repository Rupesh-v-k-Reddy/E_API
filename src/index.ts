import express from "express"
import dotenv from "dotenv"
import user from "./routes"

const app = express();
dotenv.config();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use('/api', user);

app.listen(port, () => {
	console.log(`Listening on Port :${port}🚀`);
	console.log('http://localhost:3000/');
});
