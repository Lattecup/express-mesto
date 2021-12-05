const router = require('express').Router();
const {
  getAllUsers, getUserById, createUser, updateUserProfile, updateUserAvatar,
} = require('../controllers/users');

router.get('/users', getAllUsers);

router.get('/users/:userId', getUserById);

router.post('/users', createUser);

router.patch('/users/me', updateUserProfile);

router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
