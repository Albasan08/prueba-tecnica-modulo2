
![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png  "logotipo de The Bridge")

# **BOOTCAMP FULLSTACK**

## Fullstack FT 

---
# Módulo 2 — Node / Express (enunciado)

Objetivo: entregar una versión corregida y segura de la API de ejemplo ubicada en este directorio.

Enunciado de la práctica:
- Analiza la API existente, identifica fallos funcionales, riesgos de seguridad y malas prácticas de implementación.
- Corrige los problemas detectados y asegura el correcto funcionamiento de los endpoints expuestos.
- Documenta los cambios y añade pruebas o scripts de verificación que demuestren que las correcciones funcionan.

Requisitos operativos:
- La API debe exponer un endpoint de autenticación (ej. `/login`) y un endpoint protegido que devuelva información del usuario autenticado (ej. `/me`).
- Los endpoints deben poder probarse localmente usando curl / Postman u otra herramienta similar.
- Debes incluir una breve justificación de los cambios en un archivo CHANGES.md.

Comandos y ejecución:
- npm install
- npm start
- Probar con curl / Postman: POST /login { "username": "juan" } y luego GET /me (usando las credenciales/tokens que implemente).

Criterios de evaluación:
- Funcionamiento correcto de los endpoints según lo descrito.
- Calidad del código: organización, manejo de errores y claridad.
- Tratamiento y documentación de riesgos de seguridad detectados.
- Pruebas o scripts que verifiquen los cambios realizados.

Tiempo recomendado: 60–90 minutos.
