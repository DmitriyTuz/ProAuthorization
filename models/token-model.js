const {Schema, model} = require('mongoose')

const TokenSchema = new Schema({
    refreshToken: {type: String, require: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('Token', TokenSchema)