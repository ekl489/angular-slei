const express = require('express')
const app = express()
const path = require('path')

// Development or Production mode
const environment = process.env.NODE_ENV || 'developement';
const port = (environment == 'production') ? 80 : 3000;

// Admin Route
//app.get('/admin', (req, res) => res.send('This is the admin route.'))
const api = require('./admin/index.js')
app.use('/admin', api)

// Client
app.use('/', express.static(path.join(__dirname, '../client/dist/client')))

// Run app
app.listen(port, () => console.log(`Server listening on port ${port} in '${environment}' mode.`))