import { PrismaClient } from "@prisma/client";
import { generateToken } from "../utils/createToken.js";

const prisma = new PrismaClient

const loginUser = async (req, res) => {
  const body = req.body;

  //busca en la BD
  const user = await prisma.user.findMany({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  /*el object.keys devuelve un array de las claves user, 
  la comparación es útil para saber si está vacío, 
  de ser true no existe tal usuario en BD*/
  if (Object.keys(user).length === 0) {
    res.status(404).json({ error: "El usuario ingresado no existe" })
  }

  const token = generateToken(user);
  res.json({ token: token });

}

export { loginUser };