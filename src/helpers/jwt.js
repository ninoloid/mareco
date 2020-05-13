const jwt = require('jsonwebtoken')

module.exports = {
  sign(payload) {
    return jwt.sign(payload, process.env.REACT_APP_SECRET)
  },

  verify(token) {
    return jwt.verify(token, process.env.REACT_APP_SECRET)
  }
}