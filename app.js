const express = require('express');
const heroesRoutes = require('./routes/heroes');
const mainRoutes = require('./routes/main');
const fs = require('fs');


const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));
app.use('/heroes', heroesRoutes );
app.use('/',  mainRoutes );



