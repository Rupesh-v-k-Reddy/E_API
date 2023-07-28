import app from "./server"
import dotenv from "dotenv"
dotenv.config();

const port = 3000;


app.listen(port, () => {
	console.log(`Listening on Port :${port}🚀`);
	console.log('http://localhost:3000/');
});
