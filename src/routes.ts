import express from "express"
import {readAllUsers,readUserById} from "./handlers/users"


const router = express.Router();

router.get('/users',readAllUsers);
router.get("/user/:id",readUserById); //read single user based on userid 



export default router