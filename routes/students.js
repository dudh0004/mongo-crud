const Student = require('../models/Student')
const router = require('express').Router()
const sanitizeBody = require('../middleware/sanitizeBody')

router.get('/', sanitizeBody, async (req, res) => {
    const students = await Student.find()
    res.send({data: students})
})

router.get('/:id', sanitizeBody, async (req, res) => {
    try {
    const student = await Student.findById(req.params.id)
    if (!student) {
    throw new Error('Resource not found')
    }
    res.send({data: student})
    } catch (err) {
        sendResourceNotFound(req, res);
    }
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

router.post('/', sanitizeBody, async (req, res) => {
    try {
        const newStudent = new Student(req.sanitizedBody)
        await newStudent.save()
        res.send({data: newStudent})
        } catch (err) {
        sendResourceNotFound(err)
        }
    })


module.exports = router