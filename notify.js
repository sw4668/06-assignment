require('dotenv').config()

var cron = require ('node-cron')

var Pushover = require ('node-pushover')

cron.schedule('* */12 * * * *', notify)

var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USERKEY
})

function notify() {
    push.send("WALK BIGGIE", "your dog needs to pee", handleErrors);
}

function handleErrors(error, response){
    if (error) console.log('error', error)
    console.log(response)
}