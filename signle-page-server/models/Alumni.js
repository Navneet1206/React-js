const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
    alumniName: { type: String, required: true },
    passoutYear: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    newPassword: { type: String, required: true },
});

const Alumni = mongoose.model('Alumni', alumniSchema);
module.exports = Alumni;