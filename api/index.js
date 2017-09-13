const exphbs = require('express-handlebars');

const PORT = 8888;

const router = require('./route');
const app = router.app;

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.listen(PORT);