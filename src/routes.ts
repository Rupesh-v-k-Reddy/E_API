import express from "express"
import readAllUsers from "./db"

const router = express.Router();

router.get('/users', async (req, res) => {
	const data = await readAllUsers();
	if (data) {
		return res.json({  data });
	}
	return res
		.status(500)
		.json({ success: false, message: 'Error fetching DB users' });
});

export default router