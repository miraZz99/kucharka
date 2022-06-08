const { object } = require("joi");
const Joi = require("joi");

function validateRecipe(recip, allRequired = true) {
  const schema = Joi.object({
    name: Joi.string().min(3),
    description: Joi.string(),
    preparation: Joi.string().regex(/^([0-9]{1,2})\:([0-9]{2})$/),
    difficulty: Joi.string().valid("Easy", "Medium", "Hard"),
    author: Joi.string(),
    ingrediences: Joi.array(),
    image: Joi.string(),
  });

  return schema.validate(recip, {
    presence: allRequired ? "required" : "optional",
  });
}

module.exports.validateRecipe = validateRecipe;
