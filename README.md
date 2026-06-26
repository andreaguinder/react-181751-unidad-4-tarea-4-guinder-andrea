# Mi Tarjeta de Presentación en React

## Descripción del Proyecto
Este proyecto es una aplicación web desarrollada con **React** y estructurada mediante **Vite**. Consiste en una página responsiva que renderiza tarjetas de presentación personalizadas utilizando un único componente funcional reutilizable (`Tarjeta.jsx`). 

El objetivo principal es practicar el paso de información mediante `props`, la escritura de marcado con `JSX`, el uso de preprocesadores de estilos como **SASS/SCSS**, y la correcta organización y limpieza de un entorno de desarrollo moderno.

---

## Estructura de Archivos Principal
La lógica y estructura del proyecto se organiza de la siguiente manera:
- `src/components/Tarjeta.jsx`: Componente funcional molde que recibe y procesa las props (`nombre`, `profesion`, `imagen`, `descripcion`).
- `src/App.jsx`: Componente principal que contiene los datos de la familia y renderiza las 3 tarjetas de forma dinámica.
- `src/assets/`: Carpeta que almacena las imágenes locales del proyecto de manera organizada.
- `src/styles/`: Carpeta con los archivos de estilos de SASS (`main.scss` y `_variables.scss`).

---

## Instrucciones para Ejecutar el Proyecto Localmente

Para clonar, instalar las dependencias y ejecutar este proyecto en tu entorno local, seguí estos pasos desde tu terminal:

1. **Clonar el repositorio:**
   ```bash
   git clone <https://github.com/andreaguinder/react-18751-unidad-4-tarea-4-guinder-andrea.git>

2. **Ingresar a la carpeta del proyecto**
Muévete dentro del directorio que se creó con el nombre del proyecto:
    ```bash
    cd react-18751-unidad-4-tarea-4-guinder-andrea

3. **Instalar las dependencias**
Instala todos los paquetes necesarios especificados en el package.json (incluyendo React y las herramientas de desarrollo como SASS):
    ```bash
    npm install

4. **Ejecutar el servidor de desarrollo**
Inicia el entorno de desarrollo local para ver la aplicación en el navegador:
    ```bash
    npm run dev

5. Abrir en el navegador
Una vez que la terminal te indique que el servidor está corriendo, abre tu navegador e ingresa la dirección que te figure ejemplo:

http://localhost:5173

##  Capturas de pantalla

En /src/proyecto adjunto capturas de pantalla de mobile y desktop de como se visualiza el proyecto en el navegador y también el pdf de la tarea.

##  Créditos del Autor

Estudiante: Andrea Guinder

Curso: React (Comisión 181751)

Unidad: Módulo 1 - Unidad 4

Institución: Universidad Tecnológica Nacional