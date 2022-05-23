import Joi from 'joi'

const bookSchema = Joi.object({
    _id: Joi.string(),
    name: Joi.string().min(1).max(200).required(),
    author: Joi.string().min(1).max(200).required(),
    pages_numer: Joi.number().integer().min(1).max(2000).required(),
    language: Joi.string().min(1).max(20).required(),
    published: Joi.number().integer().min(1).max(3000).required()
})

export default bookSchema;