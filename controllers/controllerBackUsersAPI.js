const User = require('../models/modelUser');
const bcrypt = require('bcryptjs');
const generateJWT = require('../helpers/generateJWT')


const createUser = async (req, res) => {
    
    const newUser = new User(req.body);

    try {

        // encriptar password
        let salt = bcrypt.genSaltSync(10);
        newUser.password = bcrypt.hashSync(req.body.password, salt);

        const user = await newUser.save();

        // generar token
        const token = await generateJWT(user._id, user.name);

        return res.status(201).json({
            ok: true,
            uid: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token
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

    const { email, password } = req.body;

    try {

        const user = await User.findOne( { email } ); // utilizo findOne() porque devuelve el objeto directamente (find() devuelve array de obj.)
        
        const pass = bcrypt.compareSync(password, user.password);

        if(user == null || !pass){

            return res.status(401).json({
                ok: false,
                msg: 'ERROR: e-maill o password incorrecto.'
            });

        } else {

            const token = await generateJWT(user._id, user.name);

            return res.status(200).json({
                ok: true,
                msg: 'Credenciales correctas.',
                token
            });

        };

    } catch (error) {
        
        console.log(`createUser controller error: ${error}`);
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });

    };

}; //!FUNC-LOGIN


const renewToken = async (req, res) => {

    res.send('Capturando la ruta');

}; //!FUNC-RENEW


module.exports = {
    createUser,
    loginUser,
    renewToken
};