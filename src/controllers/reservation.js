"use strict"
/* -------------------------------------------------------
    RESERVATİON CONTROLLER
    ---------------------------------------------------- */


const reservation = require('../models/reservation')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["reservations"]
            #swagger.summary = "List reservations"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(reservation)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(reservation),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["reservations"]
            #swagger.summary = "Create reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "reservationname": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "isActive": true,
                    "isStaff": false,
                    "isAdmin": false,
                }
            }
        */

            //userId gönderilmemişse req.user'dan al veya admin/staff değilse
       if((!req.user.isAdmin && !req.user.isStaff) || !req.body?.userId){
        req.body.userId=req.user._id
       }
      
        /*
        req.body.isStaff=false
        req.body.isAdmin=false
        */
        const data = await reservation.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["reservations"]
            #swagger.summary = "Get Single reservation"
        */
       
      
        const data = await reservation.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["reservations"]
            #swagger.summary = "Update reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "reservationname": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "isActive": true,
                    "isStaff": false,
                    "isAdmin": false,
                }
            }
        */
// admin dışıdaki kimse rezervasyona ait userıd değiştiremez
       if(!req.user.isAdmin){
        delete req.body.userId
       }

        const data = await reservation.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await reservation.findOne({ _id: req.params.id })
        })

    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["reservations"]
            #swagger.summary = "Delete reservation"
        */

        const data = await reservation.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    },
}