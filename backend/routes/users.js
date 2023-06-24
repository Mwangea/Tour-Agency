import express from 'express'
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const router = express.Router()

//create new User
router.post('/', createUser);
//update new User
router.put('/:id', verifyUser, updateUser);
//delete User
router.delete('/:id', verifyUser, deleteUser)
//get singleUser
router.get('/:id', verifyUser, getSingleUser);
//get all Users
router.get('/',verifyAdmin, getAllUser);

export default router;