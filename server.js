const express = require('express');
const morgan = require('morgan');

const app = express();

const blogRouter = require('./blogRouter');

// log the http layer
app.use(morgan('common'));

/*app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});*/

app.use('/blogs', blogRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
