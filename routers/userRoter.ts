import express from "express";
import { Router } from "express";
import { addUser, deleteUser, getUser, home, updateUser } from "../controller/userController";

export const router=express.Router()

router.get('/',home)
router.post('/user',addUser)
router.get('/user/:id',getUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)
