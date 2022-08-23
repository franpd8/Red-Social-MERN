#  React Red Social 
![foto](https://i.imgur.com/QnVIW1s.gif)
## Índice

* Sobre el proyecto
    * Instalación y despliegue
    * Tecnologías usadas
    * Origen
    * Objetivos
    * Concepto e inspiración

* Retos presentados

* Agradecimientos

* Autores

## Sobre el proyecto

Se presenta un proyecto Fullstack MERN de una red social con frontend desarrollado en React y con un backend desarrollado en MongoDb con Mongoose, utilizando Express y NodeJs.  En esta red social, los usuarios podrán registrarse, loguearse y hacer publicaciones (pudiendo darles like), además podrán seguir a otros usuarios y podrán utilizar un buscador para encontrar publicaciones. 

### 💫 Instalación y despliegue

Para descargarte el repositorio, abre una terminal y ejecuta el comando siguiente:

Frontend de la red social 
```
$ git clone https://github.com/franpd8/Red-Social-MERN
```
Backend de la red social
```
$ git clone https://github.com/franpd8/red-social-backend
```

 Seguidamente tendrás que descargar los módulos externos. Para ello, realiza el siguiente comando.

```
$ npm i
```

Después podrás adaptar ambos servidores con tu proyecto. Después, levanta el frontend de React así como el backend de Mongoose a través de:

```
$ npm start
```

Ahora podrás navegar a través del frontend cargando todos los usuarios y publicaciones del backend :) 

### 💻 Tecnologías usadas

* HTML
* CSS
* Sass
* Javascript
* NodeJS
* Express
* React
* React-Router
* Redux
* MongoDB
* Mongoose
* NodeJS 
* Axios 
* Ant-Design 

### Origen

Este proyecto está pensado como ejercicio final en The Bridge que nos permita poner en práctica los nuevos conocimientos adquiridos sobre MongoDB, Express, React y NodeJS, generando así un proyecto Fullstack MERN.  Vienen de la mano el familizarnos con crear diversos componentes en React y poder acceder de forma global al contenido de ciertas funciones que nos han ayudado a desarrollar el proyecto.  De la misma manera aprovechamos un proyecto anterior de Backend con Mongoose,que necesariamente habrá de sufrir modicaciones para adaptarse al nuevo proyecto. 

### ⚔️ Objetivos

Crear una API REST que sea capaz de lo siguiente:
* Registro de usuarios.
* Login de usuarios.
* Que se pueda ver las publicaciones y crear nuevas.
* Que se puedan editar y eliminar las publicaciones que hace el usuario logeado
* Dar/quitar Like a post.
* Buscador de perfiles de posts
* Que en tu perfil puedas ver tus datos y tus posts


#### ⚔️ Componentes mínimos:
* Register
* Login
* Home
* Posts
* AddPosts
* PostDetail
* Product
* Perfil. Vista perfil con los datos del usuario logeado y sus publicaciones
* Header
* Footer

#### ⚔️ Desafío:
* Los componentes no podrán sobrepasar las 400 líneas de código.
* Las funciones no deberán sobrepasar las 75 líneas de código.

### ⚔️ Funciones


En esta red social, el usuario puede acceder a diferentes páginas para ver las publicaciones de distintos usuarios. 

<br>

Para este sencillo ejercicio hemos creado cuatro vistas: home, people, profile, y además el buscador de post.
<br>



> <b>Home</b> <br/>
En la home encontramos diferentes creatividades que sirven como enlace a las distintas secciones de la aplicación. En home se pueden todas las publicaciones de los diferentes usuarios. En dichas publicaciones se muestra la imagen, el contador de likes y la descripción de la publicación.  <br> —— Al hacer click en la imagen nos llevará a la publicación en detalle con información extra.  <br> —— Al hacer click en el corazón, sumará un like al contador. 

<br>

![foto](https://imgur.com/B0C153g.gif)


><b>Perfil</b>
<br> En la página de perfil mostramos la información del usuario conectado en ese momento. Se puede ver nombre, biografía, enlace externo así como editar estos campos. Dentro del perfil tenemos además las publicaciones realizadas por el mismo, los usuarios a quien sigue, y los usuarios que le siguen.
<br> —— Mostramos además las estadísticas del usuario: número de post, seguidores y seguidos.
<br> —— Mostramos foto de perfil y foto de cabecera.
<br> —— Editamos el propio perfil.
<br> —— Las publicaciones mostradas en el perfil enlazan con la publicación en detalle.
<br> —— Al hacer click en los usuarios seguidos o en los seguidores podemos ir a sus respectivo perfil.

<br>

![foto](https://imgur.com/VgPYCTD.gif)

><b>Personas</b><br> Mostramos los usuarios registrados en la plataforma, indicando sus estadísticas, si los seguimos o si nos siguen ellos. 
<br> —— Al hacer click en sus tarjetas podremos acceder a su perfil.

<br>

![foto](https://i.imgur.com/VgPYCTD.gif)

><b>Perfil de usuarios</b><br>
Muestra toda la información del usuarios que estamos visitando, su descripción, sus estadísticas y publicaciones.  <br> —— Aparece la opción de seguir al usuario en caso de no hacerlo. 
<br> —— Podemos ver qué usuarios le siguen a quienes siguen. 

<br>

><b>Búsqueda de publicaciones</b>
<br> En la barra superior de la plataforma podemos hacer una búsqueda de publicaciones por nombre. Las publicaciones que coincidan se mostrarán y podremos acceder a ellas. 
<br>—— Al hacer click en la imagen nos llevará a la publicación en detalle con información extra.

![foto](https://imgur.com/Dwlw2ky.gif)
><b>Crear publicaciones </b>
El usuario puede crear publicaciones que se añadirán automáticamente al feed de home. 




![foto](https://i.imgur.com/cyPZ5Sf.png)
—— Login——<br>
La pantalla de login resulta sencilla y permite acceder al usuario introduciendo sus campos. De no ser un usuario registrado puede acceder a la pantalla de registro desde el login directamente. Mostramos notificación para informar al usuario de su proceso exitoso.

![foto](https://i.imgur.com/OXgoweF.png)

—— Registro——<br>
Similar a la pantalla de login nos permite crear nuevos usuarios e ingresarlos en la base de datos para posteriormente hacer login. Mostramos notificación para informar al usuario de su proceso exitoso. Al registrarnos se nos redirigirá a la pantalla de login. 



## 🔜 Futuras Implementaciones

* Diseño responsive. 
* Corregir bugs 
* Añadir imágenes de forma local
* Añadir edición de publicaciones en vista de detalle.
* Añadir <i>Comentarios</i> a las publicaciones.
* Ver las publicaciones que han gustado al usuario.

##  ♥️ Agradecimientos

A todos los compis([Mike](https://github.com/MrSetOne),[Gabry](https://github.com/Gabo-Tech), [Xavi](https://github.com/xavi-mat) y [Vane](https://github.com/vaneebg/)) y profes en general: ([Sofía](https://github.com/SofiaPinilla), [Geer](https://github.com/GeerDev) e [Iván](https://github.com/ivanpuebla10)]).


## Autor

### 🐈‍⬛[Fran](https://github.com/franpd8)🐈‍⬛
