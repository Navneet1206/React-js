const Alumni = require('../models/Alumni');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
    const { alumniName, passoutYear, email, newPassword } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const newAlumni = new Alumni({ alumniName, passoutYear, email, newPassword: hashedPassword });
        await newAlumni.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { signUp };