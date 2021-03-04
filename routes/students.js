const Student = require('../models/Student')
const router = require('express').Router()
const sanitizeBody = require('../middleware/sanitizeBody')

router.get('/', sanitizeBody, async (req, res) => {
    const students = await Student.find()
    res.send({data: students})
})



function sendResourceNotFound(req, res) {
    res.status(404).send({
        errors: [
            {
                status: '404',
                title: 'Resource does not exist',
                description: `We could not find a Student with id: ${req.params.id}`
            }
        ]
    })
}

module.exports = router