import jwt from "jsonwebtoken";

const verifyToken = (token) => {
  if (token) {
    /*El jwt verifica y desencripta el token, volviendo a obtener la información del usuario,
    si es correcto retorna la informacion del token y una var bandera, sino, retorna error y
    la var bandera falsa*/
    const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    return{
      login: true,
      data: decode,
    };
  } else {
    return{
      login: false,
      data: "error",
    };
  }
};

export { verifyToken }
