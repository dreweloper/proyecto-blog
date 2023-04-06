const User = require('../models/modelUser');
const bcrypt = require('bcryptjs');


const createUser = async (req, res) => {

    // encriptar password
    let salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User(req.body);

    try {
        
        const user = await newUser.save();

        // generar token

        return res.status(201).json({
            ok: true,
            uid: user._id,
            name: user.name,
            email: user.email,
            password: user.password,

        });

    } catch (error) {
        
        console.log(`createUser controller error: ${error}`);
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });

    };

}; //!FUNC-REGISTERUSER


const loginUser = async (req, res) => {

    res.send('Capturando la ruta');

}; //!FUNC-LOGIN


const renewToken = async (req, res) => {

    res.send('Capturando la ruta');

}; //!FUNC-RENEW


module.exports = {
    createUser,
    loginUser,
    renewToken
};