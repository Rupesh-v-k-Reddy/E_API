import express from "express"
import {readAllUsers,readUserById,updateUserEmail} from "./handlers/users"


const router = express.Router();

router.get('/users',readAllUsers);
router.get("/user/:id",readUserById); //read single user based on userid 
router.put("/user/:id",updateUserEmail) // update user email id


export default router