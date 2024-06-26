"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const permissions = require('../middlewares/permissions')
const user = require('../controllers/user')

// URL: /users

router.route('/')
    .get(user.list)
    // .get(permissions.isStaff, user.list)
    .post(user.create)

router.route('/:id')
    .get(user.read)
    .put( user.update)
    .patch(user.update)
    .delete(user.delete)
    // .get(permissions.isLogin, user.read)
    // .put(permissions.isLogin, user.update)
    // .patch(permissions.isLogin,user.update)
    // .delete(permissions.isAdmin, user.delete)

/* ------------------------------------------------------- */
module.exports = router