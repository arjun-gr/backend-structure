function signupController(req, res) {
  res.render("pages/signup");
}

function newController(req, res) {
  const { email, password } = req.body;

  if (email.length === 0 || password.length === 0) {
    return res.status(404).send("Bad request");
  } else {
    res.send(req.body);
  }
}

module.exports = { newController, signupController };
