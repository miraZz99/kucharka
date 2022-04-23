const Joi = require('joi');





function validateRecipe(recip, allRequired = true) {
    const schema = Joi.object({
        name:              Joi.string().min(3),
        ingrediences:       Joi.array(),
        preparation:      Joi.string().regex(/^([0-9]{1,2})\:([0-9]{2})$/),
        evaluated:         Joi.number(),
        difficulty:         Joi.string().valid("Easy","Medium","Hard"),
        author: Joi.string()
    });

    return schema.validate(recip, { presence: (allRequired) ? "required" : "optional" });
}


module.exports.validateRecipe = validateRecipe

