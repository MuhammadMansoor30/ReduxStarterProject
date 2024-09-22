const express = require('express');
const cors = require('cors');
const taskRoutes = require('./route');
const port = 7333;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', taskRoutes);

app.listen(port, () => console.log(`Server Running on port ${port}`));