const express = require('express');
const cors = require('cors');

const PORT = 8000;
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors(corsOptions));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => console.log(`Server Running ${PORT} port`));
