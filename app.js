const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))
app.use('/static', express.static('public'))

app.get('/',
  (req, res) => res.send('Hello World!')
)

app.get(['/recommendations'],
  require('./controllers/recommendations')
);

app.listen(3000,
  () => console.log('Example app listening on port 3000!')
)
