🐶 Desafío – Veterinaria JS
👩‍💻 Autor
Celeste Nicole Lluen Delgado

📌 Descripción

Este proyecto corresponde al Desafío Veterinaria JS, donde se desarrolla una pequeña aplicación backend utilizando Node.js, que permite registrar y leer citas de atención veterinaria a través de la línea de comandos.

La información de las citas se guarda en un archivo JSON utilizando el módulo File System de Node.js.

📁 Estructura del proyecto
Veterinaria_JS_Celeste_Lluen
├── index.js
├── operaciones.js
└── citas.json

⚙️ Tecnologías utilizadas

Node.js

JavaScript

File System (fs)

Visual Studio Code

▶️ Ejecución del proyecto

El proyecto se ejecuta desde la terminal integrada de Visual Studio Code.

🔹 Registrar una cita
node index.js registrar Benito "2 años" perro blanco vomitos


📌 Esto registra una nueva cita en el archivo citas.json.

🔹 Leer las citas registradas
node index.js leer


📌 Muestra por consola todas las citas almacenadas.

🗂️ Funcionamiento del sistema

index.js
Archivo principal que recibe los argumentos por línea de comandos y determina qué acción ejecutar.

operaciones.js
Contiene las funciones para:

Registrar una nueva cita veterinaria.

Leer y mostrar las citas almacenadas.

citas.json
Archivo que almacena las citas en formato JSON.
Al iniciar el proyecto, se encuentra vacío.

📸 Evidencias de ejecución:

<img width="611" height="210" alt="image" src="https://github.com/user-attachments/assets/af528b98-2450-4a7f-ba4e-d2607c9ae41d" />

<img width="1312" height="688" alt="image" src="https://github.com/user-attachments/assets/bce8074b-9c4a-489f-90c3-3aeb4fda79ef" />




✅ Conclusión

El proyecto cumple con todos los requerimientos del desafío, haciendo uso correcto de Node.js, el módulo File System, el manejo de archivos JSON y la ejecución mediante argumentos por línea de comandos.
