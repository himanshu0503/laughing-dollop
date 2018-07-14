const express = require('express');
const app = express();
const path = require('path');

app.use(require('body-parser').json({limit: '10mb'}));
app.use(express.static('public'));
app.use('/static', express.static('public'));

app.get('/',
  (req, res) => res.send('Hello World!')
);

app.get(['/recommendations'],
  require('./controllers/recommendations')
);

app.post('/notifications', require('./controllers/notifications/post'));

app.listen(3000,
  () => console.log('Example app listening on port 3000!')
);
