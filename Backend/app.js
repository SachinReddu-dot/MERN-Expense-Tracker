const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const connectDB = require('./Config/connectDB')

const userRouter = require('./Routes/userRoute')
const incomeRouter = require('./Routes/incomeRoutes') 

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());

// const port = process.env.PORT || 5000;
connectDB()
.then(()=>{
    app.listen(3000);
    console.log(`port is running on ${3000}`)
});

app.use('/api/v1/auth', userRouter);
app.use('/api/v1/income', incomeRouter);

