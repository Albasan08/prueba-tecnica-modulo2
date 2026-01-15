1. Se ha pasado de un único archivo inseguro a una estructura de carpetas correcta siguiendo las pautas marcadas en clase y segura.
    - src/
        /controllers
            auth.controllers
        /routes
            auth.routes 
        app.js 

2. Se ha protegido la información sensible a través de las variables de entorno.:
    - Port
    - Clave secreta JWT
Después este archivo con las variables de entorno se ha incorporado en el documento .gitignore para proteger la información, como alternativa está .env.template

3. Se han dejado comentarios con diferentes posibilidades.

4. División de responsabilidades.