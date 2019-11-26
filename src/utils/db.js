const mongoose = require('mongoose');
exports.connectToDB = () => {
          const { DB_HOST, DB_PORT, DB_DATABSE } = process.env;
          connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABSE}`;
          return mongoose.connect(connectionString, { useNewUrlParser: true });
};
