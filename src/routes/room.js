"use strict"
/* -------------------------------------------------------
    ROUTE ROOMS
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/room:

const room = require('../controllers/room')

const permissions =require('../middlewares/permissions')

// URL: /rooms

router.route('/')
    .get(room.list)
    .post(room.create)
    // .post(permissions.isStaff, room.create)

router.route('/:id')
    .get(room.read)
    .put(room.update)
    .patch(room.update)
    .delete(room.delete)
    // .put(permissions.isStaff, room.update)
    // .patch(permissions.isStaff, room.update)
    // .delete(permissions.isAdmin, room.delete)

/* ------------------------------------------------------- */
module.exports = router