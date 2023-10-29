const auth = require("../Routes/auth");

function signupController(req, res) {
  res.render("pages/signup");
}

function newController(req, res) {

  const {error} = auth(req.body);
  if(error){
    return res.status(404).send(error.details[0].message);
  }
   else {
    res.send(req.body);
  }
}

module.exports = { newController, signupController };
