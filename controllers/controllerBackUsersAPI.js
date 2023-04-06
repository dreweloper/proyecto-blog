const User = require('../models/modelUser');


const createUser = async (req, res) => {

    const newUser = new User(req.body);

    try {
      
        const user = await newUser.save();

        return res.status(201).json({
            ok: true,
            user
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