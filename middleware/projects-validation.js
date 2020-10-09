const projects = require('../data/helpers/projectModel');

function validateProject() {
  return(req, res, next) => {
    if (!req.body.name || !req.body.description) {
      return res.status(400).json({
        message: "Missing required name or description"
      })
    }
    next()
  }
}

module.exports = {
  validateProject
}