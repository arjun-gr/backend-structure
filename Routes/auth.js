const Joi = require('joi')

function auth(bdy){
  const schema = Joi.object({
    email:Joi.string().required().email(),
    password:Joi.string().required().min(5)
  })

  return schema.validate(bdy)
}

module.exports = auth