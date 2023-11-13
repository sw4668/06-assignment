const cron = require('node-cron')


cron.schedule('*/50 * * * * *', callback)

function callback() {
    console.log('running every 50 seconds')
}
