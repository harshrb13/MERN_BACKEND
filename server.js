require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const authRouter = require('./router/auth-router')
const contactRouter = require('./router/contact-router')
const adminRouter = require('./router/admin-router')
const mongoData = require('./utils/db');
const serviceRouter = require("./router/service-router");
const errorMiddleware = require('./middlewares/error-middleware');
const BASE_URL = process.env.BASE_URL
app.use(express.json())

const corsOptions = {
    origin: BASE_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
}
app.use(cors(corsOptions))



const port = process.env.PORT || 4000;



app.use('/api/auth', authRouter)
app.use('/api/form',contactRouter)
app.use("/api/data",serviceRouter)
app.use("/api/admin",adminRouter)


app.use(errorMiddleware)
mongoData().then(() => {
    app.listen(port, () => {
        console.log(`Connection sucessfull on http://localhost:${port}`)
    })
})
