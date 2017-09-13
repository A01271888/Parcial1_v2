const exphbs = require ('express-handlebars');

const port = 8080;

const router = require('./router');
const app = router.app;

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.listen(port);