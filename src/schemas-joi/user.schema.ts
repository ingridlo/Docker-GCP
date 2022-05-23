import Joi from 'joi'

const userSchema = Joi.object({
    email: Joi.string().email({minDomainSegments: 2}),
    password: Joi.string()
})

export default userSchema;