import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/verifyToken.js";

const prisma = new PrismaClient

const getUser = async (req, res) => {
  const payload = await verifyToken(req.body.token); //devuelve un objeto

  if (!payload.login) {
    res.status(400).json({ error: "Debe iniciar sesión" }); //usuario no autenticado
  }

  const user = await prisma.user.findMany({
    where: {
      id: payload.data.user[0].id,
    },
  });

  /*Si user no es array (!Array.isArray(user)) o si su length es igual a cero,
  el usuario no existe en la BD => manda error 400*/
  if (!Array.isArray(user) || user.length === 0) {
    res.status(404).json({ error: "El usuario no existe" });        
  }

  res.status(200).json(user);
}

export { getUser };