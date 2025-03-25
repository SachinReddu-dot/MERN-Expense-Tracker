const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const path = require('path')

const connectDB = require('./Config/connectDB')

const userRouter = require('./Routes/userRoute')
const incomeRouter = require('./Routes/incomeRoutes') 
const expenseRouter = require('./Routes/expenseRoutes') 
const dashboardRouter = require('./Routes/dashboardRoutes')

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")))

// const port = process.env.PORT || 5000;
connectDB()
.then(()=>{
    app.listen(3000);
    console.log(`port is running on ${3000}`)
});

app.use('/api/v1/auth', userRouter);
app.use('/api/v1/income', incomeRouter);
app.use('/api/v1/expense', expenseRouter);
app.use('/api/v1/dashboard', dashboardRouter);


