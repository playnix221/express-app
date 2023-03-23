import express from 'express'
import https  from 'https'
import fs from 'fs'
import { Telegraf } from 'telegraf';
const app = express()


app.use(express.json());
const bot = new Telegraf(`5900134319:AAHs2if_lZMCL0J2xPID9pI0zUmlrY68Jlo`);

app.use(require('helmet')());

// Set the bot API endpoint
app.use(async() => await bot.createWebhook({ domain: '/telegraf' }));

app.listen(4000, () =>
    console.log(`
🚀 Server ready at: http://localhost:4000
`
    ),
)

bot.command('help', (ctx) => ctx.reply('Hello'))

app.get('/',(req,res) => {
    res.json({
        message: 'hi 👋'
    })
})
app.post('/telegraf',(req,res) => {
   console.log(`req is ${req.body}`);
   return bot.handleUpdate(req.body, res)
})


// const options = {
//     cert: fs.readFileSync('./sslcert/fullchain.pem'),
//     key: fs.readFileSync('./sslcert/privkey.pem')
// };

// app.use(express.static('static'));


// https.createServer(options, app).listen(8443);
