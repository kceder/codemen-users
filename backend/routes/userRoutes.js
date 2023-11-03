const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const getAllUsers = userControllers.getAllUsers;
const addUser = userControllers.addUser;
const updateUser = userControllers.updateUser;
const deleteUser = userControllers.deleteUser;

router.get("/", getAllUsers); // ctrl+ckick the link to see all the users: http://localhost:5000/users/
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
