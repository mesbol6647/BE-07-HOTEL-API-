"use strict"
/* -------------------------------------------------------
    ROUTE RESERVATIONS
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/reservationd:

const reservation = require('../controllers/reservation')
const permissions =require('../middlewares/permissions')
// URL: /reservations


router.route('/')
    .get(reservation.list)
    .post(reservation.create)

router.route('/:id')
    .get( reservation.read)
    .put( reservation.update)
    .patch( reservation.update)
    .delete( reservation.delete)

/* ------------------------------------------------------- */
module.exports = router