
//environment configs
const PORT = process.env.PORT || 3000;



//Import dependencies
//
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


//instantiate server & apply middleware
//
const app = express();
app.use(bodyParser.json());

//  Serve Routes
//

//set default directory to server static files
app.use('/', express.static(path.resolve(__dirname, '../public')));


app.listen(PORT,()=>console.log("server listening on port",PORT));