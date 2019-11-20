require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const morganLog =
          process.env.NODE_ENV === 'production'
                    ? morgan('common')
                    : morgan('dev');
app.use(helmet());
app.use(morganLog);
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.get('/', (req, res) => {
          res.json('hello');
});
app.listen(PORT, () => {
          console.log(`Server on port ${PORT}`);
});
