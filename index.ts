import express from 'express'
import https  from 'https'
import fs from 'fs'
const app = express()


app.use(express.json());

app.use(require('helmet')());

app.listen(4000, () =>
    console.log(`
🚀 Server ready at: http://localhost:4000
`
    ),
)

app.get('/',(req,res) => {
    res.json({
        message: 'hi 👋'
    })
})


const options = {
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};

app.use(express.static('static'));


https.createServer(options, app).listen(8443);
