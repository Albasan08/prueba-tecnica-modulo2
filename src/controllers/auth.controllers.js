// IMPORTACIONES PROPIAS
const secret = process.env.SECRET
const jwt = require("jsonwebtoken");

const login = async (req, res) => {

  console.log(req.body)
  console.log(req.headers)

  const { username, password } = req.body

  try {
    // Comprobar campos - Se podría hacer con un express validator + middleware
    if(!username || !password) {

      return res.status(400).json({
        ok: false,
        mensaje: "Error, email o contraseñas no introducidos"
      });

    }

    // Se comprobaría si la información es correcta cotejando con la BBDD para comprobar: 1. Que el usuario existe 2. Que los datos del usuario son correctos

    const token = jwt.sign(username, secret);

    res.cookie('token', token, { 
      httpOnly: true 
    });

    return res.status(200).json({
      ok: true,
      mensaje: "Login correcto",
    });

  } catch (error) {

    console.log(error);
    return res.status(500).json({
      ok: false,
      mensaje: "Contacte con el administrador"
    });

  }
}

const obtenerInfoMe = async (req, res) => {

  const token = req.cookies.token;
  console.log(token);

  try {

    // Comprobar token (usuario ha iniciado sesión)
    if(!token) {
      
      return res.status(400).json({
        ok: false,
        mensaje: "Error, el usuario no ha iniciado sesión"
      });

    }
    // Comprobar token con la clave secreta
    const payload = jwt.verify(token, secret);

    // Obtener información del usuario a través de la BBDD

    return res.status(200).json({
      ok: true,
      mensaje: "Datos del usuario encontrados correctamente",
      data: payload
    });

    //const end = Date.now() + 200; while (Date.now() < end) { /* espera activa */ }

  } catch(error) {
    
    console.log(error);
    return res.status(500).json({
      ok: false,
      mensaje: "Contacte con el administrador"
    });

  }

}

// EXPORTAR
module.exports = { 
  login,
  obtenerInfoMe
}