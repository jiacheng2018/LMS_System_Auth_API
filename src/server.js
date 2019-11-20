require('dotenv').config();
const app = express();
const cors = require('cors');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;
const morganLog =
          process.env.NODE_ENV === 'production'
                    ? morganLog('common')
                    : morgan('dev');
