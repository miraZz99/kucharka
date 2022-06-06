const { object } = require('joi');
const Joi = require('joi');





function validateRecipe(recip, allRequired = true) {
    const schema = Joi.object({
        name:              Joi.string().min(3).regex(/^[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ \\.\\\']+$/).required(),
        description:       Joi.string().required(),
        preparation:      Joi.string().regex(/^([0-9]{1,2})\:([0-9]{2})$/).required(),
        difficulty:         Joi.string().valid("Easy","Medium","Hard").required(),
        author: Joi.string().regex(/^[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ \\.\\\']+$/).required(),
        ingrediences: Joi.array().required()
    });

    return schema.validate(recip, { presence: (allRequired) ? "required" : "optional" });
}


module.exports.validateRecipe = validateRecipe

