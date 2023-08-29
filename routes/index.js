const express = require('express')
//import {express} from '/server.js'
const router = express.Router()
router.get('/', (req, res) => {
    res.send("Hello World!")
})

module.exports = router