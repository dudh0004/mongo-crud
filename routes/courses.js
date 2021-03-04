const Course = require('../models/Course')
const router = require('express').Router()
const sanitizeBody = require('../middleware/sanitizeBody')

router.get('/', sanitizeBody, async (req, res) => {
    const course = await Course.find()
    res.send({data: course})
})


function sendResourceNotFound(req, res) {
    res.status(404).send({
        errors: [
            {
                status: '404',
                title: 'Resource does not exist',
                description: `We could not find a Course with id: ${req.params.id}`
            }
        ]
    })
}

module.exports = router