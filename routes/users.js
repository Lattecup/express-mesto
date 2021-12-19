const router = require('express').Router();
const {
  getAllUsers, getUserById, getMyProfile, updateUserProfile, updateUserAvatar,
} = require('../controllers/users');

router.get('/users', getAllUsers);

router.get('/users/:userId', getUserById);

router.get('./users/me', getMyProfile);

router.patch('/users/me', updateUserProfile);

router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
