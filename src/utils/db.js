const mongoose = require('mongoose');
exports.connectToDB = () => {
          const {
                    DB_HOST,
                    DB_PORT,
                    DB_UserName,
                    DB_DATABASE,
                    DB_PASSWORD
          } = process.env;
          let connectionsString;
          if (DB_UserName && DB_DATABASE) {
                    connectionsString = `mongodb+srv://${DB_UserName}:${DB_DATABASE}@${DB_HOST}/${DB_DATABASE}`;
          } else {
                    connectionsString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
          }
          return mongoose.connect(connectionsString, { useNewUrlParser: true });
};
