import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

//Se utiliza async por estar constantemente apuntando a una BD
const createUser = async (req, res) => {
  try {
    const body = req.body; //contiene toda la info del req

    //creación de usuario
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
    },
  });

    //respuesta exitosa
    res.status(200).json({ user: user });

  } catch (err) {
    //el error me lo comentó Lucas Maurojorge
    if (err.code === "P2002") {
      res.json({ error: "Las credenciales del usuario se repiten" });
    } else {
      //cualquier error
      res.json(err);
    }
  }
};

export { createUser };