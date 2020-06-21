const express = require('express')
const router = express.Router()
const passport = require('passport')
// GET to Auth/google

router.get('/google',
    passport.authenticate('google', {scope: ['profile']})
)

router.get('/google/callback',
    passport.authenticate('google', {failureRedirect:'/'}),
    function(req, res) {
    res.redirect('/')
}
)

// GET Dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router
