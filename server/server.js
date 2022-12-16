const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;

require('./config/mongoose.config');

app.use(cors({origin:"http://localhost:3000"}))
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));

const teamManagerRoutes = require("./routes/teamManager.routes");
teamManagerRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );