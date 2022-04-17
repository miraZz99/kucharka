const Joi = require('joi');





function validateRecipe(recip, allRequired = true) {
    const schema = Joi.object({
        name:              Joi.string().min(3),
        ingrediences:       Joi.array(),
        preparation:       Joi.number(),
        evaluated:         Joi.number(),
        difficulty:         Joi.string().valid("easy","medium","hard"),
        registration_date: Joi.date(),
        author: Joi.string()
    });

    return schema.validate(recip, { presence: (allRequired) ? "required" : "optional" });
}


module.exports.validateRecipe = validateRecipe

