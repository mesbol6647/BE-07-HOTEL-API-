"use strict"
/* -------------------------------------------------------
    ROOM CONTROLLER
------------------------------------------------------- */

const room = require('../models/room')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Rooms"]
            #swagger.summary = "List Rooms"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(room)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(room),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Rooms"]
            #swagger.summary = "Create Room"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: '#/definitions/Room'
                }
            }
        */
        
        const data = await room.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Rooms"]
            #swagger.summary = "Get Single Room"
            
        */  
       
        const data = await room.findOne({ _id: id })

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["rooms"]
            #swagger.summary = "Update room"
           #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: '#/definitions/Room'
                }
            }
        */

        
        const data = await room.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await room.findOne({ _id: req.params.id })
        })

    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["rooms"]
            #swagger.summary = "Delete room"
        */

        const data = await room.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    },
}