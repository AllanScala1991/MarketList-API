const express  = require('express');
const app  = express();
const cors = require('cors');

app.use(cors());
app.use(require('./src/controllers/userController'));
app.use(require('./src/controllers/listController'));
app.use(require('./src/controllers/itemController'));



app.listen(3000, () => {
    console.log("Server is running");
})

