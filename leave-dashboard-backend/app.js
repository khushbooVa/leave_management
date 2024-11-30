const express = require('express');
require('./db_Config/index');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const cors = require('cors');
const app = express();
const empRoutes  = require('./routes/empRoutes');
const corsOptions=require('./utils/constant')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use('/api', empRoutes);
 
const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
