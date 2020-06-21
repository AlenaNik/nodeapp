const express = require('express')
const router = express.Router()

// GET Checking login

router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})



// GET Dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router
