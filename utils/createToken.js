import jwt from "jsonwebtoken";

const generateToken = (user) => {
    /*el jwt.sign tiene dos argumentos:
    1) los datos que quiero que contenga el token
    2) clave secreta para firmar el token*/
    return jwt.sign({ user }, process.env.JWT_ACCESS_SECRET)
};

export { generateToken };
