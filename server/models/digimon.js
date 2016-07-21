/* eslint-disable no-use-before-define, func-names, eqeqeq, consistent-return, no-underscore-dangle, max-len */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    picture: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Digimon', schema);