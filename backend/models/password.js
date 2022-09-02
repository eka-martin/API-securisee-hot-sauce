const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
    .is().min(8)
    .is().max(64)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces()

module.exports = passwordSchema;