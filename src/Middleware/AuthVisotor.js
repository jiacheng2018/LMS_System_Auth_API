const { validateToken } = require('../utils/jwt');
module.exports = (req, res, next) => {
          const authHeader = req.header('Authorization');
          if (!authHeader) {
                    return res.status(401).json('Access denied');
          }
};
